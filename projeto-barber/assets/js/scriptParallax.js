const parallaxBg = document.getElementById('parallax-bg')

window.addEventListener('scroll', () => {
  if (!parallaxBg) return

  const scrollY = window.scrollY
  parallaxBg.style.transform = `translateY(${scrollY * 0.3}px)`
})
