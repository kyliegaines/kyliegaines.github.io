// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
      toggle.classList.toggle("open");
    });

    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.classList.remove("open");
      })
    );
  }

  // Scroll reveal (progressive enhancement: content is visible by default,
  // JS only adds the fade-in effect; a fallback timer guarantees nothing
  // stays hidden even if the observer never fires, e.g. during PDF export).
  const revealEls = document.querySelectorAll(".reveal");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if ("IntersectionObserver" in window && revealEls.length && !prefersReducedMotion) {
    revealEls.forEach((el) => el.classList.add("pre"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            entry.target.classList.remove("pre");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));

    // Safety net: force everything visible after 1.5s no matter what,
    // so nothing can ever be stuck hidden (slow observers, screenshot
    // tools, print/export, etc).
    setTimeout(() => {
      revealEls.forEach((el) => {
        el.classList.add("in");
        el.classList.remove("pre");
      });
    }, 1500);
  }

  // Set current year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
