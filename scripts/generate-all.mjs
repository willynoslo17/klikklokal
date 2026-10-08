#!/usr/bin/env node
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import {
  BASE,
  documentHead,
  nav,
  footer,
  PRICE_NOTE_NB,
  PRICE_NOTE_ES,
  TODO_PRICE
} from "./lib-html.mjs";
import {
  googleAdsNb,
  metaNb,
  priserNb,
  sjekkNb,
  kontaktNb,
  personvernNb
} from "./pages-nb.mjs";
import {
  googleAdsEs,
  metaEs,
  priserEs,
  sjekkEs,
  kontaktEs,
  personvernEs
} from "./pages-es.mjs";

const ROOT = new URL("..", import.meta.url).pathname;
function write(rel, content) {
  const path = join(ROOT, rel);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content);
  console.log("wrote", rel);
}

const homeOrgLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "Klikklokal",
  legalName: "MARTINEZ LOZANO INTERNASJONAL HANDEL",
  description:
    "Klikklokal er en del av ML Digital. Google Ads og Facebook-annonser for lokale bedrifter i Norge.",
  url: `${BASE}/`,
  logo: `${BASE}/favicon.svg`,
  telephone: "+4791290416",
  email: "willynoslo17@gmail.com",
  identifier: {
    "@type": "PropertyValue",
    name: "Organisasjonsnummer",
    value: "935407095"
  },
  vatID: "NO935407095MVA",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Norbygata 19",
    postalCode: "0187",
    addressLocality: "Oslo",
    addressCountry: "NO"
  },
  areaServed: [
    { "@type": "Country", name: "Norge" },
    { "@type": "City", name: "Oslo" }
  ],
  founder: {
    "@type": "Person",
    name: "Willy Edison Martínez Lozano",
    sameAs: ["https://willymartinez.no/consulting"]
  },
  knowsLanguage: ["nb", "es", "en"],
  makesOffer: [
    {
      "@type": "Offer",
      name: "Meta Lokal",
      price: "2990",
      priceCurrency: "NOK",
      valueAddedTaxIncluded: false,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "2990",
        priceCurrency: "NOK",
        valueAddedTaxIncluded: false,
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: 1,
          unitCode: "MON"
        }
      }
    },
    {
      "@type": "Offer",
      name: "Google Lokal",
      price: "3990",
      priceCurrency: "NOK",
      valueAddedTaxIncluded: false,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "3990",
        priceCurrency: "NOK",
        valueAddedTaxIncluded: false,
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: 1,
          unitCode: "MON"
        }
      }
    }
  ]
};

write(
  "index.html",
  `${documentHead({
    lang: "nb",
    title: "Klikklokal – Google- og Meta-annonser for lokale bedrifter",
    description:
      "Google Ads og Facebook-annonser for lokale bedrifter i Norge. Fast månedspris, ingen bindingstid, og du eier annonsekontoen.",
    path: "/",
    altPath: "/es/",
    locale: "nb_NO",
    extra: `<script type="application/ld+json">\n${JSON.stringify(homeOrgLd, null, 2)}\n</script>\n`
  })}
<body>
${nav("nb", "home")}
<main id="innhold">
  <!-- TODO Willy: no anunciar esta web hasta haber hecho 1–2 campañas reales para tus propias webs (práctica en Google Ads y Meta). -->
  <section class="hero">
    <div class="wrap hero-grid">
      <div>
        <h1>Bli funnet av kunder i nærheten – på Google og Facebook, til fast månedspris</h1>
        <p class="lead">Jeg setter opp og styrer annonsene dine på norsk og spansk. Google Ads fra 3&nbsp;990&nbsp;kr/mnd og Facebook-annonser fra 2&nbsp;990&nbsp;kr/mnd eks. mva. Ingen bindingstid, og du eier kontoen.</p>
        <div class="cta-row">
          <a class="btn btn-primary" href="/gratis-annonsesjekk/">Få en gratis annonsesjekk</a>
          <a class="btn btn-secondary" href="/priser/">Se priser</a>
        </div>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <div class="radar">
          <span class="radar-ring"></span>
          <svg class="radar-pin" viewBox="0 0 64 64" width="40" height="40" focusable="false"><path fill="#BE123C" d="M32 2C19.3 2 9 12.3 9 25c0 14.8 17.4 32.6 21.2 36.3a2.5 2.5 0 0 0 3.6 0C37.6 57.6 55 39.8 55 25 55 12.3 44.7 2 32 2z"/><circle cx="32" cy="25" r="12" fill="#fff"/></svg>
          <div class="ad-card">
            <span class="ad-badge">Annonse</span>
            <strong>Din bedrift i nærheten</strong>
            <div class="ad-url">www.din-bedrift.no</div>
            <p>Synlig når noen i området søker etter det du tilbyr.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section"><div class="wrap"><div class="rules">
    <div class="rule"><strong>Du eier kontoen</strong></div>
    <div class="rule"><strong>Ingen prosent av budsjettet</strong></div>
    <div class="rule"><strong>Ingen bindingstid</strong></div>
  </div></div></section>
  <section class="section section-soft"><div class="wrap">
    <div class="section-head"><h2>Pakker med fast månedspris</h2><p class="muted">${PRICE_NOTE_NB}</p></div>
    <div class="cards">
      <article class="card card-featured"><span class="badge">Anbefalt for de fleste</span><h3>Google Lokal</h3>
        <p class="price">3&nbsp;990&nbsp;kr<small>per måned eks. mva.</small></p>
        ${TODO_PRICE}<p class="muted">+ 3&nbsp;990&nbsp;kr i oppstart</p>
        <p>Søkeannonser når folk i nærheten allerede leter etter det du selger.</p>
        <a class="btn btn-primary" href="/priser/#google-lokal">Se Google Lokal</a></article>
      <article class="card"><h3>Meta Lokal</h3>
        <p class="price">2&nbsp;990&nbsp;kr<small>per måned eks. mva. · ingen oppstartskostnad</small></p>
        <p>Facebook-annonser via Meta for å bli kjent i nærområdet.</p>
        <a class="btn btn-secondary" href="/priser/#meta-lokal">Se Meta Lokal</a></article>
      <article class="card"><h3>Google + Meta</h3>
        ${TODO_PRICE}<p class="price">5&nbsp;990&nbsp;kr<small>per måned eks. mva.</small></p>
        ${TODO_PRICE}<p class="muted">+ 3&nbsp;990&nbsp;kr i oppstart</p>
        <p>Begge plattformene, én fast pris og én samlet rapport.</p>
        <a class="btn btn-secondary" href="/priser/#google-og-meta">Se Google + Meta</a></article>
    </div>
    <p style="margin-top:1.25rem"><a class="pill-link" href="/priser/#linkedin-b2b">Selger du til bedrifter? Se LinkedIn B2B →</a></p>
  </div></section>
  <section class="section"><div class="wrap two-col-text">
    <div><h2>Google eller Facebook?</h2>
      <p>Velg <a href="/google-ads/">Google Ads</a> når folk allerede søker etter det du selger – for eksempel «rørlegger Grünerløkka». Du betaler for klikk fra folk som er i kjøpsmodus.</p>
      <p>Velg <a href="/meta-annonser/">Facebook-annonser</a> når du vil bli kjent i området før folk søker: tilbud, åpningstider, lokal profil.</p></div>
    <div><h2>For hvem</h2>
      <p class="muted">Jeg hjelper blant annet håndverkere, klinikker, restauranter og kaféer, frisører, butikker i Oslo-området, og spansktalende bedrifter som vil annonsere på norsk og spansk.</p></div>
  </div></section>
  <section class="section section-dark"><div class="wrap">
    <div class="section-head"><h2>Hvorfor Klikklokal</h2></div>
    <ul class="list-check">
      <li>Fast månedspris, uansett hvor stort budsjettet ditt er.</li>
      <li>Annonsekontoen står i ditt navn, og du betaler budsjettet direkte til plattformen.</li>
      <li>Annonser på norsk, spansk og engelsk – nyttig hvis kundene dine snakker flere språk.</li>
      <li>Grunnlegger av Wecrops Perú (byrå for markedsføring og videoproduksjon, Chimbote, 2015–2022) – erfaring med markedsføring siden 2015.</li>
      <li>Månedlig rapport på et enkelt språk: hva det kostet, og hva du fikk (klikk, anrop, henvendelser) slik plattformene måler det.</li>
      <li>Jeg jobber på spansk og engelsk, og på norsk med kvalitetssikrede tekster.</li>
    </ul>
  </div></section>
  <section class="section"><div class="wrap">
    <h2>Andre tjenester fra ML Digital</h2>
    <p><a href="https://willymartinez.no/consulting">Rådgivning i internasjonal handel</a></p>
    <!-- TODO Willy: activar cuando cada web esté publicada; no enlazar webs que no existen. -->
    <!--
    <ul>
      <li>Snuttverk – annonsevideoer og innhold</li>
      <li>Synlig14 – nettside som annonsene kan lede til</li>
      <li>Hallobot – chatbot</li>
      <li>Kobleverk – automatisering</li>
    </ul>
    -->
  </div></section>
</main>
${footer("nb")}`
);

const homeOrgLdEs = {
  ...homeOrgLd,
  url: `${BASE}/es/`,
  description:
    "Klikklokal es parte de ML Digital. Google Ads y anuncios en Facebook para negocios locales en Noruega."
};

write(
  "es/index.html",
  `${documentHead({
    lang: "es",
    title: "Klikklokal – Google Ads y anuncios en Meta para negocios locales",
    description:
      "Google Ads y anuncios en Facebook para negocios locales en Noruega. Cuota fija mensual, sin permanencia, y la cuenta a tu nombre.",
    path: "/es/",
    altPath: "/",
    locale: "es_ES",
    extra: `<script type="application/ld+json">\n${JSON.stringify(homeOrgLdEs, null, 2)}\n</script>\n`
  })}
<body>
${nav("es", "home")}
<main id="innhold">
  <!-- TODO Willy: no anunciar esta web hasta haber hecho 1–2 campañas reales para tus propias webs (práctica en Google Ads y Meta). -->
  <section class="hero"><div class="wrap hero-grid"><div>
    <h1>Que te encuentren clientes cercanos – en Google y Facebook, a cuota fija mensual</h1>
    <p class="lead">Configuro y gestiono tus anuncios en noruego y español. Google Ads desde 3&nbsp;990&nbsp;kr/mes y anuncios en Facebook desde 2&nbsp;990&nbsp;kr/mes sin IVA (MVA). Sin permanencia, y la cuenta es tuya.</p>
    <div class="cta-row">
      <a class="btn btn-primary" href="/es/revision-gratis/">Pide una revisión gratis</a>
      <a class="btn btn-secondary" href="/es/precios/">Ver precios</a>
    </div>
  </div>
  <div class="hero-visual" aria-hidden="true"><div class="radar"><span class="radar-ring"></span>
    <svg class="radar-pin" viewBox="0 0 64 64" width="40" height="40" focusable="false"><path fill="#BE123C" d="M32 2C19.3 2 9 12.3 9 25c0 14.8 17.4 32.6 21.2 36.3a2.5 2.5 0 0 0 3.6 0C37.6 57.6 55 39.8 55 25 55 12.3 44.7 2 32 2z"/><circle cx="32" cy="25" r="12" fill="#fff"/></svg>
    <div class="ad-card"><span class="ad-badge">Annonse</span><strong>Tu negocio cerca</strong><div class="ad-url">www.tu-negocio.no</div><p>Visible cuando alguien de tu zona busca lo que ofreces.</p></div>
  </div></div></div></section>
  <section class="section"><div class="wrap"><div class="rules">
    <div class="rule"><strong>Tú eres dueño de la cuenta</strong></div>
    <div class="rule"><strong>Sin porcentaje del presupuesto</strong></div>
    <div class="rule"><strong>Sin permanencia</strong></div>
  </div></div></section>
  <section class="section section-soft"><div class="wrap">
    <div class="section-head"><h2>Paquetes con cuota fija</h2><p class="muted">${PRICE_NOTE_ES}</p></div>
    <div class="cards">
      <article class="card card-featured"><span class="badge">Recomendado para la mayoría</span><h3>Google Lokal</h3>
        <p class="price">3&nbsp;990&nbsp;kr<small>al mes sin IVA (MVA)</small></p>
        ${TODO_PRICE}<p class="muted">+ 3&nbsp;990&nbsp;kr de alta</p>
        <p>Anuncios de búsqueda cuando la gente cercana ya busca lo que vendes.</p>
        <a class="btn btn-primary" href="/es/precios/#google-lokal">Ver Google Lokal</a></article>
      <article class="card"><h3>Meta Lokal</h3>
        <p class="price">2&nbsp;990&nbsp;kr<small>al mes sin IVA (MVA) · sin coste de alta</small></p>
        <p>Anuncios en Facebook vía Meta para darte a conocer en tu zona.</p>
        <a class="btn btn-secondary" href="/es/precios/#meta-lokal">Ver Meta Lokal</a></article>
      <article class="card"><h3>Google + Meta</h3>
        ${TODO_PRICE}<p class="price">5&nbsp;990&nbsp;kr<small>al mes sin IVA (MVA)</small></p>
        ${TODO_PRICE}<p class="muted">+ 3&nbsp;990&nbsp;kr de alta</p>
        <p>Ambas plataformas, una cuota fija y un informe conjunto.</p>
        <a class="btn btn-secondary" href="/es/precios/#google-og-meta">Ver Google + Meta</a></article>
    </div>
    <p style="margin-top:1.25rem"><a class="pill-link" href="/es/precios/#linkedin-b2b">¿Vendes a otras empresas? Mira LinkedIn B2B →</a></p>
  </div></section>
  <section class="section"><div class="wrap two-col-text">
    <div><h2>¿Google o Facebook?</h2>
      <p>Elige <a href="/es/google-ads/">Google Ads</a> cuando la gente ya busca lo que vendes – por ejemplo «rørlegger Grünerløkka». Pagas por clics de personas con intención de compra.</p>
      <p>Elige <a href="/es/anuncios-meta/">anuncios en Facebook</a> cuando quieres que te conozcan en tu zona antes de que busquen: ofertas, horarios, perfil local.</p></div>
    <div><h2>Para quién</h2>
      <p class="muted">Ayudo a oficios, clínicas, restaurantes y cafés, peluquerías, tiendas del área de Oslo, y negocios hispanohablantes que quieren anunciarse en noruego y español.</p></div>
  </div></section>
  <section class="section section-dark"><div class="wrap">
    <div class="section-head"><h2>Por qué Klikklokal</h2></div>
    <ul class="list-check">
      <li>Cuota fija mensual, da igual el tamaño de tu presupuesto de anuncios.</li>
      <li>La cuenta de anuncios está a tu nombre y pagas el presupuesto directo a la plataforma.</li>
      <li>Anuncios en noruego, español e inglés – útil si tus clientes hablan varios idiomas.</li>
      <li>Fundador de Wecrops Perú (agencia de marketing y producción audiovisual, Chimbote, 2015–2022) – experiencia en marketing desde 2015.</li>
      <li>Informe mensual en lenguaje sencillo: qué costó y qué obtuviste (clics, llamadas, formularios) según miden las plataformas.</li>
      <li>Trabajo en español e inglés, y en noruego con textos revisados.</li>
    </ul>
  </div></section>
  <section class="section"><div class="wrap">
    <h2>Otros servicios de ML Digital</h2>
    <p><a href="https://willymartinez.no/consulting">Asesoría en comercio internacional</a></p>
    <!-- TODO Willy: activar cuando cada web esté publicada; no enlazar webs que no existen. -->
    <!--
    <ul>
      <li>Snuttverk – vídeos de anuncio y contenido</li>
      <li>Synlig14 – web a la que pueden llevar los anuncios</li>
      <li>Hallobot – chatbot</li>
      <li>Kobleverk – automatización</li>
    </ul>
    -->
  </div></section>
</main>
${footer("es")}`
);

write("google-ads/index.html", googleAdsNb());
write("meta-annonser/index.html", metaNb());
write("priser/index.html", priserNb());
write("gratis-annonsesjekk/index.html", sjekkNb());
write("kontakt/index.html", kontaktNb());
write("personvern/index.html", personvernNb());

write("es/google-ads/index.html", googleAdsEs());
write("es/anuncios-meta/index.html", metaEs());
write("es/precios/index.html", priserEs());
write("es/revision-gratis/index.html", sjekkEs());
write("es/contacto/index.html", kontaktEs());
write("es/privacidad/index.html", personvernEs());

write(
  "404.html",
  `<!DOCTYPE html>
<html lang="nb">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>404 – Siden finnes ikke | Página no encontrada – Klikklokal</title>
  <meta name="robots" content="noindex">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
${nav("nb", "home")}
<main id="innhold" class="section">
  <div class="wrap" style="max-width:40rem">
    <h1>404</h1>
    <p lang="nb"><strong>Siden finnes ikke.</strong> Gå til <a href="/">Hjem</a> eller se <a href="/priser/">Priser</a>.</p>
    <p lang="es"><strong>Página no encontrada.</strong> Ve a <a href="/es/">Inicio</a> o mira <a href="/es/precios/">Precios</a>.</p>
  </div>
</main>
<footer class="site-footer">
  <div class="wrap">
    <p class="footer-legal">Klikklokal er en del av ML Digital – MARTINEZ LOZANO INTERNASJONAL HANDEL · Org.nr. 935 407 095 MVA · Norbygata 19, 0187 Oslo · +47 912 90 416 · willynoslo17@gmail.com</p>
    <p class="trademark">Google Ads er et varemerke for Google LLC. Meta og Facebook er varemerker for Meta Platforms, Inc. Klikklokal er ikke tilknyttet Google eller Meta.</p>
  </div>
</footer>
</body>
</html>`
);

const urlPairs = [
  ["/", "/es/"],
  ["/google-ads/", "/es/google-ads/"],
  ["/meta-annonser/", "/es/anuncios-meta/"],
  ["/priser/", "/es/precios/"],
  ["/gratis-annonsesjekk/", "/es/revision-gratis/"],
  ["/kontakt/", "/es/contacto/"],
  ["/personvern/", "/es/privacidad/"]
];

const sitemapEntries = urlPairs
  .flatMap(([nb, es]) => {
    const block = (loc, lang) => `  <url>
    <loc>${BASE}${loc}</loc>
    <xhtml:link rel="alternate" hreflang="nb" href="${BASE}${nb}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${BASE}${es}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}${nb}"/>
  </url>`;
    return [block(nb, "nb"), block(es, "es")];
  })
  .join("\n");

write(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapEntries}
</urlset>
`
);

console.log("All pages generated.");
