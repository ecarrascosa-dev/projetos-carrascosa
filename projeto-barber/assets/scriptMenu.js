const openBtn = document.getElementById('openMenu')
const closeBtn = document.getElementById('closeMenu')
const menu = document.getElementById('mobileMenu')
const overlay = document.getElementById('overlay')

function openMenu() {
  menu.classList.remove('-translate-x-full')
  overlay.classList.remove('opacity-0', 'pointer-events-none')

  // anima links em cascata
  menu.querySelectorAll('.reveal-left').forEach((el, i) => {
    el.classList.remove('active') // reset
    el.style.transitionDelay = `${i * 0.08}s`
    setTimeout(() => {
      el.classList.add('active')
    }, 50)
  })
}

function closeMenu() {
  menu.classList.add('-translate-x-full')
  overlay.classList.add('opacity-0', 'pointer-events-none')
}

openBtn.addEventListener('click', openMenu)
closeBtn.addEventListener('click', closeMenu)
overlay.addEventListener('click', closeMenu)
