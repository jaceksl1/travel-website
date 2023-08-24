/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector('#nav-menu'),
      navToggle = document.querySelector('#nav-toggle'),
      navClose = document.querySelector('#nav-close');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== ADD BLUR TO HEADER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
