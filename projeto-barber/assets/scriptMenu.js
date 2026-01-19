const openBtn = document.getElementById('openMenu')
const closeBtn = document.getElementById('closeMenu')
const menu = document.getElementById('mobileMenu')
const overlay = document.getElementById('overlay')

openBtn.addEventListener('click', () => {
  menu.classList.remove('-translate-x-full')
  overlay.classList.remove('opacity-0', 'pointer-events-none')
})

closeBtn.addEventListener('click', () => {
  menu.classList.add('-translate-x-full')
  overlay.classList.add('opacity-0', 'pointer-events-none')
})

overlay.addEventListener('click', () => {
  menu.classList.add('-translate-x-full')
  overlay.classList.add('opacity-0', 'pointer-events-none')
})
