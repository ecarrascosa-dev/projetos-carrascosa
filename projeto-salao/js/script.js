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

