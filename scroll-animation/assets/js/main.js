//animation on scroll

window.sr = ScrollReveal();

sr.reveal('.showcase-left',{
  duration:3000,
  origin:'left',
  distance:'400px'
})

sr.reveal('.showcase-right',{
  duration:3000,
  origin:'right',
  distance:'400px'
})

//smooth scroll

var scroll = new SmoothScroll('.navbar a[href*="#"]');
