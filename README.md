# Klikklokal

Web estática de **Klikklokal** (parte de ML Digital): Google Ads y Meta-annonser (Facebook) para negocios locales en Noruega.

- **URL temporal:** https://klikklokal.pages.dev  
- **Stack:** HTML + CSS + JS mínimo (sin build). Cloudflare Pages + Pages Function para el formulario.
- **Idiomas:** noruego bokmål (raíz) y español (`/es/`).

## Desarrollo local

Sirve la raíz del repo, por ejemplo:

```bash
npx --yes serve -p 3000 .
```

No hay paso de build. El menú funciona sin JavaScript.

## Cambiar la URL base

La URL canónica está en `site.config.json` (`BASE_URL`) y se refleja en canonical, Open Graph, hreflang, `sitemap.xml`, `robots.txt` y JSON-LD.

Cuando compres `klikklokal.no`:

```bash
node scripts/set-base-url.mjs https://klikklokal.no
```

Los enlaces internos usan rutas relativas a la raíz (`/priser/`), así que no hace falta tocarlos.

## Formulario → webhook

`functions/api/kontakt.js` acepta solo `POST` JSON en `/api/kontakt`. Si `KONTAKT_WEBHOOK_URL` no está configurada, responde `503` y la web muestra el `mailto:` de respaldo.

Configura el secreto (Willy decide el destino: Make u otro webhook; no hay API keys en el repo):

```bash
npx wrangler pages secret put KONTAKT_WEBHOOK_URL --project-name klikklokal
```

## Deploy en Cloudflare Pages

### Opción A – Connect to Git (recomendado)

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Autoriza GitHub y elige el repo `willynoslo17/klikklokal`.
3. Ajustes del proyecto:
   - **Project name:** `klikklokal`
   - **Production branch:** `main`
   - **Build command:** *(vacío)*
   - **Build output directory:** `/`
4. Guarda. La web se publica cuando se haga merge del PR a `main`.
5. Si `klikklokal.pages.dev` ya está ocupado, elige otro nombre de proyecto y ejecuta:
   ```bash
   node scripts/set-base-url.mjs https://<tu-proyecto>.pages.dev
   ```

### Opción B – Wrangler

```bash
npx wrangler pages deploy . --project-name klikklokal
```

No configures DNS ni compres el dominio desde este flujo.

## Textos noruegos

Todo el noruego es **borrador**. Revisa `TEXTOS_NO_PARA_REVISAR.md` (p. ej. con Gemini) antes de anunciar la web.

## Regenerar HTML (opcional)

Si editas plantillas en `scripts/pages-*.mjs` / `scripts/lib-html.mjs`:

```bash
node scripts/generate-all.mjs
```

No forma parte del deploy de Pages.
