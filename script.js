// script.js - interaktywność strony Piotra Siegoczyńskiego

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");

  // Smooth scroll
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      if (link.hash) {
        e.preventDefault();
        const target = document.querySelector(link.hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // Submit form
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Dziękujemy za kontakt! Skontaktuję się z Tobą wkrótce.");
      form.reset();
    });
  }
});
