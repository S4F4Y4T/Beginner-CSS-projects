const menu = document.querySelector('.menu');

menu.addEventListener('click', (i) => {
    i.preventDefault();
    document.querySelector('.main-menu').classList.toggle('show');
})