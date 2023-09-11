$(document).ready(function () {
  function nav() {
    $(".nav-toggle").click(function () {
      $(".nav").toggleClass("open");
    });
  }
  nav();
});

// modification TP

// caroussel

var slides = document.querySelectorAll(".slide"); // stocker les diapositives de classe slide dans la variable slides.
var prev = document.querySelector(".prev"); // stocker l'élément de classe prev dans la variable prev.
var next = document.querySelector(".next"); // stocker l'élément de classe next dans la variable next.
var currentSlide = 0; // initialisation de la variable currentSlide à 0.

function carousel(x) {
  slides[currentSlide].className = "slide"; // Retire la classe "active" du slide actuel.
  currentSlide = (x + slides.length) % slides.length; // Calcule l'index du nouveau slide. S'assure qu'il reste dans les limites de la liste de la variable slides.
  slides[currentSlide].className = "slide active"; // slides[currentSlide].className = "slide active";
}

function goBack() {
  carousel(currentSlide - 1); // décrémente la diapositive de 1.
}

function goNext() {
  carousel(currentSlide + 1); // incrémente la diapositive de 1.
}

prev.onclick = function () {
  // appel à la fonction goBack() lors du click.
  goBack();
};

next.onclick = function () {
  // appel à la fonction goNext() lors du click.
  goNext();
};

// map

var map = L.map("map").setView([48.649828259483485, -72.459128094048], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([48.649828259483485, -72.459128094048])
  .addTo(map)
  .bindPopup("Sam Photo<br>Cégep de St-Félicien.")
  .openPopup();
