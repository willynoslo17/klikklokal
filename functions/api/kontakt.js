const ALLOWED_PAKKE = new Set([
  "google-lokal",
  "meta-lokal",
  "google-og-meta",
  "linkedin-b2b",
  "annonsesjekk",
  "usikker"
]);

const ALLOWED_ANNONSERT = new Set([
  "ja-google",
  "ja-facebook",
  "begge",
  "nei"
]);

const ALLOWED_ONSKE = new Set([
  "anrop",
  "henvendelser",
  "besok",
  "vet-ikke"
]);

const MAX = {
  navn: 120,
  bedrift: 160,
  email: 200,
  telefon: 40,
  nettside: 300,
  bransje: 200,
  melding: 4000,
  pakke: 40,
  lang: 8
};

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}

function clip(value, max) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function onRequest(context) {
  const { request, env } = context;

  if (request.method !== "POST") {
    return json(405, { ok: false, error: "method_not_allowed" });
  }

  let data;
  try {
    data = await request.json();
  } catch {
    return json(400, { ok: false, error: "invalid_json" });
  }

  const honeypot = clip(data.honeypot || data.website_url || "", 200);
  if (honeypot) {
    return json(200, { ok: true });
  }

  const navn = clip(data.navn, MAX.navn);
  const email = clip(data.email || data["e-post"] || data.epost, MAX.email);
  const consent = data.consent === true || data.consent === "true" || data.consent === "on";
  const pakke = clip(data.pakke, MAX.pakke);
  const lang = clip(data.lang, MAX.lang) === "es" ? "es" : "nb";

  if (!navn || !isEmail(email) || !consent || !ALLOWED_PAKKE.has(pakke)) {
    return json(400, { ok: false, error: "validation_failed" });
  }

  const payload = {
    source: "klikklokal",
    type: pakke === "annonsesjekk" ? "annonsesjekk" : "kontakt",
    lang,
    timestamp: new Date().toISOString(),
    navn,
    email,
    bedrift: clip(data.bedrift, MAX.bedrift),
    telefon: clip(data.telefon, MAX.telefon),
    nettside: clip(data.nettside, MAX.nettside),
    melding: clip(data.melding, MAX.melding),
    pakke,
    consent: true
  };

  if (pakke === "annonsesjekk") {
    const annonsert = clip(data.annonsert, 40);
    const onske = clip(data.onske, 40);
    const bransje = clip(data.bransje, MAX.bransje);
    if (!ALLOWED_ANNONSERT.has(annonsert) || !ALLOWED_ONSKE.has(onske) || !bransje) {
      return json(400, { ok: false, error: "validation_failed" });
    }
    payload.annonsert = annonsert;
    payload.onske = onske;
    payload.bransje = bransje;
  }

  const webhook = env && env.KONTAKT_WEBHOOK_URL;
  if (!webhook) {
    return json(503, { ok: false, error: "not_configured" });
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);

  try {
    const upstream = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal
    });
    if (!upstream.ok) {
      return json(502, { ok: false, error: "upstream_failed" });
    }
    return json(200, { ok: true });
  } catch {
    return json(502, { ok: false, error: "upstream_failed" });
  } finally {
    clearTimeout(timer);
  }
}
