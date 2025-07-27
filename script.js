const navToggle = document.getElementById("navToggle");
const nav = document.querySelector("header nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // Close nav after clicking a link (optional for better UX)
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

// Reveal on scroll animation
const revealElements = document.querySelectorAll('.reveal');

if (revealElements.length) {
  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealElements.forEach((el) => io.observe(el));
}