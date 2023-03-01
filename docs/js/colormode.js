const modoBtn = document.getElementById("modo-btn");
const navbar = document.querySelector("nav");

modoBtn.addEventListener("click", function () {
  if (navbar.classList.contains("nav-claro")) {
    navbar.classList.remove("nav-claro");
    navbar.classList.add("nav-oscuro");
  } else {
    navbar.classList.remove("nav-oscuro");
    navbar.classList.add("nav-claro");
  }
});
