const menu  = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('#navbar_logo')
const body = document.querySelector('body')

//Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

//Animations

gsap.registerPlugin(ScrollTrigger)

gsap.from('.animate-hero',{
    duration: 1.8,
    opacity: 0,
    y: -150,
    stagger: 0.3
});

gsap.from('.animate-services',{
    ScrollTrigger: '.animate-services',
    duration: 1.8,
    opacity: 0,
    y: -150,
    stagger: 0.3
});


//circle

