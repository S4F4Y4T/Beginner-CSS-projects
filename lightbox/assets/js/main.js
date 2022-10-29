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
 const $gallery = $('.gallery a').simpleLightbox();

//scroll appear
function Scrollrvl(){
  const overlay = document.querySelector('.overlay .container');
  const scr     = window.innerHeight / 2;

  const pos = overlay.getBoundingClientRect().top;

  if(pos < scr){
    overlay.classList.add('appears');
  }
}
 window.addEventListener('scroll',Scrollrvl);


