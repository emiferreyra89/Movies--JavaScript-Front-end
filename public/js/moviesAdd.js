const h1 = document.querySelector("h1");
const section = document.querySelector("section");
const article = document.querySelector("article");

const title = document.querySelector("#title");

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

let estadoSecreto = 0;
let teclaPress;
function tecleado(tecla) {
  switch (estadoSecreto) {
      case 0:
          if (tecla === 'S') {
              estadoSecreto = 1;
          }
          break;
      case 1:
          if (tecla === 'E') {
              estadoSecreto = 2;
          }
          break;
      case 2:
          if (tecla === 'C') {
              estadoSecreto = 3;
          }
          break;
      case 3:
          if (tecla === 'R') {
              estadoSecreto = 4;
          }
          break;
      case 4:
          if (tecla === 'E') {
              estadoSecreto = 5;
          }
          break;
      case 5:
          if (tecla === 'T') {
              estadoSecreto = 6;
          }
          break;
      case 6:
          if (tecla === 'O') {
              estadoSecreto = 0;
              alert("¡SECRETO MÁGICO!");
          }
          break;
      default:
          estadoSecreto = 0;
          break;
  }
}

title.addEventListener('keyup', (e) => {
  teclaPress = e.key.toUpperCase()
  tecleado(teclaPress)
})
