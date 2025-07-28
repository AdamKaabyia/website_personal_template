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

// Portfolio hover blur effect
const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');

portfolioItems.forEach((item) => {
  const bg = item.querySelector('.portfolio-img-background');
  item.addEventListener('mouseover', () => bg && bg.classList.add('image-blur'));
  item.addEventListener('mouseout', () => bg && bg.classList.remove('image-blur'));
});

// Scroll progress bar
const progressBar = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (window.scrollY / docHeight) * 100;
  progressBar.style.width = scrolled + '%';
});

// Card tilt effect
portfolioItems.forEach((item) => {
  item.addEventListener('mousemove', (e) => {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / (rect.height / 2)) * 6;
    const rotateY = (x / (rect.width / 2)) * 6;
    item.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg)';
  });
});

// Project filters
const filters = document.querySelectorAll('.filter');
filters.forEach((btn) => {
  btn.addEventListener('click', () => {
    filters.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.dataset.filter;
    portfolioItems.forEach((item) => {
      const itemCat = item.dataset.category;
      if (category === 'all' || itemCat === category) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Modal / lightbox
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const closeModal = modal ? modal.querySelector('.close') : null;

if (modal) {
  portfolioItems.forEach((item) => {
    item.addEventListener('click', () => {
      const bg = item.querySelector('.portfolio-img-background');
      if (!bg) return;
      const url = bg.style.backgroundImage.slice(5, -2);
      modalImg.src = url;
      modalCaption.textContent = item.querySelector('.subtitle')?.textContent || '';
      modal.classList.add('show');
    });
  });

  closeModal.addEventListener('click', () => modal.classList.remove('show'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('show');
  });
}

// Header shrink on scroll
const siteHeader = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    siteHeader.classList.add('shrink');
  } else {
    siteHeader.classList.remove('shrink');
  }
});

// Scroll-spy active nav link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('header nav a');

const spyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((l) => l.classList.remove('active'));
        const active = document.querySelector(`header nav a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  },
  { rootMargin: '-50% 0px -50% 0px' }
);
sections.forEach((sec) => spyObserver.observe(sec));

// Lazy-load portfolio background images
const lazyBgObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const bg = el.dataset.bg;
      if (bg) el.style.backgroundImage = `url(${bg})`;
      obs.unobserve(el);
    }
  });
});

document.querySelectorAll('.portfolio-img-background[data-bg]').forEach((el) => lazyBgObserver.observe(el));

// Preloader fade
window.addEventListener('load', () => {
  const pre = document.getElementById('preloader');
  if (pre) {
    pre.classList.add('fade-out');
    setTimeout(() => pre.remove(), 500);
  }
});

// Simple typing effect for hero section
document.addEventListener('DOMContentLoaded', () => {
  const typedSpan = document.getElementById('typedText');
  if (!typedSpan) return;

  const phrases = [
    'a Web Developer',
    'a Designer',
    'an Open-Source Enthusiast'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let typing = true;

  const typeSpeed = 100;
  const eraseSpeed = 50;
  const pause = 1800;

  function type() {
    if (charIndex < phrases[phraseIndex].length) {
      typedSpan.textContent += phrases[phraseIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typeSpeed);
    } else {
      typing = false;
      setTimeout(erase, pause);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedSpan.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, eraseSpeed);
    } else {
      typing = true;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, typeSpeed);
    }
  }

  type();
});