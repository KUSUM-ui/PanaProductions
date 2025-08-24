// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// Simple testimonials carousel
const track = document.querySelector('.carousel-track');
const slides = Array.from(document.querySelectorAll('.testimonial'));
const prev = document.querySelector('.carousel-prev');
const next = document.querySelector('.carousel-next');
let index = 0;

function updateCarousel(i){
  index = (i + slides.length) % slides.length;
  const x = -index * 100;
  track.style.transform = `translateX(${x}%)`;
  slides.forEach((s, idx)=> s.classList.toggle('is-active', idx === index));
}

if (prev && next && track && slides.length){
  prev.addEventListener('click', ()=> updateCarousel(index - 1));
  next.addEventListener('click', ()=> updateCarousel(index + 1));
}

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Smooth scroll for same-page links
const links = document.querySelectorAll('a[href^="#"]');
for (const link of links){
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');
    const target = id && document.querySelector(id);
    if (target){
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      menu?.classList.remove('is-open');
      toggle?.setAttribute('aria-expanded', 'false');
    }
  });
}
const hero = document.querySelector(".hero");
const images = [
  "./pic1.jpg",
  "./pic1.jpg",
  "./pic1.jpg"
];

let current = 0;

function changeBackground() {
  hero.style.setProperty("--bg-image", `url(${images[current]})`);
  hero.style.backgroundImage = `url(${images[current]})`;
  current = (current + 1) % images.length;
}

setInterval(changeBackground, 5000); // change every 5 sec
changeBackground(); // load first image



