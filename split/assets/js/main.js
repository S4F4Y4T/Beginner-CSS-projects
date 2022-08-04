//animation on scroll

window.sr = ScrollReveal();

sr.reveal('.banner-left',{
  duration:3000,
  origin:'left',
  distance:'400px'
})

sr.reveal('.banner-right',{
  duration:3000,
  origin:'right',
  distance:'400px'
})

//smooth scroll

var scroll = new SmoothScroll('.navbar a[href*="#"]');

//gallery slide

$(function() {
        const $gallery = $('.gallery a').simpleLightbox();
});

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
});
