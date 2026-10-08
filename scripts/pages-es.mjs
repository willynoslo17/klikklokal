import {
  BASE,
  documentHead,
  nav,
  footer,
  breadcrumbLd,
  PRICE_NOTE_ES,
  TODO_PRICE,
  TODO_NOTICE,
  TODO_BUDGET
} from "./lib-html.mjs";

export function googleAdsEs() {
  const ldService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Google Ads for lokale bedrifter",
    provider: { "@type": "Organization", name: "Klikklokal", url: `${BASE}/` },
    areaServed: { "@type": "Country", name: "Norge" },
    offers: {
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
        referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" }
      }
    }
  };
  return `${documentHead({
    lang: "es",
    title: "Google Ads para negocios locales – Klikklokal",
    description:
      "Configuro y gestiono Google Ads para negocios locales en Noruega. Cuota fija, cuenta a tu nombre y anuncios en noruego y español.",
    path: "/es/google-ads/",
    altPath: "/google-ads/",
    locale: "es_ES",
    extra:
      breadcrumbLd([
        { name: "Inicio", path: "/es/" },
        { name: "Google Ads", path: "/es/google-ads/" }
      ]) + `<script type="application/ld+json">\n${JSON.stringify(ldService, null, 2)}\n</script>\n`
  })}
<body>
${nav("es", "google")}
<main id="innhold">
  <section class="page-hero"><div class="wrap">
    <h1>Google Ads para negocios locales</h1>
    <p class="lead">Google Ads son anuncios de pago que aparecen cuando alguien de tu zona busca lo que vendes. Pagas por clic, no solo por impresiones.</p>
  </div></section>
  <section class="section"><div class="wrap two-col-text">
    <div><h2>Qué hago yo</h2>
      <ul class="list-check">
        <li>Alta de la cuenta a tu nombre</li>
        <li>Palabras clave y negativas</li>
        <li>Textos de anuncio en noruego y/o español</li>
        <li>Segmentación geográfica</li>
        <li>Medición de conversiones (llamadas y formularios)</li>
        <li>Enlace con el perfil de Google Business</li>
        <li>Revisión semanal y optimización mensual</li>
        <li>Informe mensual</li>
      </ul></div>
    <div><h2>Medición de conversiones</h2>
      <p>La etiqueta se instala en tu web y solo se activa con consentimiento de cookies (banner). Si tu web no tiene banner, lo acordamos en la oferta.</p>
      <h2>Los primeros 30 días</h2>
      <ol class="steps">
        <li><div><strong>Revisión gratis</strong><p class="muted">Repasamos web, perfil y objetivos.</p></div></li>
        <li><div><strong>Configuración y medición</strong><p class="muted">Cuenta, campañas y seguimiento listos.</p></div></li>
        <li><div><strong>La campaña se publica</strong><p class="muted">Los anuncios empiezan a mostrarse en tu zona.</p></div></li>
        <li><div><strong>Primeros ajustes</strong><p class="muted">Afinamos palabras clave, pujas y textos.</p></div></li>
        <li><div><strong>Primer informe</strong><p class="muted">Recibes un resumen claro de coste y resultados.</p></div></li>
      </ol></div>
  </div></section>
  <section class="section section-soft"><div class="wrap">
    <h2>Precio: Google Lokal</h2>
    <p class="price-note">${PRICE_NOTE_ES}</p>
    <p class="price">3&nbsp;990&nbsp;kr<small>al mes sin IVA (MVA)</small></p>
    ${TODO_PRICE}<p>+ 3&nbsp;990&nbsp;kr de alta</p>
    <p>${TODO_NOTICE}<strong>Sin permanencia – aviso de 1 mes.</strong> Tú eres dueño de la cuenta. Sin porcentaje del presupuesto de anuncios.</p>
    <p><a class="btn btn-primary" href="/es/contacto/?pakke=google-lokal">Pedir una conversación gratis</a></p>
  </div></section>
  <section class="section"><div class="wrap faq">
    <h2>Preguntas frecuentes</h2>
    <details><summary>¿Cuánto tarda en verse algo?</summary><p>Depende del sector, la competencia y el presupuesto. Las primeras semanas suelen ser de aprendizaje y ajuste.</p></details>
    <details><summary>¿Y si ya tengo cuenta de Google Ads?</summary><p>La reviso y la uso. Sigue siendo tuya.</p></details>
    <details><summary>¿Puedo pausar los anuncios?</summary><p>Sí. El presupuesto se puede pausar en la plataforma. La cuota fija sigue las condiciones de aviso.</p></details>
  </div></section>
</main>
${footer("es")}`;
}

export function metaEs() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Facebook-annonser for lokale bedrifter",
    provider: { "@type": "Organization", name: "Klikklokal", url: `${BASE}/` },
    areaServed: { "@type": "Country", name: "Norge" },
    offers: {
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
        referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" }
      }
    }
  };
  return `${documentHead({
    lang: "es",
    title: "Anuncios en Meta (Facebook) para negocios locales – Klikklokal",
    description:
      "Anuncios en Facebook vía Meta para negocios locales. Desde 2 990 kr/mes sin IVA (MVA), sin coste de alta, y la cuenta a tu nombre.",
    path: "/es/anuncios-meta/",
    altPath: "/meta-annonser/",
    locale: "es_ES",
    extra:
      breadcrumbLd([
        { name: "Inicio", path: "/es/" },
        { name: "Anuncios en Meta", path: "/es/anuncios-meta/" }
      ]) + `<script type="application/ld+json">\n${JSON.stringify(ld, null, 2)}\n</script>\n`
  })}
<body>
${nav("es", "meta")}
<main id="innhold">
  <section class="page-hero"><div class="wrap">
    <h1>Anuncios en Meta para negocios locales</h1>
    <p class="lead">Los anuncios en Facebook vía Meta sirven para que la gente de tu zona conozca el negocio, una oferta o un evento – también antes de que busquen activamente.</p>
  </div></section>
  <section class="section"><div class="wrap two-col-text">
    <div><h2>Qué hago yo</h2>
      <ul class="list-check">
        <li>Público en el área cercana</li>
        <li>Textos de anuncio</li>
        <li>Anuncios sencillos con tus fotos y vídeos</li>
        <li>Prueba de 2–3 variantes</li>
        <li>Optimización e informe mensual</li>
      </ul>
      <p>El acceso es por roles de socio en Meta Business Suite – nunca compartiendo contraseñas.</p></div>
    <div>
      <h2>Material</h2>
      <!-- TODO Willy: enlazar a Snuttverk (Annonsevideo) cuando esté publicada. -->
      <p>Los anuncios se hacen con las fotos y vídeos que ya tienes. Si necesitas vídeos nuevos, se puede acordar aparte.</p>
      <h2>Regla de honestidad</h2>
      <p>No uso reseñas falsas ni presento personas generadas con IA como clientes. Los anuncios siguen las políticas publicitarias de Meta.</p>
    </div>
  </div></section>
  <section class="section section-soft"><div class="wrap">
    <h2>Precio: Meta Lokal</h2>
    <p class="price-note">${PRICE_NOTE_ES}</p>
    <p class="price">2&nbsp;990&nbsp;kr<small>al mes sin IVA (MVA) · sin coste de alta</small></p>
    <p>${TODO_NOTICE}<strong>Sin permanencia – aviso de 1 mes.</strong> Tú eres dueño de la cuenta. Sin porcentaje del presupuesto de anuncios.</p>
    <p><a class="btn btn-primary" href="/es/contacto/?pakke=meta-lokal">Pedir una conversación gratis</a></p>
  </div></section>
</main>
${footer("es")}`;
}

export function priserEs() {
  const faq = [
    {
      q: "¿Por qué no cobras un porcentaje del presupuesto?",
      a: "Porque debes poder subir el presupuesto sin que mi precio suba solo. Pagas una cuota fija por mi trabajo, y el presupuesto va directo a Google o Meta."
    },
    {
      q: "¿Qué pasa con la cuenta si dejas de trabajar conmigo?",
      a: "La cuenta es tuya en todo momento, con el historial y la configuración. Conservas el acceso."
    },
    {
      q: "¿Necesito una web?",
      a: "Una web ayuda mucho para medir y generar confianza. Si no la tienes, lo vemos en la revisión gratis."
    },
    {
      q: "¿Puedo anunciarme en español?",
      a: "Sí. Puedo preparar anuncios en noruego, español e inglés – útil si tus clientes hablan varios idiomas."
    },
    {
      q: "¿Cómo es el informe?",
      a: "Recibes un informe mensual en lenguaje sencillo: qué costó y qué obtuviste (clics, llamadas, formularios) según miden las plataformas."
    },
    {
      q: "¿Cuánto debo gastar en anuncios?",
      a: "Cuánto conviene invertir depende del sector y la zona. Lo vemos juntos en la revisión gratis."
    }
  ];
  const catalog = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Paquetes Klikklokal",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Google Lokal",
        price: "3990",
        priceCurrency: "NOK",
        valueAddedTaxIncluded: false,
        description: "Cuota mensual. Alta 3990 NOK sin IVA.",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "3990",
          priceCurrency: "NOK",
          valueAddedTaxIncluded: false,
          referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" }
        }
      },
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
          referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" }
        }
      },
      {
        "@type": "Offer",
        name: "Google + Meta",
        price: "5990",
        priceCurrency: "NOK",
        valueAddedTaxIncluded: false,
        description: "Cuota mensual. Alta 3990 NOK sin IVA.",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "5990",
          priceCurrency: "NOK",
          valueAddedTaxIncluded: false,
          referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" }
        }
      },
      {
        "@type": "Offer",
        name: "LinkedIn B2B",
        price: "3990",
        priceCurrency: "NOK",
        valueAddedTaxIncluded: false,
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "3990",
          priceCurrency: "NOK",
          valueAddedTaxIncluded: false,
          referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" }
        }
      }
    ]
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };
  return `${documentHead({
    lang: "es",
    title: "Precios – Google Ads y Meta desde 2 990 kr/mes – Klikklokal",
    description:
      "Cuota fija para Google Ads y anuncios en Facebook desde 2 990 kr/mes sin IVA (MVA), sin permanencia. La cuenta es tuya.",
    path: "/es/precios/",
    altPath: "/priser/",
    locale: "es_ES",
    extra:
      breadcrumbLd([
        { name: "Inicio", path: "/es/" },
        { name: "Precios", path: "/es/precios/" }
      ]) +
      `${TODO_PRICE}\n<script type="application/ld+json">\n${JSON.stringify(catalog, null, 2)}\n</script>\n` +
      `<script type="application/ld+json">\n${JSON.stringify(faqLd, null, 2)}\n</script>\n`
  })}
<body>
${nav("es", "priser")}
<main id="innhold">
  <section class="page-hero"><div class="wrap">
    <h1>Precios</h1>
    <p class="lead">Cuota fija mensual por mi trabajo. El presupuesto de anuncios lo pagas tú directamente a Google o Meta.</p>
    <p class="price-note">${PRICE_NOTE_ES}</p>
  </div></section>
  <section class="section"><div class="wrap"><div class="cards cards-4">
    <article class="card card-featured" id="google-lokal">
      <span class="badge">Recomendado para la mayoría</span>
      <h2>Google Lokal</h2>
      <p class="price">3&nbsp;990&nbsp;kr<small>al mes sin IVA (MVA)</small></p>
      ${TODO_PRICE}<p class="muted">+ 3&nbsp;990&nbsp;kr de alta</p>
      <h3>Esto incluye</h3>
      <ul class="list-check">
        <li>Configuración de cuenta y campañas</li>
        <li>Medición de conversiones (con consentimiento en tu web)</li>
        <li>Palabras clave y textos en noruego y/o español</li>
        <li>Optimización continua</li>
        <li>Informe mensual</li>
      </ul>
      <a class="btn btn-primary btn-block" href="/es/contacto/?pakke=google-lokal">Pedir una conversación gratis</a>
    </article>
    <article class="card" id="meta-lokal">
      <h2>Meta Lokal</h2>
      <p class="price">2&nbsp;990&nbsp;kr<small>al mes sin IVA (MVA) · sin coste de alta</small></p>
      <h3>Esto incluye</h3>
      <ul class="list-check">
        <li>Anuncios en Facebook vía Meta</li>
        <li>Público en el área cercana</li>
        <li>Textos y creatividades sencillas con tu material</li>
        <li>Optimización</li>
        <li>Informe mensual</li>
      </ul>
      <a class="btn btn-primary btn-block" href="/es/contacto/?pakke=meta-lokal">Pedir una conversación gratis</a>
    </article>
    <article class="card" id="google-og-meta">
      <h2>Google + Meta</h2>
      ${TODO_PRICE}<p class="price">5&nbsp;990&nbsp;kr<small>al mes sin IVA (MVA)</small></p>
      ${TODO_PRICE}<p class="muted">+ 3&nbsp;990&nbsp;kr de alta</p>
      <h3>Esto incluye</h3>
      <ul class="list-check">
        <li>Ambas plataformas</li>
        <li>Una cuota fija</li>
        <li>Un informe conjunto</li>
      </ul>
      <a class="btn btn-primary btn-block" href="/es/contacto/?pakke=google-og-meta">Pedir una conversación gratis</a>
    </article>
  </div></div></section>
  <section class="section section-soft" id="linkedin-b2b"><div class="wrap">
    <h2>Extra: LinkedIn B2B</h2>
    ${TODO_PRICE}<p class="price">3&nbsp;990&nbsp;kr<small>al mes sin IVA (MVA)</small></p>
    <p>Anuncios en LinkedIn si vendes a otras empresas.</p>
    <a class="btn btn-secondary" href="/es/contacto/?pakke=linkedin-b2b">Pedir una conversación gratis</a>
  </div></section>
  <section class="section"><div class="wrap">
    <h2>Condiciones</h2>
    <div class="conditions">
      <div class="condition">${TODO_NOTICE}Sin permanencia – aviso de 1 mes.</div>
      <div class="condition">Tú eres dueño de la cuenta de anuncios.</div>
      <div class="condition">Sin porcentaje del presupuesto de anuncios.</div>
    </div>
    ${TODO_BUDGET}
    <p class="price-note" style="margin-top:1.25rem">Cuánto conviene invertir en anuncios depende del sector y la zona. Lo vemos juntos en la revisión gratis.</p>
  </div></section>
  <section class="section section-dark"><div class="wrap">
    <h2>Así funciona el pago</h2>
    <!-- TODO Willy: plazos de pago. -->
    <div class="split">
      <div class="panel"><h3>A mí</h3><p>Cuota fija mensual (factura de MARTINEZ LOZANO INTERNASJONAL HANDEL).</p></div>
      <div class="panel"><h3>A Google/Meta</h3><p>El presupuesto de anuncios, directo desde tu tarjeta o cuenta.</p></div>
    </div>
  </div></section>
  <section class="section"><div class="wrap two-col-text">
    <div><h2>No incluido</h2>
      <ul class="list-check">
        <li>Presupuesto de anuncios</li>
        <li>Web o landing nueva (se puede acordar aparte)</li>
        <li>Vídeos nuevos y foto profesional</li>
        <li>Responder comentarios y mensajes</li>
      </ul></div>
    <div class="faq"><h2>Preguntas frecuentes</h2>
      ${faq.map((f) => `<details><summary>${f.q}</summary><p>${f.a}</p></details>`).join("\n")}
    </div>
  </div></section>
</main>
${footer("es")}`;
}

export function sjekkEs() {
  return `${documentHead({
    lang: "es",
    title: "Revisión gratis de anuncios – Klikklokal",
    description:
      "Revisión gratuita y sin compromiso de tu web, perfil de Google Business y cuentas de anuncios. Recibes mejoras concretas por email.",
    path: "/es/revision-gratis/",
    altPath: "/gratis-annonsesjekk/",
    locale: "es_ES",
    extra: breadcrumbLd([
      { name: "Inicio", path: "/es/" },
      { name: "Revisión gratis", path: "/es/revision-gratis/" }
    ])
  })}
<body>
${nav("es", "sjekk")}
<main id="innhold">
  <section class="page-hero"><div class="wrap">
    <h1>Revisión gratis de anuncios</h1>
    <p class="lead">Miro tu web, el perfil de Google Business y, si existen, tus cuentas de anuncios (con acceso de solo lectura). Te envío por email 3–5 mejoras concretas y una recomendación de paquete.</p>
    <!-- TODO Willy: plazo de respuesta de la revisión (p. ej. 3 días hábiles). -->
    <p class="price-note">Gratis y sin compromiso. Recibes la respuesta por email.</p>
  </div></section>
  <section class="section"><div class="wrap">
    <form class="form js-kontakt" data-lang="es" method="post" action="mailto:willynoslo17@gmail.com?subject=Klikklokal">
      <input type="hidden" name="pakke" value="annonsesjekk">
      <label>Nombre<input name="navn" required autocomplete="name"></label>
      <label>Empresa<input name="bedrift" autocomplete="organization"></label>
      <label>Email<input name="email" type="email" required autocomplete="email"></label>
      <label>Teléfono <span class="hint">(opcional)</span><input name="telefon" type="tel" autocomplete="tel"></label>
      <label>Web<input name="nettside" type="url" placeholder="https://"></label>
      <label>Sector y zona<input name="bransje" required placeholder='p. ej. "peluquería, Grønland"'></label>
      <fieldset class="radio-group"><legend>¿Has anunciado antes?</legend>
        <label><input type="radio" name="annonsert" value="ja-google" required> Sí, Google</label>
        <label><input type="radio" name="annonsert" value="ja-facebook"> Sí, Facebook</label>
        <label><input type="radio" name="annonsert" value="begge"> Ambos</label>
        <label><input type="radio" name="annonsert" value="nei"> No</label>
      </fieldset>
      <fieldset class="radio-group"><legend>¿Qué quieres conseguir sobre todo?</legend>
        <label><input type="radio" name="onske" value="anrop" required> Más llamadas</label>
        <label><input type="radio" name="onske" value="henvendelser"> Más consultas en la web</label>
        <label><input type="radio" name="onske" value="besok"> Más visitas al local</label>
        <label><input type="radio" name="onske" value="vet-ikke"> No lo sé</label>
      </fieldset>
      <label>Mensaje <span class="hint">(opcional)</span><textarea name="melding"></textarea></label>
      <label class="checkbox"><input type="checkbox" name="consent" value="true" required> Acepto que mis datos se usen para responderme, según la <a href="/es/privacidad/">política de privacidad</a>.</label>
      <label class="hp" aria-hidden="true">Dejar vacío<input type="text" name="website_url" tabindex="-1" autocomplete="off"></label>
      <button class="btn btn-primary" type="submit">Enviar</button>
      <p class="form-status" hidden></p>
    </form>
    <p class="muted" style="margin-top:1rem">No envíes contraseñas. Si necesito acceso, pediré permiso de solo lectura desde la plataforma.</p>
  </div></section>
</main>
${footer("es")}`;
}

export function kontaktEs() {
  return `${documentHead({
    lang: "es",
    title: "Contacto y sobre mí – Klikklokal",
    description:
      "Contacta con Willy Edison Martínez Lozano sobre Google Ads y anuncios en Meta para negocios locales. Oslo · +47 912 90 416.",
    path: "/es/contacto/",
    altPath: "/kontakt/",
    locale: "es_ES",
    extra: breadcrumbLd([
      { name: "Inicio", path: "/es/" },
      { name: "Contacto", path: "/es/contacto/" }
    ])
  })}
<body>
${nav("es", "kontakt")}
<main id="innhold">
  <section class="page-hero"><div class="wrap">
    <h1>Contacto</h1>
    <p class="lead">Cuéntame en pocas líneas qué necesitas y te respondo en 1 día laborable.</p>
  </div></section>
  <section class="section"><div class="wrap split">
    <form class="form js-kontakt" data-lang="es" method="post" action="mailto:willynoslo17@gmail.com?subject=Klikklokal">
      <label>Nombre<input name="navn" required autocomplete="name"></label>
      <label>Empresa <span class="hint">(opcional)</span><input name="bedrift" autocomplete="organization"></label>
      <label>Email<input name="email" type="email" required autocomplete="email"></label>
      <label>Teléfono <span class="hint">(opcional)</span><input name="telefon" type="tel" autocomplete="tel"></label>
      <label>Web <span class="hint">(opcional)</span><input name="nettside" type="url" placeholder="https://"></label>
      <label>Paquete
        <select name="pakke">
          <option value="google-lokal">Google Lokal</option>
          <option value="meta-lokal">Meta Lokal</option>
          <option value="google-og-meta">Google + Meta</option>
          <option value="linkedin-b2b">LinkedIn B2B</option>
          <option value="annonsesjekk">Gratis annonsesjekk</option>
          <option value="usikker" selected>No estoy seguro</option>
        </select>
      </label>
      <label>Mensaje<textarea name="melding" required></textarea></label>
      <label class="checkbox"><input type="checkbox" name="consent" value="true" required> Acepto que mis datos se usen para responderme, según la <a href="/es/privacidad/">política de privacidad</a>.</label>
      <label class="hp" aria-hidden="true">Dejar vacío<input type="text" name="website_url" tabindex="-1" autocomplete="off"></label>
      <button class="btn btn-primary" type="submit">Enviar mensaje</button>
      <p class="form-status" hidden></p>
    </form>
    <div>
      <ul class="contact-list">
        <li><a href="tel:+4791290416">+47 912 90 416</a></li>
        <li><a href="mailto:willynoslo17@gmail.com">willynoslo17@gmail.com</a></li>
        <li>Norbygata 19, 0187 Oslo, Norge</li>
      </ul>
    </div>
  </div></section>
  <section class="section section-soft" id="sobre-mi"><div class="wrap about about-wide">
    <!-- TODO Willy: solo foto-cv.jpg (camisa blanca) o ninguna foto -->
    <img class="about-photo" src="/img/willy.webp" width="640" height="640" alt="Willy Edison Martínez Lozano" loading="lazy">
    <div>
      <h2>Sobre mí</h2>
      <p>Soy Willy Edison Martínez Lozano. Klikklokal se gestiona a través de mi empresa unipersonal MARTINEZ LOZANO INTERNASJONAL HANDEL, registrada en Oslo (org.nr. 935 407 095 MVA). Klikklokal forma parte de ML Digital.</p>
      <p>Fui fundador de Wecrops Perú (agencia de marketing y producción audiovisual, Chimbote, 2015–2022) y tengo experiencia en marketing desde 2015. Cuento con 7 diplomas de Toulouse Lautrec (2019–2021).<!-- TODO Willy: confirmar títulos exactos de los diplomas. --></p>
      <p>Trabajo en español e inglés, y en noruego con textos revisados.</p>
      <!-- TODO Willy: añadir certificaciones de Google Ads / Meta Blueprint solo si las obtienes (son gratuitas). -->
      <p><a href="https://willymartinez.no/consulting">Asesoría en comercio internacional</a></p>
    </div>
  </div></section>
</main>
${footer("es")}`;
}

export function personvernEs() {
  return `${documentHead({
    lang: "es",
    title: "Privacidad – Klikklokal",
    description:
      "Política de privacidad de Klikklokal / MARTINEZ LOZANO INTERNASJONAL HANDEL. Cómo se tratan los datos de contacto.",
    path: "/es/privacidad/",
    altPath: "/personvern/",
    locale: "es_ES",
    extra: breadcrumbLd([
      { name: "Inicio", path: "/es/" },
      { name: "Privacidad", path: "/es/privacidad/" }
    ])
  })}
<body>
${nav("es", "personvern")}
<main id="innhold">
  <section class="page-hero"><div class="wrap">
    <h1>Política de privacidad</h1>
    <p class="muted">Última actualización: 8 de octubre de 2026</p>
  </div></section>
  <section class="section"><div class="wrap" style="max-width:44rem">
    <h2>Responsable del tratamiento</h2>
    <p>MARTINEZ LOZANO INTERNASJONAL HANDEL (enkeltpersonforetak), org.nr. 935 407 095 MVA, Norbygata 19, 0187 Oslo. Email: willynoslo17@gmail.com. Teléfono: +47 912 90 416. Klikklokal forma parte de ML Digital.</p>
    <h2>Qué datos se recogen</h2>
    <p>A través del formulario de contacto y del de revisión gratis puedo recibir nombre, empresa, email, teléfono, web, sector/zona, respuestas sobre publicidad previa, objetivo deseado, paquete elegido y mensaje opcional.</p>
    <h2>Finalidad y base legal</h2>
    <p>Los datos se usan solo para responder a la solicitud y hacer el seguimiento. La base legal es el consentimiento (RGPD art. 6.1.a / personopplysningsloven).</p>
    <h2>Plazo de conservación</h2>
    <p>Si no hay relación de cliente, los datos se borran o anonimizan como máximo a los 12 meses.</p>
    <h2>Encargados del tratamiento</h2>
    <p>Cloudflare (hosting). Si se configura un webhook, ese servicio recibe los datos del formulario para reenviármelos. En esta web no hay pasarela de pago.</p>
    <h2>Tus derechos</h2>
    <p>Puedes pedir acceso, rectificación, supresión, limitación y portabilidad, y retirar el consentimiento. También puedes reclamar ante Datatilsynet.</p>
    <h2>Cookies y seguimiento en esta web</h2>
    <p>Esta web no usa cookies de seguimiento, píxeles ni analítica de terceros.</p>
    <h2>Campañas de clientes</h2>
    <p>Cuando configuro anuncios para ti, tú eres el responsable del tratamiento de los datos de tu web y de tus cuentas. Yo actúo como encargado según acuerdo. La etiqueta de conversión solo se activa con consentimiento en tu web.</p>
  </div></section>
</main>
${footer("es")}`;
}
