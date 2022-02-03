const menu = document.querySelector('#mobile-menu')
const menulinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

//Display  mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//Show active menu when scorilling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page'); 
    let scrollPos = window.scrollY;
    console.log(scrollPos);

    //adds 'highlight' class to my menu items
    if(window.innerWidth > 960 && scrollPos < 852) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1692) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return;
    } else if(window.innerWidth > 960 && scrollPos < 2645) {
        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }
    if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//class mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
if(window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menulinks.classList.remove('active');
}
};

menulinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

//active on scraoll
const section = document.querySelectorAll("div");
const navLi = document.querySelectorAll("nav .navbar__container ul li a");
/*
window.onscroll = () => {
  var current = "";

  section.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("class"); }
  });

  navLi.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
};*/
