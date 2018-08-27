var i;
var mySlides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("circle");
var slideIndex = 1;
showDivs(slideIndex);


function plusDivs(n) {
    showDivs(slideIndex += n);
}//Ajoute ou retranche 1 a slideIndex lors du clic sur les flèches

//Montre ou cache les images du slider
function showDivs(n) {
    if (n > mySlides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = mySlides.length} ;
    for (i = 0; i < mySlides.length; i++) {
        mySlides[i].style.display = "none";
    }//Gère la boucle de défilement des images et cache les divs mySlides
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("backgroundWhite", "");
    }//Enlève la classe de colorisation de la puce par défaut
    mySlides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " backgroundWhite";
    //Colore la puce associée à l'image associée
}

//Gère le défilement automatique du carousel et la colorisation des puces en fonction
function carousel() {
    for (i = 0; i < mySlides.length; i++) {
      mySlides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("backgroundWhite", "");
    }
    slideIndex++;
    if (slideIndex > mySlides.length) {slideIndex = 1}
    mySlides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " backgroundWhite";
}

setInterval(carousel, 5000); //Détermine la durée d'affichage d'une image

//Associe les puces avec les images par clic
function currentDiv(n) {
  showDivs(slideIndex = n);
}


//Fonction qui permet d'ajouter une image et son texte en entrant dans les paramètres la source de l'image, son alt et le texte associé

// function addImageAndText(source, alt, text) {
//
//   document.getElementsByClassName("slideContainer");
//   var divElement = document.createElement("div");
//   divElement.classList.add("mySlides");
//   divElement.classList.add("w-100");
//   var imgElement = document.createElement("img");
//   imgElement.src = source;
//   imgElement.alt = alt;
//   var paraElement = document.createElement("p");
//   paraElement.classList.add("text-center");
//   paraElement.classList.add("whiteColor");
//   paraElement.textContent = text;
//   document.getElementsByClassName("slideContainer")[0].appendChild(divElement);
//   divElement.appendChild(paraElement);
//   divElement.appendChild(imgElement);
// }
