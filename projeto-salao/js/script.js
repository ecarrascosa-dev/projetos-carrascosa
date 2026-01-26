let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    header.classList.add('header-hidden');
  } else {
    header.classList.remove('header-hidden');
  }

  lastScroll = currentScroll;
});

// MENU CELULAR
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

function openMenu() {
  mobileMenu.classList.remove('-translate-y-full');
  mobileMenu.classList.add('translate-y-0');
  header.style.display = 'none';
}

function closeMobileMenu() {
  mobileMenu.classList.add('-translate-y-full');
  header.style.display = 'block';
  mobileMenu.style.display = 'none';
}

menuBtn.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMobileMenu);

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

