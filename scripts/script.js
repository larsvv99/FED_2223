// JavaScript Document
console.log("hi");

var menuButton = document.querySelector("header nav button");

menuButton.addEventListener("click", menuOpenen);

function menuOpenen(){
    var deHeader = document.querySelector("header");
    deHeader.classList.toggle("menuOpen");

    var deUl = document.querySelector("header nav ul");
    deUl.classList.toggle("centerMenu");

    var tekstKleurMenu = document.querySelector("header nav ul li a");
    tekstKleurMenu.classList.toggle("tekstKleurWit");

    var buttonChange = document.querySelector("header button img");
    buttonChange.classList.toggle("buttonVeranderd")
  }