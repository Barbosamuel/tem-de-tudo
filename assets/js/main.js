(() => {
  "use strict";

  const cfg = window.TEM_DE_TUDO || {};
  const digits = String(cfg.whatsapp || "").replace(/\D/g, "");
  const waReady = digits.length >= 12; // 55 + DDD + número
  const root = document.documentElement;
  root.classList.add("js");

  const waLink = (text) =>
    `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;

  if (!waReady) {
    console.warn("[Tem de Tudo] WhatsApp não configurado. Edite assets/js/config.js.");
  }

  /* Botões simples de WhatsApp */
  document.querySelectorAll("[data-wa]").forEach((a) => {
    if (!waReady) return; // sem número: o link continua levando ao formulário
    a.href = waLink(cfg.saudacao || "Olá!");
    a.target = "_blank";
    a.rel = "noopener";
  });

  /* Instagram */
  document.querySelectorAll("[data-instagram]").forEach((a) => {
    if (!cfg.instagram) return;
    a.href = cfg.instagram;
    a.hidden = false;
  });

  /* Horários */
  const horarios = document.getElementById("horarios");
  if (horarios && Array.isArray(cfg.horarios) && cfg.horarios.length) {
    const dl = document.createElement("dl");
    dl.className = "hours";
    cfg.horarios.forEach(({ dia, horas }) => {
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = dia;
      dd.textContent = horas;
      dl.append(dt, dd);
    });
    horarios.replaceChildren(dl);
  }

  /* Montador de lista */
  const form = document.getElementById("lista-form");
  if (form) {
    const area = form.querySelector("#lista");
    const nome = form.querySelector("#nome");
    const hint = document.getElementById("lista-hint");

    form.querySelectorAll("[data-item]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = `• ${btn.dataset.item}`;
        const current = area.value.replace(/\s+$/, "");
        area.value = current ? `${current}\n${item}\n` : `${item}\n`;
        area.focus();
        area.setSelectionRange(area.value.length, area.value.length);
      });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const lista = area.value.trim();
      if (!lista) {
        hint.textContent = "Escreva ao menos um item para enviar.";
        area.focus();
        return;
      }
      if (!waReady) {
        hint.textContent = "O WhatsApp da loja ainda não foi configurado neste site.";
        return;
      }
      const quem = nome.value.trim();
      const msg =
        `Olá, Tem de Tudo!${quem ? ` Aqui é ${quem}.` : ""}\n` +
        `Gostaria de um orçamento destes materiais:\n\n${lista}`;
      hint.textContent = "Abrindo o WhatsApp…";
      window.open(waLink(msg), "_blank", "noopener");
    });
  }

  /* Revelar ao rolar */
  const items = document.querySelectorAll(".reveal");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if ("IntersectionObserver" in window && !reduce) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 3) * 60}ms`;
      io.observe(el);
    });
  } else {
    items.forEach((el) => el.classList.add("in"));
  }
})();
