// JavaScript Document

var menuButton = document.querySelector("header nav button");

menuButton.addEventListener("click", menuOpenen);

function menuOpenen(){
    var deHeader = document.querySelector("header");
    deHeader.classList.toggle("menuOpen");
  }

