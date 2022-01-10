function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function myAlert() {
    var txt = document.getElementById("signup").onload;
    if (confirm("By clicking ok , you Agree with the Aer's terms and conditions")) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
  }

  