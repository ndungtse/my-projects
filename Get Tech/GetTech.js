
function lightMode () {
  document.body.style.background= " linear-gradient(to bottom,#ffffff, #5050ee, #ffffff, #5050ee, #ffffff, #5050ee, #ffffff, #5050ee)"
}
function darkMode () {
  document.body.style.background= "#131313"
}
const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo')
const addLight = document.querySelector('.sun')
const addDark = document.querySelector('.moon')

//Display  mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//SLideshow
var myIndex = 0;
 slideshow();
 
 function slideshow() {
   var i;
   var x = document.getElementsByClassName("mySlides");
   for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
   }
   myIndex++;
   if (myIndex > x.length) {myIndex = 1}    
   x[myIndex-1].style.display = "block";  
   setTimeout(slideshow, 2000); // Change image every 2 seconds
 }

 //close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
if(window.innerWidth <= 8 && menuBars) {
  menu.classList.toggle('is-active');
  menulinks.classList.remove('active');
}
};

menulinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
addDark.addEventListener('click', hideMobileMenu);
addLight.addEventListener('click', hideMobileMenu);

var signupBtn = document.querySelector('.button')

function signUp () {
  document.querySelector('.upform').style.display = "flex"
  document.querySelector('.navbar').style.display= "none"
}
function closesignUp () {
  document.querySelector('.upform').style.display = "none"
  document.querySelector('.navbar').style.display= "flex"
}


window.onscroll = function (e) {
  console.log(window.scrollY); // Value of scroll Y in px
}; 

var loader = document.querySelector('.preloader');

window.addEventListener("load", function() {
  loader.style.display = "none"
})