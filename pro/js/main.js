/*==================== MENU SHOW Y HIDDEN ====================*/
const   navMenu   = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose  = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click',linkAction))

/*==================== ACCORDION SKILLS ====9================*/
    



/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/
let Smodel = document.getElementById('service_model'),
    Sbtn = document.getElementById('services_btn'),
    Scbtn = document.getElementById('service_model-close')

Sbtn.addEventListener('click', () => {
    Smodel.classList.add('activeModel');
})

Scbtn.addEventListener("click", () => {
    Smodel.classList.remove('activeModel');
})

/*==================== PORTFOLIO SWIPER  ====================*/
 
    let swiper = new Swiper('.portfolio_container', {
      cssMode: true,
      loop:true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
          el: '.swiper-pagination',
          clickable:true,
      },
    
    });

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/
const themeBtn = document.getElementById("theme-btn"),
    darkTheme = 'dark-theme',
    iconTheme = "uil-sun";

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeBtn.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeBtn.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeBtn.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})