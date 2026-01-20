const reveals = document.querySelectorAll(
  '.reveal, .reveal-left, .reveal-right, .reveal-zoom'
)

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.15 }
)

reveals.forEach(el => observer.observe(el))
