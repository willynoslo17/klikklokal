(function () {
  var ALLOWED_PAKKE = {
    "google-lokal": true,
    "meta-lokal": true,
    "google-og-meta": true,
    "linkedin-b2b": true,
    annonsesjekk: true,
    usikker: true
  };

  function qs(name) {
    try {
      return new URLSearchParams(window.location.search).get(name);
    } catch (e) {
      return null;
    }
  }

  function preselectPakke(form) {
    var select = form.querySelector('[name="pakke"]');
    if (!select) return;
    var value = qs("pakke");
    if (value && ALLOWED_PAKKE[value]) {
      select.value = value;
    } else if (!select.value) {
      select.value = "usikker";
    }
  }

  function setStatus(el, ok, html) {
    if (!el) return;
    el.hidden = false;
    el.className = "form-status " + (ok ? "ok" : "err");
    el.innerHTML = html;
  }

  function serialize(form) {
    var data = {};
    var fd = new FormData(form);
    fd.forEach(function (value, key) {
      if (key === "website_url") return;
      data[key] = typeof value === "string" ? value.trim() : value;
    });
    data.consent = !!form.querySelector('[name="consent"]:checked');
    data.lang = form.getAttribute("data-lang") || "nb";
    data.honeypot = (fd.get("website_url") || "").toString();
    return data;
  }

  function mailtoFallback(lang) {
    var label =
      lang === "es"
        ? 'También puedes escribirme a <a href="mailto:kontakt@mlinternasjonal.no?subject=Klikklokal">kontakt@mlinternasjonal.no</a>.'
        : 'Du kan også sende e-post til <a href="mailto:kontakt@mlinternasjonal.no?subject=Klikklokal">kontakt@mlinternasjonal.no</a>.';
    return label;
  }

  function bindForm(form) {
    preselectPakke(form);
    var status = form.querySelector(".form-status");
    var lang = form.getAttribute("data-lang") || "nb";

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var payload = serialize(form);
      var submitBtn = form.querySelector('[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
        .then(function (res) {
          return res.json().catch(function () {
            return { ok: false };
          }).then(function (body) {
            return { res: res, body: body };
          });
        })
        .then(function (_ref) {
          var res = _ref.res;
          var body = _ref.body;
          if (res.ok && body && body.ok) {
            setStatus(
              status,
              true,
              lang === "es"
                ? "¡Gracias! Respondo en 1 día laborable."
                : "Takk! Jeg svarer innen 1 virkedag."
            );
            form.reset();
            preselectPakke(form);
            return;
          }
          if (res.status === 503 || (body && body.error === "not_configured")) {
            setStatus(
              status,
              false,
              (lang === "es"
                ? "El envío no está configurado ahora. "
                : "Innsending er ikke konfigurert akkurat nå. ") + mailtoFallback(lang)
            );
            return;
          }
          setStatus(
            status,
            false,
            (lang === "es"
              ? "No pude enviar el formulario. "
              : "Kunne ikke sende skjemaet. ") + mailtoFallback(lang)
          );
        })
        .catch(function () {
          setStatus(
            status,
            false,
            (lang === "es"
              ? "No pude enviar el formulario. "
              : "Kunne ikke sende skjemaet. ") + mailtoFallback(lang)
          );
        })
        .finally(function () {
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  }

  document.querySelectorAll("form.js-kontakt").forEach(bindForm);
})();
