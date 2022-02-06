

let settings = document.querySelector('.settings')
let message = document.querySelector('.message')
let flex = document.querySelector('#flex')
let closeSet = document.querySelector('.bx-x')
 function setFlex(){
     if(settings.style.display === 'none'){
         settings.style.display = 'flex'
     }
     else {
         settings.style.display = 'none'
        }
}
flex.addEventListener('click', setFlex)
closeSet.addEventListener('click', setFlex)


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
//set home as default 
localStorage.setItem("home", "light");

//adding elements
/* const post = document.querySelector('.cont-cont');
const postCont = document.querySelector('.contents')
function addPosts(){
    const clone = post.cloneNode(true);
    postCont.appendChild(clone);
}
window.setTimeout(addPosts, 3000); 
window.onload = closeAll()*/

//add message 
function sendCont(){
    let send = document.querySelector('.send');
let sp1 = document.createElement("div")
sp1.setAttribute("class", "speaker1")
let sp1Cont = document.createElement("div")
sp1Cont.setAttribute("class", "speaker1-cont")
let text = document.getElementById("text").value
if (text===''){
    alert('Please enter the message')
}
else{
    var textC = document.createTextNode(text);
}
let textp = document.createElement("p");
textp.setAttribute("id", "samptext1")
textp.appendChild(textC)
sp1Cont.appendChild(textp);
sp1.appendChild(sp1Cont);
send.appendChild(sp1);

    // send.appendChild(newMess);
}
var input = document.getElementById("text");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.querySelector('#send').click();
  }
});

