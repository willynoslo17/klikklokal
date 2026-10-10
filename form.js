(function () {
  var ALLOWED_PAKKE = {
    "google-lokal": true,
    "meta-lokal": true,
    "google-og-meta": true,
    "linkedin-b2b": true,
    annonsesjekk: true,
    usikker: true
  };

  var ENDPOINT = "https://ml-inbox.willynoslo17.workers.dev/lead";

  var MSG = {
    ok: "Takk! Meldingen din er sendt. Vi tar kontakt så snart som mulig.",
    rate: "For mange forsøk. Vent et minutt og prøv igjen.",
    forbidden: "Vi kunne ikke bekrefte at du er et menneske. Last inn siden på nytt og prøv igjen.",
    error: "Beklager, noe gikk galt. Prøv igjen, eller send oss en e-post på kontakt@mlinternasjonal.no.",
    turnstile: "Vent til sikkerhetssjekken er ferdig, og prøv igjen."
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

  function setTs(form) {
    var ts = form.querySelector('[name="ts"]');
    if (ts) ts.value = String(Date.now());
  }

  function setStatus(el, ok, text) {
    if (!el) return;
    el.hidden = false;
    el.className = "form-status " + (ok ? "ok" : "err");
    el.textContent = text;
  }

  function resetTurnstile() {
    try {
      if (window.turnstile && typeof window.turnstile.reset === "function") {
        window.turnstile.reset();
      }
    } catch (e) {}
  }

  function buildPayload(form) {
    var fd = new FormData(form);
    var payload = {
      nombre: (fd.get("navn") || "").toString().trim(),
      email: (fd.get("email") || "").toString().trim(),
      telefono: (fd.get("telefon") || "").toString().trim() || "",
      mensaje: (fd.get("melding") || "").toString().trim(),
      marca: "klikklokal",
      pagina: window.location.pathname,
      turnstile_token: (fd.get("cf-turnstile-response") || "").toString(),
      website: (fd.get("website") || "").toString(),
      ts: Number(fd.get("ts")) || Date.now()
    };
    if (form.querySelector('[name="bedrift"]')) {
      payload.empresa = (fd.get("bedrift") || "").toString().trim();
    }
    return payload;
  }

  function bindForm(form) {
    preselectPakke(form);
    setTs(form);
    var status = form.querySelector(".form-status");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var submitBtn = form.querySelector('[type="submit"]');
      var tokenEl = form.querySelector('[name="cf-turnstile-response"]');
      var token = tokenEl ? tokenEl.value : "";

      if (!token) {
        setStatus(status, false, MSG.turnstile);
        return;
      }

      if (submitBtn) submitBtn.disabled = true;
      var payload = buildPayload(form);

      fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
        .then(function (res) {
          if (res.status === 200) {
            setStatus(status, true, MSG.ok);
            form.reset();
            preselectPakke(form);
            setTs(form);
            return;
          }
          if (res.status === 429) {
            setStatus(status, false, MSG.rate);
            return;
          }
          if (res.status === 403) {
            setStatus(status, false, MSG.forbidden);
            return;
          }
          setStatus(status, false, MSG.error);
        })
        .catch(function () {
          setStatus(status, false, MSG.error);
        })
        .finally(function () {
          resetTurnstile();
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  }

  document.querySelectorAll("form.js-kontakt").forEach(bindForm);
})();
