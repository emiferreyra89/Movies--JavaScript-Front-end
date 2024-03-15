const body = document.querySelector("body");
const pAll = document.querySelectorAll('p')
const h1 = document.querySelector('h1')
const section = document.querySelector('section')
const aList = document.querySelectorAll('a')

const darkmode = prompt("¿Desea modo oscuro?");
console.log(darkmode);

if (darkmode != null) {
  body.style.backgroundColor = "#7f7f7f";
}

h1.style.margin = '20px 0px'
h1.style.textDecoration = 'underline'

pAll.forEach(element => {
  element.style.marginBottom = '10px'
  element.style.fontStyle = 'italic'
  element.style.fontWeight = 'bold'
});

section.style.margin = '20px 0px'
section.style.display = 'flex'
section.style.justifyContent = 'end'

aList.forEach(element => {
  element.style.margin = '0px 5px'
});