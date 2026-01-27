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
  const carousel = document.querySelector("[data-hero-carousel]");
  if (!carousel) return;

  const slides = carousel.querySelectorAll("[data-hero-slide]");
  const dots = carousel.querySelectorAll(".hero-dot");

  let current = 0;
  let interval;

  // ✅ Show Slide + Active Dot
  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.remove("opacity-0", "scale-105", "z-0");
        slide.classList.add("opacity-100", "scale-100", "z-10");
      } else {
        slide.classList.remove("opacity-100", "scale-100", "z-10");
        slide.classList.add("opacity-0", "scale-105", "z-0");
      }
    });

    // ✅ Update Dot Active State
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add("bg-black");
        dot.classList.remove("bg-transparent");
      } else {
        dot.classList.remove("bg-black");
        dot.classList.add("bg-transparent");
      }
    });

    current = index;
  }

  // ✅ Auto Slide
  function startAutoSlide() {
    interval = setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 5000);
  }

  // ✅ Reset Auto Slide After Click
  function resetAutoSlide() {
    clearInterval(interval);
    startAutoSlide();
  }

  // ✅ Dot Click
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = Number(dot.dataset.slide);
      showSlide(index);
      resetAutoSlide();
    });
  });

  // ✅ Start
  showSlide(0);
  startAutoSlide();
});
