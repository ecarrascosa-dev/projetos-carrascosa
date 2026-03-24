const slider = document.getElementById("slider")
const next = document.getElementById("next")
const prev = document.getElementById("prev")

next.addEventListener("click", () => {
    slider.scrollBy({ left: 350, behavior: "smooth" })
})

prev.addEventListener("click", () => {
    slider.scrollBy({ left: -350, behavior: "smooth" })
})

//MENU MOBILE

const menuBtn = document.getElementById("menuBtn")
const closeBtn = document.getElementById("closeBtn")
const menu = document.getElementById("menu")
const overlay = document.getElementById("overlay")

menuBtn.addEventListener("click", () => {
    menu.classList.remove("translate-x-full")
    overlay.classList.remove("opacity-0", "pointer-events-none")
})

closeBtn.addEventListener("click", closeMenu)
overlay.addEventListener("click", closeMenu)

function closeMenu(){
    menu.classList.add("translate-x-full")
    overlay.classList.add("opacity-0", "pointer-events-none")
}
