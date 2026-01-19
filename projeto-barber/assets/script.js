
const slides = document.querySelectorAll('.slide');
const title = document.getElementById('hero-title');
const subtitle = document.getElementById('hero-subtitle');

let index = 0;

function showSlide(i) {
slides.forEach(slide => slide.classList.remove('active'));
slides[i].classList.add('active');

// reset texto
title.classList.remove('opacity-100', 'translate-y-0');
subtitle.classList.remove('opacity-100', 'translate-y-0');

// anima texto
setTimeout(() => {
    title.classList.add('opacity-100', 'translate-y-0');
    subtitle.classList.add('opacity-100', 'translate-y-0');
}, 300);
}

setInterval(() => {
index = (index + 1) % slides.length;
showSlide(index);
}, 5000);

// inicia
showSlide(index);

