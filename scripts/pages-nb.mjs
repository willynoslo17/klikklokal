import {
  BASE,
  abs,
  documentHead,
  nav,
  footer,
  breadcrumbLd,
  PRICE_NOTE_NB,
  TODO_PRICE,
  TODO_NOTICE,
  TODO_BUDGET
} from "./lib-html.mjs";

export function googleAdsNb() {
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
    lang: "nb",
    title: "Google Ads for lokale bedrifter – Klikklokal",
    description:
      "Jeg setter opp og styrer Google Ads for lokale bedrifter i Norge. Fast månedspris, konto i ditt navn, og annonser på norsk og spansk.",
    path: "/google-ads/",
    altPath: "/es/google-ads/",
    locale: "nb_NO",
    extra:
      breadcrumbLd([
        { name: "Hjem", path: "/" },
        { name: "Google Ads", path: "/google-ads/" }
      ]) +
      `<script type="application/ld+json">\n${JSON.stringify(ldService, null, 2)}\n</script>\n`
  })}
<body>
${nav("nb", "google")}
<main id="innhold">
  <section class="page-hero"><div class="wrap">
    <h1>Google Ads for lokale bedrifter</h1>
    <p class="lead">Google Ads er betalte søkeannonser som vises når noen i området ditt søker etter det du selger. Du betaler for klikk – ikke bare for visninger.</p>
  </div></section>
  <section class="section"><div class="wrap two-col-text">
    <div><h2>Dette gjør jeg</h2>
      <ul class="list-check">
        <li>Oppsett av konto i ditt navn</li>
        <li>Søkeord og negative søkeord</li>
        <li>Annonsetekster på norsk og/eller spansk</li>
        <li>Geografisk målretting</li>
        <li>Konverteringssporing for anrop og skjema</li>
        <li>Kobling til Google Business-profilen</li>
        <li>Ukentlig kontroll og månedlig optimalisering</li>
        <li>Månedlig rapport</li>
      </ul></div>
    <div><h2>Konverteringssporing</h2>
      <p>Sporingen installeres på nettsiden din og aktiveres bare med samtykke til cookies (banner). Har du ikke banner i dag, avtaler jeg det i tilbudet.</p>
      <h2>Første 30 dager</h2>
      <ol class="steps">
        <li><div><strong>Gratis sjekk</strong><p class="muted">Jeg går gjennom nettside, profil og mål.</p></div></li>
        <li><div><strong>Oppsett og sporing</strong><p class="muted">Konto, kampanjer og måling på plass.</p></div></li>
        <li><div><strong>Kampanjen går live</strong><p class="muted">Annonsene begynner å vises i området ditt.</p></div></li>
        <li><div><strong>Første justeringer</strong><p class="muted">Søkeord, bud og tekster finjusteres.</p></div></li>
        <li><div><strong>Første rapport</strong><p class="muted">Du får en enkel oversikt over kostnad og resultater.</p></div></li>
      </ol></div>
  </div></section>
  <section class="section section-soft"><div class="wrap">
    <h2>Pris: Google Lokal</h2>
    <p class="price-note">${PRICE_NOTE_NB}</p>
    <p class="price">3&nbsp;990&nbsp;kr<small>per måned eks. mva.</small></p>
    ${TODO_PRICE}<p>+ 3&nbsp;990&nbsp;kr i oppstart</p>
    <p>${TODO_NOTICE}<strong>Ingen bindingstid – 1 måneds oppsigelse.</strong> Du eier annonsekontoen. Ingen prosent av annonsebudsjettet.</p>
    <p><a class="btn btn-primary" href="/kontakt/?pakke=google-lokal">Bestill en gratis samtale</a></p>
  </div></section>
  <section class="section"><div class="wrap faq">
    <h2>Vanlige spørsmål</h2>
    <details><summary>Hvor lang tid tar det før jeg ser resultater?</summary><p>Det kommer an på bransje, konkurranse og budsjett. De første ukene går ofte til læring og justering av kampanjen.</p></details>
    <details><summary>Hva hvis jeg allerede har en Google Ads-konto?</summary><p>Jeg kan gå gjennom den og bruke den videre. Kontoen forblir din.</p></details>
    <details><summary>Kan jeg pause annonsene?</summary><p>Ja. Annonsebudsjettet kan pauses i plattformen. Den faste månedsprisen følger vilkårene for oppsigelse.</p></details>
  </div></section>
</main>
${footer("nb")}`;
}

export function metaNb() {
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
    lang: "nb",
    title: "Meta-annonser (Facebook) for lokale bedrifter – Klikklokal",
    description:
      "Facebook-annonser via Meta for lokale bedrifter. Fast månedspris fra 2 990 kr eks. mva., ingen oppstartskostnad, og du eier kontoen.",
    path: "/meta-annonser/",
    altPath: "/es/anuncios-meta/",
    locale: "nb_NO",
    extra:
      breadcrumbLd([
        { name: "Hjem", path: "/" },
        { name: "Meta-annonser", path: "/meta-annonser/" }
      ]) + `<script type="application/ld+json">\n${JSON.stringify(ld, null, 2)}\n</script>\n`
  })}
<body>
${nav("nb", "meta")}
<main id="innhold">
  <section class="page-hero"><div class="wrap">
    <h1>Meta-annonser for lokale bedrifter</h1>
    <p class="lead">Facebook-annonser via Meta hjelper folk i nærområdet å bli kjent med bedriften din, et tilbud eller et arrangement – også før de søker aktivt.</p>
  </div></section>
  <section class="section"><div class="wrap two-col-text">
    <div><h2>Hva gjør jeg</h2>
      <ul class="list-check">
        <li>Målgruppe i nærområdet</li>
        <li>Annonsetekster</li>
        <li>Enkle annonser laget av bildene og videoene dine</li>
        <li>Testing av 2–3 varianter</li>
        <li>Optimalisering og månedlig rapport</li>
      </ul>
      <p>Jeg får tilgang via partnerroller i Meta Business Suite – aldri ved å dele passord.</p></div>
    <div>
      <h2>Materiale</h2>
      <!-- TODO Willy: enlazar a Snuttverk (Annonsevideo) cuando esté publicada. -->
      <p>Annonsene lages av bildene og videoene du har. Trenger du nye videoer, kan det avtales separat.</p>
      <h2>Ærlighetsregel</h2>
      <p>Jeg bruker ikke falske anmeldelser, og jeg presenterer ikke AI-genererte personer som kunder. Annonsene følger Metas reklamepolicyer.</p>
    </div>
  </div></section>
  <section class="section section-soft"><div class="wrap">
    <h2>Pris: Meta Lokal</h2>
    <p class="price-note">${PRICE_NOTE_NB}</p>
    <p class="price">2&nbsp;990&nbsp;kr<small>per måned eks. mva. · ingen oppstartskostnad</small></p>
    <p>${TODO_NOTICE}<strong>Ingen bindingstid – 1 måneds oppsigelse.</strong> Du eier annonsekontoen. Ingen prosent av annonsebudsjettet.</p>
    <p><a class="btn btn-primary" href="/kontakt/?pakke=meta-lokal">Bestill en gratis samtale</a></p>
  </div></section>
</main>
${footer("nb")}`;
}

export function priserNb() {
  const faq = [
    {
      q: "Hvorfor tar du ikke en prosent av annonsebudsjettet?",
      a: "Fordi du skal kunne øke budsjettet uten at min pris øker automatisk. Du betaler en fast månedspris for arbeidet mitt, og budsjettet går direkte til Google eller Meta."
    },
    {
      q: "Hva skjer med kontoen hvis samarbeidet avsluttes?",
      a: "Kontoen er din hele veien, med historikk og innstillinger. Du beholder tilgangen."
    },
    {
      q: "Trenger jeg en nettside?",
      a: "En nettside hjelper mye for sporing og tillit. Har du ikke det, ser jeg på alternativer i den gratis sjekken."
    },
    {
      q: "Kan jeg annonsere på spansk?",
      a: "Ja. Jeg kan lage annonser på norsk, spansk og engelsk – nyttig hvis kundene dine snakker flere språk."
    },
    {
      q: "Hvordan er rapporten?",
      a: "Du får en månedlig rapport på et enkelt språk: hva det kostet, og hva du fikk (klikk, anrop, henvendelser) slik plattformene måler det."
    },
    {
      q: "Hvor mye bør jeg bruke på annonser?",
      a: "Hvor mye du bør bruke på annonser, avhenger av bransje og område. Det går jeg gjennom med deg i den gratis sjekken."
    }
  ];
  const catalog = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Klikklokal-pakker",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Google Lokal",
        price: "3990",
        priceCurrency: "NOK",
        valueAddedTaxIncluded: false,
        description: "Månedspris. Oppstart 3990 NOK eks. mva.",
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
        description: "Månedspris. Oppstart 3990 NOK eks. mva.",
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
    lang: "nb",
    title: "Priser – Google Ads og Meta-annonser fra 2 990 kr/mnd – Klikklokal",
    description:
      "Fast månedspris for Google Ads og Facebook-annonser fra 2 990 kr/mnd eks. mva., ingen bindingstid. Du eier kontoen.",
    path: "/priser/",
    altPath: "/es/precios/",
    locale: "nb_NO",
    extra:
      breadcrumbLd([
        { name: "Hjem", path: "/" },
        { name: "Priser", path: "/priser/" }
      ]) +
      `${TODO_PRICE}\n<script type="application/ld+json">\n${JSON.stringify(catalog, null, 2)}\n</script>\n` +
      `<script type="application/ld+json">\n${JSON.stringify(faqLd, null, 2)}\n</script>\n`
  })}
<body>
${nav("nb", "priser")}
<main id="innhold">
  <section class="page-hero"><div class="wrap">
    <h1>Priser</h1>
    <p class="lead">Fast månedspris for arbeidet mitt. Annonsebudsjettet betaler du direkte til Google eller Meta.</p>
    <p class="price-note">${PRICE_NOTE_NB}</p>
  </div></section>
  <section class="section"><div class="wrap"><div class="cards cards-4">
    <article class="card card-featured" id="google-lokal">
      <span class="badge">Anbefalt for de fleste</span>
      <h2>Google Lokal</h2>
      <p class="price">3&nbsp;990&nbsp;kr<small>per måned eks. mva.</small></p>
      ${TODO_PRICE}<p class="muted">+ 3&nbsp;990&nbsp;kr i oppstart</p>
      <h3>Dette får du</h3>
      <ul class="list-check">
        <li>Oppsett av konto og kampanjer</li>
        <li>Konverteringssporing (med samtykke på din nettside)</li>
        <li>Søkeord og annonsetekster på norsk og/eller spansk</li>
        <li>Løpende optimalisering</li>
        <li>Månedlig rapport</li>
      </ul>
      <a class="btn btn-primary btn-block" href="/kontakt/?pakke=google-lokal">Bestill en gratis samtale</a>
    </article>
    <article class="card" id="meta-lokal">
      <h2>Meta Lokal</h2>
      <p class="price">2&nbsp;990&nbsp;kr<small>per måned eks. mva. · ingen oppstartskostnad</small></p>
      <h3>Dette får du</h3>
      <ul class="list-check">
        <li>Facebook-annonser via Meta</li>
        <li>Målgruppe i nærområdet</li>
        <li>Annonsetekster og enkle bilder/videoer fra materialet ditt</li>
        <li>Optimalisering</li>
        <li>Månedlig rapport</li>
      </ul>
      <a class="btn btn-primary btn-block" href="/kontakt/?pakke=meta-lokal">Bestill en gratis samtale</a>
    </article>
    <article class="card" id="google-og-meta">
      <h2>Google + Meta</h2>
      ${TODO_PRICE}<p class="price">5&nbsp;990&nbsp;kr<small>per måned eks. mva.</small></p>
      ${TODO_PRICE}<p class="muted">+ 3&nbsp;990&nbsp;kr i oppstart</p>
      <h3>Dette får du</h3>
      <ul class="list-check">
        <li>Begge plattformene</li>
        <li>Én fast pris</li>
        <li>Én samlet rapport</li>
      </ul>
      <a class="btn btn-primary btn-block" href="/kontakt/?pakke=google-og-meta">Bestill en gratis samtale</a>
    </article>
  </div></div></section>
  <section class="section section-soft" id="linkedin-b2b"><div class="wrap">
    <h2>Tillegg: LinkedIn B2B</h2>
    ${TODO_PRICE}<p class="price">3&nbsp;990&nbsp;kr<small>per måned eks. mva.</small></p>
    <p>LinkedIn-annonser for deg som selger til andre bedrifter.</p>
    <a class="btn btn-secondary" href="/kontakt/?pakke=linkedin-b2b">Bestill en gratis samtale</a>
  </div></section>
  <section class="section"><div class="wrap">
    <h2>Vilkår</h2>
    <div class="conditions">
      <div class="condition">${TODO_NOTICE}Ingen bindingstid – 1 måneds oppsigelse.</div>
      <div class="condition">Du eier annonsekontoen.</div>
      <div class="condition">Ingen prosent av annonsebudsjettet.</div>
    </div>
    ${TODO_BUDGET}
    <p class="price-note" style="margin-top:1.25rem">Hvor mye du bør bruke på annonser, avhenger av bransje og område. Det går jeg gjennom med deg i den gratis sjekken.</p>
  </div></section>
  <section class="section section-dark"><div class="wrap">
    <h2>Slik fungerer betalingen</h2>
    <!-- TODO Willy: plazos de pago. -->
    <div class="split">
      <div class="panel"><h3>Til meg</h3><p>Fast månedspris (faktura fra MARTINEZ LOZANO INTERNASJONAL HANDEL).</p></div>
      <div class="panel"><h3>Til Google/Meta</h3><p>Annonsebudsjettet, direkte fra ditt kort eller din konto.</p></div>
    </div>
  </div></section>
  <section class="section"><div class="wrap two-col-text">
    <div><h2>Ikke inkludert</h2>
      <ul class="list-check">
        <li>Annonsebudsjett</li>
        <li>Ny nettside eller landingsside (kan avtales separat)</li>
        <li>Nye videoer og profesjonell foto</li>
        <li>Svar på kommentarer og meldinger</li>
      </ul></div>
    <div class="faq"><h2>Vanlige spørsmål</h2>
      ${faq.map((f) => `<details><summary>${f.q}</summary><p>${f.a}</p></details>`).join("\n")}
    </div>
  </div></section>
</main>
${footer("nb")}`;
}

export function sjekkNb() {
  return `${documentHead({
    lang: "nb",
    title: "Gratis annonsesjekk – Klikklokal",
    description:
      "Få en gratis og uforpliktende gjennomgang av nettside, Google Business-profil og annonsekontoer. Du får konkrete forbedringer på e-post.",
    path: "/gratis-annonsesjekk/",
    altPath: "/es/revision-gratis/",
    locale: "nb_NO",
    extra: breadcrumbLd([
      { name: "Hjem", path: "/" },
      { name: "Gratis annonsesjekk", path: "/gratis-annonsesjekk/" }
    ])
  })}
<body>
${nav("nb", "sjekk")}
<main id="innhold">
  <section class="page-hero"><div class="wrap">
    <h1>Gratis annonsesjekk</h1>
    <p class="lead">Jeg ser på nettsiden din, Google Business-profilen og – hvis de finnes – annonsekontoene dine (med lesetilgang). Du får 3–5 konkrete forbedringer og en anbefaling om pakke på e-post.</p>
    <!-- TODO Willy: plazo de respuesta de la revisión (p. ej. 3 días hábiles). -->
    <p class="price-note">Gratis og uforpliktende. Du får svar på e-post.</p>
  </div></section>
  <section class="section"><div class="wrap">
    <form class="form js-kontakt" data-lang="nb" method="post" action="mailto:willynoslo17@gmail.com?subject=Klikklokal">
      <input type="hidden" name="pakke" value="annonsesjekk">
      <label>Navn<input name="navn" required autocomplete="name"></label>
      <label>Bedrift<input name="bedrift" autocomplete="organization"></label>
      <label>E-post<input name="email" type="email" required autocomplete="email"></label>
      <label>Telefon <span class="hint">(valgfritt)</span><input name="telefon" type="tel" autocomplete="tel"></label>
      <label>Nettside<input name="nettside" type="url" placeholder="https://"></label>
      <label>Bransje og område<input name="bransje" required placeholder="f.eks. frisør, Grønland"></label>
      <fieldset class="radio-group"><legend>Har du annonsert før?</legend>
        <label><input type="radio" name="annonsert" value="ja-google" required> Ja, Google</label>
        <label><input type="radio" name="annonsert" value="ja-facebook"> Ja, Facebook</label>
        <label><input type="radio" name="annonsert" value="begge"> Begge</label>
        <label><input type="radio" name="annonsert" value="nei"> Nei</label>
      </fieldset>
      <fieldset class="radio-group"><legend>Hva ønsker du mest?</legend>
        <label><input type="radio" name="onske" value="anrop" required> Flere anrop</label>
        <label><input type="radio" name="onske" value="henvendelser"> Flere henvendelser på nettsiden</label>
        <label><input type="radio" name="onske" value="besok"> Flere besøk i butikken</label>
        <label><input type="radio" name="onske" value="vet-ikke"> Vet ikke</label>
      </fieldset>
      <label>Melding <span class="hint">(valgfritt)</span><textarea name="melding"></textarea></label>
      <label class="checkbox"><input type="checkbox" name="consent" value="true" required> Jeg godtar at opplysningene brukes for å svare meg, i tråd med <a href="/personvern/">personvernerklæringen</a>.</label>
      <label class="hp" aria-hidden="true">La stå tom<input type="text" name="website_url" tabindex="-1" autocomplete="off"></label>
      <button class="btn btn-primary" type="submit">Send inn</button>
      <p class="form-status" hidden></p>
    </form>
    <p class="muted" style="margin-top:1rem">Ikke send passord. Hvis jeg trenger tilgang, ber jeg om lesetilgang via plattformen.</p>
  </div></section>
</main>
${footer("nb")}`;
}

export function kontaktNb() {
  return `${documentHead({
    lang: "nb",
    title: "Kontakt og om meg – Klikklokal",
    description:
      "Kontakt Willy Edison Martínez Lozano om Google Ads og Meta-annonser for lokale bedrifter. Oslo · +47 912 90 416.",
    path: "/kontakt/",
    altPath: "/es/contacto/",
    locale: "nb_NO",
    extra: breadcrumbLd([
      { name: "Hjem", path: "/" },
      { name: "Kontakt", path: "/kontakt/" }
    ])
  })}
<body>
${nav("nb", "kontakt")}
<main id="innhold">
  <section class="page-hero"><div class="wrap">
    <h1>Kontakt</h1>
    <p class="lead">Fortell kort hva du trenger, så svarer jeg innen 1 virkedag.</p>
  </div></section>
  <section class="section"><div class="wrap split">
    <form class="form js-kontakt" data-lang="nb" method="post" action="mailto:willynoslo17@gmail.com?subject=Klikklokal">
      <label>Navn<input name="navn" required autocomplete="name"></label>
      <label>Bedrift <span class="hint">(valgfritt)</span><input name="bedrift" autocomplete="organization"></label>
      <label>E-post<input name="email" type="email" required autocomplete="email"></label>
      <label>Telefon <span class="hint">(valgfritt)</span><input name="telefon" type="tel" autocomplete="tel"></label>
      <label>Nettside <span class="hint">(valgfritt)</span><input name="nettside" type="url" placeholder="https://"></label>
      <label>Pakke
        <select name="pakke">
          <option value="google-lokal">Google Lokal</option>
          <option value="meta-lokal">Meta Lokal</option>
          <option value="google-og-meta">Google + Meta</option>
          <option value="linkedin-b2b">LinkedIn B2B</option>
          <option value="annonsesjekk">Gratis annonsesjekk</option>
          <option value="usikker" selected>Usikker</option>
        </select>
      </label>
      <label>Melding<textarea name="melding" required></textarea></label>
      <label class="checkbox"><input type="checkbox" name="consent" value="true" required> Jeg godtar at opplysningene brukes for å svare meg, i tråd med <a href="/personvern/">personvernerklæringen</a>.</label>
      <label class="hp" aria-hidden="true">La stå tom<input type="text" name="website_url" tabindex="-1" autocomplete="off"></label>
      <button class="btn btn-primary" type="submit">Send melding</button>
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
  <section class="section section-soft" id="om-meg"><div class="wrap about about-wide">
    <!-- TODO Willy: solo foto-cv.jpg (camisa blanca) o ninguna foto -->
    <img class="about-photo" src="/img/willy.webp" width="640" height="640" alt="Willy Edison Martínez Lozano" loading="lazy">
    <div>
      <h2>Om meg</h2>
      <p>Jeg heter Willy Edison Martínez Lozano. Klikklokal drives gjennom mitt enkeltpersonforetak MARTINEZ LOZANO INTERNASJONAL HANDEL, registrert i Oslo (org.nr. 935 407 095 MVA). Klikklokal er en del av ML Digital.</p>
      <p>Jeg er grunnlegger av Wecrops Perú (byrå for markedsføring og videoproduksjon, Chimbote, 2015–2022) og har erfaring med markedsføring siden 2015. Jeg har 7 diplomer fra Toulouse Lautrec (2019–2021).<!-- TODO Willy: confirmar títulos exactos de los diplomas. --></p>
      <p>Jeg jobber på spansk og engelsk, og på norsk med kvalitetssikrede tekster.</p>
      <!-- TODO Willy: añadir certificaciones de Google Ads / Meta Blueprint solo si las obtienes (son gratuitas). -->
      <p><a href="https://willymartinez.no/consulting">Rådgivning i internasjonal handel</a></p>
    </div>
  </div></section>
</main>
${footer("nb")}`;
}

export function personvernNb() {
  return `${documentHead({
    lang: "nb",
    title: "Personvern – Klikklokal",
    description:
      "Personvernerklæring for Klikklokal / MARTINEZ LOZANO INTERNASJONAL HANDEL. Hvordan kontaktopplysninger behandles.",
    path: "/personvern/",
    altPath: "/es/privacidad/",
    locale: "nb_NO",
    extra: breadcrumbLd([
      { name: "Hjem", path: "/" },
      { name: "Personvern", path: "/personvern/" }
    ])
  })}
<body>
${nav("nb", "personvern")}
<main id="innhold">
  <section class="page-hero"><div class="wrap">
    <h1>Personvernerklæring</h1>
    <p class="muted">Sist oppdatert: 8. oktober 2026</p>
  </div></section>
  <section class="section"><div class="wrap" style="max-width:44rem">
    <h2>Behandlingsansvarlig</h2>
    <p>MARTINEZ LOZANO INTERNASJONAL HANDEL (enkeltpersonforetak), org.nr. 935 407 095 MVA, Norbygata 19, 0187 Oslo. E-post: willynoslo17@gmail.com. Telefon: +47 912 90 416. Klikklokal er en del av ML Digital.</p>
    <h2>Hvilke opplysninger samles inn</h2>
    <p>Via kontaktskjemaet og skjemaet for gratis annonsesjekk kan jeg motta navn, bedrift, e-post, telefon, nettside, bransje/område, svar på spørsmål om annonsering, ønsket resultat, valgt pakke og eventuell melding.</p>
    <h2>Formål og rettslig grunnlag</h2>
    <p>Opplysningene brukes bare for å svare på henvendelsen og eventuelt følge opp forespørselen. Rettslig grunnlag er samtykke (GDPR art. 6 (1) a) / personopplysningsloven).</p>
    <h2>Lagringstid</h2>
    <p>Hvis det ikke blir et kundeforhold, slettes eller anonymiseres opplysningene senest etter 12 måneder.</p>
    <h2>Databehandlere</h2>
    <p>Cloudflare (hosting av nettsiden). Hvis et webhook-mottak er konfigurert, mottar den tjenesten skjemadata for videre formidling til meg. Ingen betalingsleverandør brukes på denne nettsiden.</p>
    <h2>Dine rettigheter</h2>
    <p>Du kan be om innsyn, retting, sletting, begrensning og dataportabilitet, og du kan trekke samtykket tilbake. Klage kan sendes til Datatilsynet.</p>
    <h2>Cookies og sporing på denne nettsiden</h2>
    <p>Denne nettsiden bruker ikke sporingscookies, piksler eller analyseverktøy fra tredjeparter.</p>
    <h2>Kampanjer for kunder</h2>
    <p>Når jeg setter opp annonser for deg, er du behandlingsansvarlig for data fra din nettside og dine annonsekontoer. Jeg opptrer som databehandler etter avtale. Konverteringssporing aktiveres bare med samtykke på din nettside.</p>
  </div></section>
</main>
${footer("nb")}`;
}
