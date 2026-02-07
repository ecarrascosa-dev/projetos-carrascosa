// HEADER muda ao scroll
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("bg-primary", "shadow-lg");
  } else {
    header.classList.remove("bg-primary", "shadow-lg");
  }
});

// ===== MENU MOBILE =====
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");
const spans = menuBtn.querySelectorAll("span");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("translate-x-full");

    // Animação X
    spans[0].classList.toggle("rotate-45");
    spans[0].classList.toggle("translate-y-2");

    spans[1].classList.toggle("opacity-0");

    spans[2].classList.toggle("-rotate-45");
    spans[2].classList.toggle("-translate-y-2");
});

// Fecha ao clicar no link
mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("translate-x-full");

        spans[0].classList.remove("rotate-45","translate-y-2");
        spans[1].classList.remove("opacity-0");
        spans[2].classList.remove("-rotate-45","-translate-y-2");
    });
});


// CARROSSEL AUTOMÁTICO
const slides = document.querySelectorAll(".slide");
let current = 0;

function nextSlideCarrossel() {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}

setInterval(nextSlideCarrossel, 3000);


// EFEITO DIGITANDO
const text = "Combatividade. Confidencialidade. Técnica.";
let index = 0;
const speed = 100;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

typeEffect();


//Slide Certificações
const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let index2 = 0;
const totalSlides = slider.children.length;

function updateSlider() {
  slider.style.transform = `translateX(-${index2 * 100}%)`;
}

function nextSlide() {
  index2 = (index2 + 1) % totalSlides;
  updateSlider();
}

function prevSlide() {
  index2 = (index2 - 1 + totalSlides) % totalSlides;
  updateSlider();
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Auto Slide
setInterval(nextSlide, 4000);

// Animações
// ===== SCROLL REVEAL =====
const reveals = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);