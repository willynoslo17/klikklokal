export const BASE = "https://klikklokal.pages.dev";

export const pairs = {
  home: { nb: "/", es: "/es/" },
  google: { nb: "/google-ads/", es: "/es/google-ads/" },
  meta: { nb: "/meta-annonser/", es: "/es/anuncios-meta/" },
  priser: { nb: "/priser/", es: "/es/precios/" },
  sjekk: { nb: "/gratis-annonsesjekk/", es: "/es/revision-gratis/" },
  kontakt: { nb: "/kontakt/", es: "/es/contacto/" },
  personvern: { nb: "/personvern/", es: "/es/privacidad/" }
};

export function abs(path) {
  return BASE + path;
}

export function documentHead({ lang, title, description, path, altPath, locale, extra = "" }) {
  const canonical = abs(path);
  const nbUrl = lang === "nb" ? canonical : abs(altPath);
  const esUrl = lang === "es" ? canonical : abs(altPath);
  return `<!DOCTYPE html>
<html lang="${lang === "nb" ? "nb" : "es"}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" hreflang="nb" href="${nbUrl}">
  <link rel="alternate" hreflang="es" href="${esUrl}">
  <link rel="alternate" hreflang="x-default" href="${nbUrl}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Klikklokal">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${abs("/og-image.png")}">
  <meta property="og:locale" content="${locale}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${abs("/og-image.png")}">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/styles.css?v=2">
${extra}</head>`;
}

export function nav(lang, pageKey) {
  const p = pairs;
  const cur = (key) => p[key][lang];
  const skip = lang === "nb" ? "Hopp til innhold" : "Saltar al contenido";
  const meny = lang === "nb" ? "Meny" : "Menú";
  const L =
    lang === "nb"
      ? {
          google: "Google Ads",
          meta: "Meta-annonser",
          priser: "Priser",
          sjekk: "Gratis annonsesjekk",
          om: "Om meg",
          kontakt: "Kontakt",
          aria: "Hovedmeny"
        }
      : {
          google: "Google Ads",
          meta: "Anuncios en Meta",
          priser: "Precios",
          sjekk: "Revisión gratis",
          om: "Sobre mí",
          kontakt: "Contacto",
          aria: "Menú principal"
        };
  const omHref = lang === "nb" ? "/kontakt/#om-meg" : "/es/contacto/#sobre-mi";
  const links = `<ul class="nav-list">
          <li><a href="${cur("google")}">${L.google}</a></li>
          <li><a href="${cur("meta")}">${L.meta}</a></li>
          <li><a href="${cur("priser")}">${L.priser}</a></li>
          <li><a href="${cur("sjekk")}">${L.sjekk}</a></li>
          <li><a href="${omHref}">${L.om}</a></li>
          <li><a class="btn btn-primary" href="${cur("kontakt")}">${L.kontakt}</a></li>
          <li class="lang-switch" aria-label="Language">
            <a href="${p[pageKey].nb}"${lang === "nb" ? ' aria-current="true"' : ""}>NO</a>
            <span aria-hidden="true">|</span>
            <a href="${p[pageKey].es}"${lang === "es" ? ' aria-current="true"' : ""}>ES</a>
          </li>
        </ul>`;
  return `<a class="skip-link" href="#innhold">${skip}</a>
<header class="site-header">
  <div class="wrap header-inner">
    <a class="brand" href="${cur("home")}">
      <img class="brand-mark" src="/favicon.svg" width="28" height="28" alt="">
      Klikklokal
    </a>
    <nav class="nav-panel nav-desktop" aria-label="${L.aria}">
      ${links}
    </nav>
    <details class="nav-menu">
      <summary class="nav-toggle">${meny}</summary>
      <nav class="nav-panel" aria-label="${L.aria}">
        ${links}
      </nav>
    </details>
  </div>
</header>`;
}

export function footer(lang) {
  if (lang === "nb") {
    return `<footer class="site-footer">
  <div class="wrap">
    <p class="footer-legal">Klikklokal er en del av ML Digital – MARTINEZ LOZANO INTERNASJONAL HANDEL · Org.nr. 935 407 095 MVA · Norbygata 19, 0187 Oslo · +47 912 90 416 · kontakt@mlinternasjonal.no</p>
    <nav class="footer-nav" aria-label="Bunnmeny">
      <a href="/priser/">Priser</a>
      <a href="/gratis-annonsesjekk/">Gratis annonsesjekk</a>
      <a href="/personvern/">Personvern</a>
      <a href="https://willymartinez.no/consulting">willymartinez.no/consulting</a>
      <span>© 2026</span>
    </nav>
    <p class="trademark">Google Ads er et varemerke for Google LLC. Meta og Facebook er varemerker for Meta Platforms, Inc. Klikklokal er ikke tilknyttet Google eller Meta.</p>
  </div>
</footer>
<script src="/form.js?v=2" defer></script>
</body>
</html>`;
  }
  return `<footer class="site-footer">
  <div class="wrap">
    <p class="footer-legal">Klikklokal forma parte de ML Digital – MARTINEZ LOZANO INTERNASJONAL HANDEL · Org.nr. 935 407 095 MVA · Norbygata 19, 0187 Oslo · +47 912 90 416 · kontakt@mlinternasjonal.no</p>
    <nav class="footer-nav" aria-label="Pie de página">
      <a href="/es/precios/">Precios</a>
      <a href="/es/revision-gratis/">Revisión gratis</a>
      <a href="/es/privacidad/">Privacidad</a>
      <a href="https://willymartinez.no/consulting">willymartinez.no/consulting</a>
      <span>© 2026</span>
    </nav>
    <p class="trademark">Google Ads es una marca de Google LLC. Meta y Facebook son marcas de Meta Platforms, Inc. Klikklokal no está afiliado a Google ni a Meta.</p>
  </div>
</footer>
<script src="/form.js?v=2" defer></script>
</body>
</html>`;
}

export function breadcrumbLd(items) {
  return `<script type="application/ld+json">
${JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.name,
        item: abs(it.path)
      }))
    },
    null,
    2
  )}
</script>`;
}

export const PRICE_NOTE_NB =
  "Alle priser er eks. mva. Annonsebudsjettet kommer i tillegg og betales av deg direkte til Google eller Meta.";
export const PRICE_NOTE_ES =
  "Todos los precios sin IVA (MVA). El presupuesto de anuncios va aparte y lo pagas tú directamente a Google o Meta.";

export const TODO_PRICE =
  "<!-- TODO Willy: precio PROPUESTO, no aprobado. Confírmalo antes de publicar. -->";
export const TODO_NOTICE =
  "<!-- TODO Willy: confirmar que el contrato dice 1 mes de aviso. -->";
export const TODO_BUDGET =
  "<!-- TODO Willy: decidir si se muestra un presupuesto mínimo recomendado. -->";
