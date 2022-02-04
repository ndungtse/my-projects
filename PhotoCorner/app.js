
let settings = document.querySelector('.settings')
let message = document.querySelector('.message')
let flex = document.querySelector('#flex')
 function setFlex(){
     settings.classList.toggle('set-active')
}
flex.addEventListener('click', setFlex)

function closeFrame(){
    settings.classList.remove('set-active')
}

function showMess() {
    if(message.style.display==='none'){
        message.style.display = 'flex' 
    }
    else{
        message.style.display = 'none' 
    }
}
function closeAll() {
    message.style.display = 'none' 
    settings.style.display = 'none'
}

let theicon = document.querySelector('#toggle-left')
let body = document.body;
function theme() {
      body.classList.toggle('dark-theme');
      if(body.classList.contains('dark-theme')){
           theicon.src="Images/toggle-right.png";
      }
      else{
          theicon.src="Images/toggle-left.png";
      }
}
/* 
var icon = document.getElementById("icon")

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src="Images/sun.png";
    }
    else{
        icon.src= "Images/moon.png";
    }
} */