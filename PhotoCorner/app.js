
let settings = document.querySelector('.settings')
 function setFlex(){
     if(settings.style.display==='none'){
    settings.style.display = 'flex' 
}
else{
    settings.style.display = 'none' 
}
}

function closeFrame(){
    settings.style.display = 'none' 
}
