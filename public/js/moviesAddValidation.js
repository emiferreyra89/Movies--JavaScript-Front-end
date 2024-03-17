window.onload = function(){
  let titulo = document.querySelector('.moviesAddTitulo') // h1
  let formulario = document.querySelector('#formulario'); // section
  let article = document.querySelector('article');
  titulo.innerHTML = 'AGREGAR PELÍCULA';
  titulo.classList.add('titulo');
  article.classList.add('fondoTransparente');
  formulario.classList.add('fondoCRUD');


//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    
  
const form = document.querySelector('form') // form
const ulErrores = document.querySelector('.errores') // ul
const allInputs = document.querySelectorAll('input')
const title = document.querySelector('#title')
const rating = document.querySelector('#rating')
const awards = document.querySelector('#awards')
const release_date = document.querySelector('#release_date')
const length = document.querySelector('#length')
const genre_id = document.querySelector('#genre_id')

const li = document.createElement('li') // li

const msgError = document.createElement('p') // p
msgError.classList.add('is-invalid')

const errorsList = []

  title.focus()
  console.log("..Esto es title.focus....",title);

  function addError (mensaje,element) {
    if (mensaje == undefined){
      element.classList.add('is-valid')
      li.remove()
    } else {
      msgError.innerText = mensaje
      element.classList.replace('is-valid','is-invalid')
      li.appendChild(msgError)
      ulErrores.appendChild(li)
    }
  }

  function validError (element) {
    let mensaje;

    if(element.id == 'title') {
      if(element.value == ""){
        mensaje = `El campo ${element.id.toUpperCase()} no puede estar vacio`
        errorsList.push(mensaje)
        addError(mensaje, element)
      } else if (element.value.length < 4) {
        mensaje = `El campo ${element.id.toUpperCase()} debe tener al menos 4 caracteres`
        errorsList.push(mensaje)
        addError(mensaje, element)
      } else {
        addError(mensaje, element)
      }
    }

    if (element.id == 'rating' || element.id == 'awards') {
      if(element.value == ""){
        mensaje = `El campo ${element.id.toUpperCase()} no puede estar vacio`
        errorsList.push(mensaje)
        addError(mensaje, element)
      } else if (element.value < 0 > 10) {
        mensaje = `El campo ${element.id.toUpperCase()} debe contener un valor entre 0 y 10`
        errorsList.push(mensaje)
        addError(mensaje, element)
      } else {
        addError(mensaje, element)
      }
    }
    return mensaje
  }

  title.addEventListener('blur',() => {
    validError(title)
  })
  rating.addEventListener('blur',() => {
    validError(rating)
  })
  awards.addEventListener('blur',() => {
    validError(awards)
  })
  release_date.addEventListener('blur',() => {
    validError(release_date)
  })
  length.addEventListener('blur',() => {
    validError(length)
  })
  genre_id.addEventListener('blur',() => {
    validError(genre_id)
  })
  
  form.addEventListener('submit', (event) => {

    if (errorsList.length > 0) {
      event.preventDefault()
    }
    
  })



}