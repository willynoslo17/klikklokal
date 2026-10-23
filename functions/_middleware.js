// 301: old klikklokal.pages.dev (production host) -> https://klikklokal.no
export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === "klikklokal.pages.dev" || url.hostname === "www.klikklokal.no") {
    url.hostname = "klikklokal.no";
    url.protocol = "https:";
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
