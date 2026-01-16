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
