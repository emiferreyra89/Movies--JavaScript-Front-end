const body = document.querySelector("body");
const main = document.querySelector("main");
const h2 = document.querySelector("h2");
const a = document.querySelector("a");
const pAll = document.querySelectorAll("p");

const logo = document.querySelector('.logoDH')
const menu = document.querySelector('#menu')

//const ingreso = prompt("Ingrese su nombre");
//const fondo = confirm("¿Desea colocar un fondo depantalla?");

// if (ingreso) {
//   h2.innerText += ` ${ingreso}`;
// } else {
//   h2.innerText += " Invitado";
// }

h2.innerText += " Invitado"
h2.style.textTransform = "uppercase";
a.style.color = "#E51B3E";

// if (fondo) {
//   body.classList.add("fondo");
// }

body.classList.add("fondo");

for (let i = 0; i < pAll.length; i++) {
  if (i % 2 == 0) {
    pAll[i].classList.add("descatadoPar");
  } else {
    pAll[i].classList.add("descatadoImpar");
  }
}

main.style.display = "block";

logo.addEventListener('click', () => {
  menu.classList.toggle('mostrar')
})

menu.addEventListener('mouseout', () => {
  menu.classList.remove('mostrar')
})
