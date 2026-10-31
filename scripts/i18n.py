#!/usr/bin/env python3
"""Klikklokal i18n generator.
Source of truth: the Norwegian (nb) HTML pages in the repo root.
Writes en/, sv/, pl/ copies (translated) and refreshes the NO/EN/SV/PL switcher,
hreflang, canonical and og tags on every page. Spanish (es) is never generated.
Translations come from scripts/i18n-cache.json; only strings missing from the cache
are machine-translated (needs network). Requires: pip install beautifulsoup4 requests
"""
import sys,os,re,json,time,glob
from bs4 import BeautifulSoup, NavigableString, Comment, Doctype, Declaration, ProcessingInstruction
from deep_translator import GoogleTranslator
repo='klikklokal'; R=os.path.dirname(os.path.dirname(os.path.abspath(__file__))); os.chdir(R)
DOM=f'https://{repo}.no'
LANGS=['en','sv','pl']; LBL={'nb':'NO','en':'EN','sv':'SV','pl':'PL'}
PROTECT=['935 407 095 MVA','NO','EN','SV','PL','Synlig 14','Snuttverk','Kobleverk','Klikklokal','Hallobot','Synlig14','ML Digital','MARTINEZ LOZANO INTERNASJONAL HANDEL','Martinez Lozano Internasjonal Handel','935 407 095','Org.nr.','org.nr.','Willy Martinez','Turnstile','Cloudflare','Google Ads','Meta']
CACHE=os.path.join(R,'scripts','i18n-cache.json')
cache=json.load(open(CACHE)) if os.path.exists(CACHE) else {}
def prot(s):
    m={}
    for i,p in enumerate(sorted(PROTECT,key=len,reverse=True)):
        if p in s: k=f'QZ{i}Q'; s=s.replace(p,k); m[k]=p
    return s,m
import requests
def gx(batch,lang):
    for a in range(8):
        try:
            r=requests.get('https://clients5.google.com/translate_a/t',params=[('client','dict-chrome-ex'),('sl','no'),('tl',lang)]+[('q',q) for q in batch],timeout=30)
            if r.status_code==200:
                j=r.json()
                out=[x if isinstance(x,str) else x[0] for x in j]
                if len(out)==len(batch): return out
        except Exception: pass
        time.sleep(4*(a+1))
    raise SystemExit('translate fail')
def tr_many(strs,lang):
    todo=[x for x in dict.fromkeys(strs) if f'{lang}|{x}' not in cache]
    i=0
    while i<len(todo):
        batch=[];n=0
        while i<len(todo) and len(batch)<25 and n+len(todo[i])<2500 or (i<len(todo) and not batch):
            batch.append(todo[i]);n+=len(todo[i]);i+=1
        ps=[prot(x) for x in batch]
        outs=gx([p[0] for p in ps],lang)
        for x,(_,m),t in zip(batch,ps,outs):
            for k,v in m.items(): t=re.sub(r'Q\s*Z\s*'+k[2:-1]+r'\s*Q',lambda _:v,t,flags=re.I)
            cache[f'{lang}|{x}']=t.strip()
        json.dump(cache,open(CACHE,'w'),ensure_ascii=False)
        time.sleep(0.5)
    return {x:cache[f'{lang}|{x}'] for x in strs}
pages=sorted(p for p in glob.glob('**/index.html',recursive=True)+['404.html'] if not p.startswith(('es/','en/','sv/','pl/','dist/','functions/')))
def url_of(p): return '/' if p=='index.html' else ('/404.html' if p=='404.html' else '/'+p[:-10])
PAGEURLS={url_of(p) for p in pages}
ATTRS=['title','alt','placeholder','aria-label']
META_N={'description','twitter:title','twitter:description'}; META_P={'og:title','og:description','og:image:alt'}
SKIP={'script','style','code','noscript'}
def nodes(soup):
    out=[]
    for t in soup.find_all(string=True):
        if isinstance(t,(Comment,Doctype,Declaration,ProcessingInstruction)) or t.parent is None or t.parent.name in SKIP: continue
        if any(par.get('translate')=='no' for par in t.parents if hasattr(par,'get')): continue
        s=re.sub(r'\s+',' ',str(t)).strip()
        if re.search(r'[A-Za-zÆØÅæøå]{2,}',s) and s not in PROTECT and not re.fullmatch(r'[\w.+-]+@[\w.-]+|https?://\S+|\+?[\d ]+',s): out.append(('t',t,s))
    for el in soup.find_all(True):
        for a in ATTRS:
            v=el.get(a)
            if isinstance(v,str) and re.search(r'[A-Za-zÆØÅæøå]{2,}',v) and v not in PROTECT: out.append(('a',(el,a),v))
        if el.name=='meta' and (el.get('name') in META_N or el.get('property') in META_P) and el.get('content'):
            out.append(('a',(el,'content'),el['content']))
    return out
def pref(lang,u):
    return u if lang=='nb' else '/'+lang+u
def fixlinks(soup,lang):
    for el in soup.find_all(['a','form']):
        k='href' if el.name=='a' else 'action'
        h=el.get(k)
        if el.get('hreflang') in LBL and el.get('lang'): continue
        if not h or not h.startswith('/') or h.startswith('//'): continue
        path=re.split(r'[?#]',h)[0]; rest=h[len(path):]
        if path.startswith('/es'): path='/'
        if path in PAGEURLS or path+'/' in PAGEURLS:
            el[k]=pref(lang,path if path in PAGEURLS else path+'/')+rest
        elif path=='/' : el[k]=pref(lang,'/')+rest
def headfix(soup,lang,u):
    soup.html['lang']=lang
    for l in soup.find_all('link',rel='alternate'):
        if l.get('hreflang'): l.decompose()
    head=soup.head
    canon=soup.find('link',rel='canonical')
    if canon: canon['href']=DOM+pref(lang,u)
    og=soup.find('meta',property='og:url')
    if og: og['content']=DOM+pref(lang,u)
    if u!='/404.html':
        for L in ['nb','en','sv','pl']+['x-default']:
            t=soup.new_tag('link',rel='alternate',hreflang=L,href=DOM+pref('nb' if L=='x-default' else L,u))
            head.append(t)
    ol=soup.find('meta',property='og:locale')
    if ol: ol['content']={'nb':'nb_NO','en':'en_GB','sv':'sv_SE','pl':'pl_PL'}[lang]
    for m in soup.find_all('meta',property='og:locale:alternate'): m.decompose()
    for s in soup.find_all('script',type='application/ld+json'):
        txt=s.string or ''
        txt=re.sub(r'"knowsLanguage"\s*:\s*\[[^\]]*\]','"knowsLanguage": ["nb", "en", "sv", "pl"]',txt)
        txt=re.sub(r'"inLanguage"\s*:\s*"[^"]*"',f'"inLanguage": "{lang}"',txt)
        s.string=txt
def switcher(soup,lang,u):
    conts=[]
    for a in soup.select('a[href^="/es"]'):
        p=a.parent
        if not any(p is c for c in conts): conts.append(p)
    conts+= [x for x in soup.select('.lang-switch') if not any(x is c for c in conts)]
    if not conts:
        nav=soup.find('nav') or soup.find('header')
        sw=soup.new_tag('span'); sw['class']='lang-switch'; sw['aria-label']='Language'
        sw['style']='margin-left:12px;font-size:.9em'
        if nav: nav.append(sw)
        else:
            d=soup.new_tag('div'); d['style']='text-align:right;padding:8px 16px'; d.append(sw); soup.body.insert(0,d)
        conts=[sw]
    for sw in conts:
        sw.clear()
        for i,L in enumerate(['nb','en','sv','pl']):
            if i: sp=soup.new_tag('span'); sp['aria-hidden']='true'; sp.string=' | '; sw.append(sp)
            a=soup.new_tag('a',href=pref(L,u if u!='/404.html' else '/'),hreflang=L,lang=L); a.string=LBL[L]
            if L==lang: a['aria-current']='page'
            sw.append(a)
    return len(conts)
COOK={'nb':('Vi bruker kun nødvendige informasjonskapsler (cookies).','Personvern','Avvis'),
 'en':('We only use essential cookies.','Privacy','Decline'),
 'sv':('Vi använder endast nödvändiga cookies.','Integritet','Avvisa'),
 'pl':('Używamy wyłącznie niezbędnych plików cookie.','Prywatność','Odrzuć')}
def cookie(html,lang):
    c=COOK[lang]
    html=html.replace('Vi bruker kun nødvendige informasjonskapsler (cookies). / We only use essential cookies.',c[0])
    html=html.replace('<a href="/personvern/" style="color:#9cf">Personvern</a>',f'<a href="{pref(lang,"/personvern/")}" style="color:#9cf">{c[1]}</a>')
    html=html.replace('Avvis / Decline',c[2])
    n=COOK['nb']
    if lang!='nb':
        html=html.replace(n[0],c[0])
        html=html.replace('<span>'+n[0]+' <a href="/personvern/" style="color:#9cf">'+n[1]+'</a>','<span>'+c[0]+f' <a href="{pref(lang,"/personvern/")}" style="color:#9cf">'+c[1]+'</a>')
        html=html.replace('<span>'+n[0]+' <a href="'+pref(lang,"/personvern/")+'" style="color:#9cf">'+n[1]+'</a>','<span>'+c[0]+f' <a href="{pref(lang,"/personvern/")}" style="color:#9cf">'+c[1]+'</a>')
        html=html.replace('data-v="no">'+n[2]+'<','data-v="no">'+c[2]+'<')
    return html

TKEYS={'name','text','description','headline','slogan','serviceType','alternateName','category'}
def ld_tr(soup,lang):
    for sc in soup.find_all('script',type='application/ld+json'):
        try: data=json.loads(sc.string or '')
        except Exception: continue
        bag=[]
        def walk(o):
            if isinstance(o,dict):
                for k,v in o.items():
                    if k in TKEYS and isinstance(v,str) and v not in PROTECT and re.search(r'[a-zæøå]{3}',v): bag.append(v)
                    else: walk(v)
            elif isinstance(o,list):
                for x in o: walk(x)
        walk(data)
        m=tr_many(bag,lang)
        def rep(o):
            if isinstance(o,dict):
                return {k:(m.get(v,v) if k in TKEYS and isinstance(v,str) else rep(v)) for k,v in o.items()}
            if isinstance(o,list): return [rep(x) for x in o]
            return o
        sc.string=json.dumps(rep(data),ensure_ascii=False,indent=2)

ES_FRAG=[' / Página no encontrada – ',' | Página no encontrada – ',' / Página no encontrada',' | Página no encontrada',' / La página no existe.']
def preclean(soup,p):
    if p!='404.html': return
    for el in soup.find_all(attrs={'lang':'es'}):
        if el.name=='a' and el.get_text(strip=True)=='ES': continue
        if not el.find('a',string=re.compile(r'^\s*ES\s*$')): el.decompose()
    for a in soup.select('a[href^="/es"]'):
        if a.get_text(strip=True)!='ES': a.decompose()
    for t in soup.find_all(string=True):
        s=str(t); n=s
        for f in ES_FRAG: n=n.replace(f,' – ' if f.endswith('– ') else '')
        if n!=s: t.replace_with(n)
    for el in soup.find_all(['meta']):
        c=el.get('content')
        if c:
            n=c
            for f in ES_FRAG: n=n.replace(f,' – ' if f.endswith('– ') else '')
            el['content']=n
report={}
for p in pages:
    u=url_of(p); src=open(p,encoding='utf-8').read()
    for lang in ['nb']+LANGS:
        soup=BeautifulSoup(src,'html.parser'); preclean(soup,p)
        if lang!='nb':
            ns=nodes(soup); m=tr_many([n[2] for n in ns],lang)
            for kind,ref,s in ns:
                t=m[s]
                if kind=='t':
                    o=str(ref); lead=' ' if o[:1].isspace() else ''; trail=' ' if o[-1:].isspace() else ''
                    ref.replace_with(lead+t+trail)
                else: ref[0][ref[1]]=t
        n=switcher(soup,lang,u)
        if lang!='nb': ld_tr(soup,lang)
        if lang!='nb':
            for el in soup.find_all(attrs={'lang':'nb'}):
                if el.name!='a' or not el.get('hreflang'): el['lang']=lang
        fixlinks(soup,lang); headfix(soup,lang,u)
        if n==0: report.setdefault('noswitch',[]).append(p)
        out=cookie(str(soup),lang)
        dest=p if lang=='nb' else (f'{lang}/404.html' if p=='404.html' else f'{lang}/{p}')
        os.makedirs(os.path.dirname(dest) or '.',exist_ok=True)
        open(dest,'w',encoding='utf-8').write(out)
    print('ok',p,flush=True)
print('i18n done', json.dumps(report))
