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
