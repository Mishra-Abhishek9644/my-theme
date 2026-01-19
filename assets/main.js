console.log("main.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("mobile-menu-open");
  const closeBtn = document.getElementById("mobile-menu-close");
  const menu = document.getElementById("mobile-menu");

  if (!openBtn || !closeBtn || !menu) return;

  openBtn.addEventListener("click", () => {
    menu.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.add("hidden");
  });

  // Close when clicking outside
  menu.addEventListener("click", (e) => {
    if (e.target === menu) {
      menu.classList.add("hidden");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector("[data-hero-carousel]");
  if (!carousel) return;

  const slides = carousel.querySelectorAll("[data-hero-slide]");
  let current = 0;

  setInterval(() => {
    slides[current].classList.remove("opacity-100");
    slides[current].classList.add("opacity-0");

    current = (current + 1) % slides.length;

    slides[current].classList.remove("opacity-0");
    slides[current].classList.add("opacity-100");
  }, 5000); // 5 seconds
});
