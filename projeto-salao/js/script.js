let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 120) {
    header.classList.add('header-hidden');
  } else {
    header.classList.remove('header-hidden');
  }

  lastScroll = currentScroll;
});

// MENU MOBILE
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

function openMenu() {
  mobileMenu.classList.remove('-translate-y-full');
  mobileMenu.classList.add('translate-y-0');

  // header só fica atrás, não some
  header.classList.add('opacity-0', 'pointer-events-none');
}

function closeMobileMenu() {
  mobileMenu.classList.add('-translate-y-full');
  mobileMenu.classList.remove('translate-y-0');

  header.classList.remove('opacity-0', 'pointer-events-none');
}

menuBtn.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMobileMenu);

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});


// SECTION MAIN

const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function changeSlide() {
  slides[currentSlide].classList.remove('active');

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add('active');
}

setInterval(changeSlide, 5000); // troca a cada 5s

// CARROSSEL AVALIAÇÃO
const track = document.getElementById('reviews-track');
const cards = document.querySelectorAll('.review-card');

let index = 0;
let startX = 0;
let isDragging = false;
let currentTranslate = 0;

function cardWidth() {
  return cards[0].offsetWidth + 24; // gap
}

function updateSlide() {
  track.style.transform = `translateX(-${index * cardWidth()}px)`;
}

/* ===== TOUCH ===== */
track.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

track.addEventListener('touchend', e => {
  if (!isDragging) return;
  const endX = e.changedTouches[0].clientX;
  handleSwipe(startX - endX);
  isDragging = false;
});

/* ===== MOUSE ===== */
track.addEventListener('mousedown', e => {
  startX = e.clientX;
  isDragging = true;
});

window.addEventListener('mouseup', e => {
  if (!isDragging) return;
  const endX = e.clientX;
  handleSwipe(startX - endX);
  isDragging = false;
});

/* ===== LOGIC ===== */
function handleSwipe(distance) {
  if (distance > 60 && index < cards.length - 1) index++;
  if (distance < -60 && index > 0) index--;
  updateSlide();
}

/* FIX resize */
window.addEventListener('resize', updateSlide);


/*JS GLOBAL*/
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll('.reveal, .reveal-scale')
  .forEach(el => observer.observe(el));


