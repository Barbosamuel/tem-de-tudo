(() => {
  "use strict";
  const root = document.documentElement;
  const hero = document.querySelector(".hero");
  const header = document.querySelector(".site-header");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Rolagem: progresso, cabeçalho e parallax do hero (1 frame por rolagem) */
  let ticking = false;
  const update = () => {
    ticking = false;
    const y = window.scrollY;
    const max = root.scrollHeight - window.innerHeight;
    root.style.setProperty("--prog", max > 0 ? (y / max).toFixed(4) : 0);
    if (header) header.classList.toggle("is-scrolled", y > 24);
    if (hero && !reduce) {
      const p = Math.min(1, Math.max(0, y / hero.offsetHeight));
      hero.style.setProperty("--p", p.toFixed(3));
    }
  };
  window.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener("resize", update);
  update();

  /* Depois que o card/passo aparece, tira o atraso escalonado (senão o hover "arrasta") */
  document.querySelectorAll(".reveal").forEach((el) => {
    el.addEventListener("transitionend", (e) => {
      if (e.propertyName === "opacity") el.style.transitionDelay = "";
    });
  });

  /* Inclinação 3D dos cards (só com mouse) */
  if (!reduce && window.matchMedia("(hover: hover)").matches) {
    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("pointermove", (e) => {
        if (e.pointerType !== "mouse") return;
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.setProperty("--ry", (x * 9).toFixed(2) + "deg");
        card.style.setProperty("--rx", (-y * 9).toFixed(2) + "deg");
      });
      card.addEventListener("pointerleave", () => {
        card.style.removeProperty("--rx");
        card.style.removeProperty("--ry");
      });
    });
  }
})();
