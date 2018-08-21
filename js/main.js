var i;
var x = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("activeDot");
var slideIndex = 1;
showDivs(slideIndex);

//Ajoute ou retranche 1 a slideIndex
function plusDivs(n) {
    showDivs(slideIndex += n);
}

//cache tous les éléments mySlides et affiche l'élément avec le slideIndex donné
function showDivs(n) {
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("backgroundWhite", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " backgroundWhite";

}

function carousel() {
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("backgroundWhite", "");
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " backgroundWhite";
}

setInterval(carousel, 5000);

function currentDiv(n) {
  showDivs(slideIndex = n);
}












































// var myIndex = 1;
// carousel(myIndex);
//
// function plusDivs(n) {
//     carousel(myIndex += n);
//     clearInterval(slide);
//     slide = setInterval(carousel, 2000);
// }
//
// function currentDiv(n) {
//   carousel(myIndex);
// }
//
// function carousel(n) {
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     for (i = 0; i < x.length; i++) {
//        x[i].style.display = "none";
//     }
//     myIndex++;
//     if (myIndex > x.length) {myIndex = 1}
//     x[myIndex-1].style.display = "block";
// }
// var slide = setInterval(carousel, 2000);





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

// addImageAndText("img/jo.jpg", "image jo", "Ceremonie JO");

// var slideIndex = 0;
// carousel();
//
// function carousel() {
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     for (i = 0; i < x.length; i++) {
//       x[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > x.length) {slideIndex = 1}
//     x[slideIndex-1].style.display = "block";
//     setTimeout(carousel, 2000);
// }
