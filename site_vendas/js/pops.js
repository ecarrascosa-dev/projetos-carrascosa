
const projects = {
1: {
    title: "Projeto Alpha",
    image: "https://via.placeholder.com/600x400",
    description: "Site institucional criado para fortalecer a presença digital da marca.",
    link: "#"
},
2: {
    title: "Landing Page Beta",
    image: "https://via.placeholder.com/600x400",
    description: "Landing page estratégica focada em geração de leads.",
    link: "#"
},
3: {
    title: "Sistema Gamma",
    image: "https://via.placeholder.com/600x400",
    description: "Sistema web personalizado com integração de API.",
    link: "#"
}
};

function openModal(id) {
const project = projects[id];

document.getElementById("modalTitle").innerText = project.title;
document.getElementById("modalImage").src = project.image;
document.getElementById("modalDescription").innerText = project.description;
document.getElementById("modalLink").href = project.link;

document.getElementById("modal").classList.remove("hidden");
document.getElementById("modal").classList.add("flex");
}

function closeModal() {
document.getElementById("modal").classList.add("hidden");
document.getElementById("modal").classList.remove("flex");
}

window.addEventListener("scroll", function () {
const scrollY = window.scrollY;
const timeline = document.getElementById("processo");
timeline.style.backgroundPositionY = scrollY * 0.2 + "px";
});

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
  });

/*BOTÃO CTA*/
const btn = document.querySelector(".cta-btn");

btn.addEventListener("mousemove", (e) => {
const rect = btn.getBoundingClientRect();
const x = e.clientX - rect.left - rect.width / 2;
const y = e.clientY - rect.top - rect.height / 2;

btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
});

btn.addEventListener("mouseleave", () => {
btn.style.transform = "translate(0,0)";
});

/*NÚMEROS LINETIME*/

const counters = document.querySelectorAll(".counter");

const animateCounters = () => {
counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const increment = target / 100;

    const update = () => {
    if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(update);
    } else {
        counter.innerText = target;
    }
    };

    update();
});
};

const counterObserver = new IntersectionObserver((entries) => {
if (entries[0].isIntersecting) {
    animateCounters();
    counterObserver.disconnect();
}
}, { threshold: 0.5 });

counterObserver.observe(document.querySelector(".counter"));

/*Transições entre seções*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({
    behavior: "smooth",
    block: "start"
    });
});
});