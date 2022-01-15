
const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo')

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

function signUp () {
  document.querySelector('.upform').style.display = "flex"
}
function closesignUp () {
  document.querySelector('.upform').style.display = "none"
}

window.addEventListener('scroll', ()=> {
  let current = '';
  console.log(pageYoffet);
})