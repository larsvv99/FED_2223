// JavaScript Document


//Navigatie
var menuButton = document.querySelector("header nav button");

menuButton.addEventListener("click", menuOpenen);

function menuOpenen(){
    var deHeader = document.querySelector("header");
    deHeader.classList.toggle("menuOpen");
  }

//Disabled button

var deCheckbox = document.querySelector("input[type='checkbox']");

deCheckbox.addEventListener("change", acceptTerms);

function acceptTerms() {
	var formButton = document.querySelector("main section:nth-child(6) button");
	if (formButton.disabled == true) {
		formButton.disabled = false;
    formButton.classList.add("enabled");
	} else {
		formButton.disabled = true;
    formButton.classList.remove("enabled");
	}
	
}
