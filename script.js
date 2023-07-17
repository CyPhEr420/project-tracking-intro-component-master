const navToggle = document.querySelector('.nav-toggle');
const navListContainer = document.querySelector('.nav-list-container')

navToggle.addEventListener('click', (e) => {
    let logo = e.target
    if (logo.classList.contains('active')) {
        logo.classList.remove('active');
        logo.src = './images/icon-hamburger.svg'
        navListContainer.classList.remove('active');
    } else {
        logo.classList.add('active');
        logo.src = './images/icon-close.svg'
        navListContainer.classList.add('active');


    }

})