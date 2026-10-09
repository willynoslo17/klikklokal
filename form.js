/* Mailto-levering: brukes når /api/kontakt ikke er konfigurert (ingen webhook). */
(function () {
  var EMAIL = "kontakt@mlinternasjonal.no";
  var SITE = "Klikklokal";
  var SKIP = { website: 1, website_url: 1, samtykke: 1, consent: 1 };

  function ownText(label) {
    var t = "";
    for (var i = 0; i < label.childNodes.length; i++) {
      if (label.childNodes[i].nodeType === 3) t += label.childNodes[i].nodeValue;
    }
    return t.replace(/\*/g, "").replace(/\s+/g, " ").trim();
  }

  function labelFor(el) {
    var l = el.labels && el.labels[0];
    var t = l ? ownText(l) : "";
    return t || el.name.charAt(0).toUpperCase() + el.name.slice(1);
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  window.kontaktMailtoFallback = function (form, lang) {
    var es = lang === "es";
    var lines = [];
    var groups = {};
    var order = [];
    var navn = "";
    var els = form.elements;
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (!el.name || SKIP[el.name] || el.disabled) continue;
      if (el.type === "submit" || el.type === "button" || el.type === "hidden") continue;
      if (el.type === "checkbox" || el.type === "radio") {
        if (!el.checked) continue;
        var fs = el.closest("fieldset");
        var lg = fs && fs.querySelector("legend");
        var head = lg ? lg.textContent.replace(/\*/g, "").trim() : el.name;
        if (!groups[el.name]) { groups[el.name] = { head: head, vals: [] }; order.push(el.name); }
        groups[el.name].vals.push(labelFor(el));
        continue;
      }
      var v = el.tagName === "SELECT" && el.selectedIndex >= 0
        ? el.options[el.selectedIndex].text
        : String(el.value || "").trim();
      if (!v) continue;
      if (el.name === "navn") navn = v;
      lines.push(labelFor(el) + ": " + v);
    }
    for (var g = 0; g < order.length; g++) {
      lines.push(groups[order[g]].head + ": " + groups[order[g]].vals.join(", "));
    }
    var body = lines.join("\n");
    if (body.length > 1800) body = body.slice(0, 1800) + "…";
    body += "\n\n— " + (es ? "Enviado desde el formulario de " : "Sendt fra kontaktskjemaet på ") + SITE + " (" + location.href + ")";
    var subject = SITE + (es ? " – consulta" : " – henvendelse") + (navn ? (es ? " de " : " fra ") + navn : "");
    var url = "mailto:" + EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    try { window.location.href = url; } catch (e) {}
    var a = '<a href="' + escapeHtml(url) + '">';
    return es
      ? "Abrimos tu programa de correo con el mensaje listo para " + escapeHtml(EMAIL) + ". Pulsa «Enviar» para completarlo. ¿No se abrió nada? " + a + "Haz clic aquí</a> o escribe a " + '<a href="mailto:' + EMAIL + '">' + EMAIL + "</a>."
      : "Vi åpner e-postprogrammet ditt med meldingen klar til " + escapeHtml(EMAIL) + ". Trykk «Send» for å fullføre. Åpnet ingenting? " + a + "Klikk her</a> eller skriv til " + '<a href="mailto:' + EMAIL + '">' + EMAIL + "</a>.";
  };
})();

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
            setStatus(status, false, window.kontaktMailtoFallback(form, lang));
            return;
          }
          setStatus(status, false, window.kontaktMailtoFallback(form, lang));
        })
        .catch(function () {
          setStatus(status, false, window.kontaktMailtoFallback(form, lang));
        })
        .finally(function () {
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  }

  document.querySelectorAll("form.js-kontakt").forEach(bindForm);
})();
