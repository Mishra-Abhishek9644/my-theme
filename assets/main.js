console.log("main.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  if (window.AOS) {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,   // 🔑 IMPORTANT: animate EVERY time on scroll
      offset: 120
    });
  }
});

document.addEventListener("shopify:section:load", () => {
  if (window.AOS) {
    AOS.refresh();
  }
});


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
  if (slides.length < 2) return;

  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove(
        "opacity-100",
        "scale-100",
        "z-10",
        "pointer-events-auto"
      );
      slide.classList.add(
        "opacity-0",
        "scale-105",
        "z-0",
        "pointer-events-none"
      );

      if (i === index) {
        slide.classList.remove(
          "opacity-0",
          "scale-105",
          "z-0",
          "pointer-events-none"
        );
        slide.classList.add(
          "opacity-100",
          "scale-100",
          "z-10",
          "pointer-events-auto"
        );
      }
    });
  }

  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 5000);
});

