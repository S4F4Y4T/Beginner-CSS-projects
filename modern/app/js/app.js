const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('#flex-res');
hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    if(nav.style.display = 'flex'){
        nav.style.display = 'none';
    }else{
        nav.style.display = 'flex';
    }
})