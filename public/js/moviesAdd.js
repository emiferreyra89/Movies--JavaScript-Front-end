const h1 = document.querySelector("h1");
const section = document.querySelector("section");
const article = document.querySelector("article");

h1.innerText += "agregar peliculas";
h1.style.textTransform = "uppercase";
h1.classList.add("titulo");

section.classList.add("fondoTransparente");

article.classList.add("fondoCRUD");

h1.addEventListener('mouseover', () => {
  h1.style.color = 'red'
})

h1.addEventListener('mouseout', () => {
  h1.style.color = 'black'
})