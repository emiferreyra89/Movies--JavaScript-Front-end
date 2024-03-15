const body = document.querySelector("body");
const h1 = document.querySelector("h1");

const logo = document.querySelector('figure')

// const darkmode = prompt("¿Desea modo oscuro?");

// if (darkmode != null) {
//   body.style.backgroundColor = "#7f7f7f";
//   body.classList.add("fondoMoviesList");
// }

h1.innerText += "listado de peliculas";
h1.style.textTransform = "uppercase";
h1.style.color = "white";
h1.style.backgroundColor = "teal";
h1.style.padding = "20px";

logo.addEventListener('mouseover', () => {
  body.style.backgroundColor = "#7f7f7f";
})
