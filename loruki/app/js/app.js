const hamburger=document.querySelector(".navbar i");
const navbar   = document.querySelector('.navbar .navbar__nav');
hamburger.addEventListener('click', (i) => {
    i.preventDefault();
    navbar.classList.toggle('open');

})