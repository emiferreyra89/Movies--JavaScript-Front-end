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
//const ulErrores = document.querySelector('.errores') // ul
//const allInputs = document.querySelectorAll('input')
const title = document.querySelector('#title')
const rating = document.querySelector('#rating')
const awards = document.querySelector('#awards')
const release_date = document.querySelector('#release_date')
const length = document.querySelector('#length')
const genre_id = document.querySelector('#genre_id')
const option = document.querySelector('option')
const divs = document.querySelectorAll('div')
// const divTitulo = document.querySelector('.title')
// const divRating = document.querySelector('.rating')
// const divPremios = document.querySelector('.awards')
// const divEstreno = document.querySelector('.release_date')
// const divDuracion = document.querySelector('.length')
// const divGenero = document.querySelector('.genre_id')
const button = document.querySelector('button')

const li = document.createElement('li') // li

const msgError = document.createElement('p') // p
msgError.style.color = 'red'
msgError.style.fontStyle = 'italic'

let errorsList = []

  title.focus()
  //console.log("..Esto es title.focus....",title);
  //console.log("..Esto es title.class....",title.classList);
  //console.log("..Esto es divTitulo....",divTitulo);
  //console.log("..Esto es divTituloClass....",divTitulo.classList);
  function addError (mensaje,element) {
    if (element.classList == undefined || element.classList == '') {
      element.classList.add('is-valid')
    } else if (mensaje == undefined || mensaje == ''){
      element.classList.replace('is-invalid','is-valid')
      li.remove()
      errorsList = []
    } else {
      msgError.innerText = mensaje
      element.classList.add('is-invalid')
      li.appendChild(msgError)
      divs.forEach(div => {
        if (div.classList.value == element.id) {
          div.appendChild(li)
        }
      });
    }
  }

  function validError (element) {
    let mensaje;

    if(element.value == ''){
      mensaje = `El campo ${element.id.toUpperCase()} no puede estar vacio`
      errorsList.push(mensaje)
      addError(mensaje, element)
    } else {
      addError(mensaje, element)
    }

    if(element.id == 'title') {
      if (element.value.length < 4) {
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
      } else if (element.value < 0 || element.value > 10) {
        mensaje = `El campo ${element.id.toUpperCase()} debe contener un valor entre 0 y 10`
        errorsList.push(mensaje)
        addError(mensaje, element)
      } else {
        addError(mensaje, element)
      }
    }

    if (element.id == 'length') {
      if (element.value < 60 || element.value > 360) {
        mensaje = `El campo ${element.id.toUpperCase()} debe contener un valor entre 60 y 360`
        errorsList.push(mensaje)
        addError(mensaje, element)
      } else {
        addError(mensaje, element)
      }
    }

    return mensaje
  }

  title.addEventListener('blur',() => {
    console.log("this is titulo...",title.value.length);
    //console.log("..Esto es divTituloClass....",divTitulo.classList);
    validError(title)
  })
  rating.addEventListener('blur',() => {
    console.log("this is rating...",rating.value.length);
    validError(rating)
  })
  awards.addEventListener('blur',() => {
    console.log("this is awards...",awards.value.length);
    validError(awards)
  })
  release_date.addEventListener('blur',() => {
    console.log("this is dia...",release_date.value.length);
    validError(release_date)
  })
  length.addEventListener('blur',() => {
    console.log("this is length...",length.value.length);
    validError(length)
  })
  genre_id.addEventListener('blur',() => {
    console.log("this is genre...",genre_id.value.length);
    validError(genre_id)
  })
  // option.addEventListener('blur',() => {
  //   console.log("this is option...",option.value.length);
  //   validError(option)
  // })
  
console.log(errorsList);

  button.addEventListener('click', (event) => {

    if (errorsList.length > 0) {
      event.preventDefault()
      alert('Todos los campos deben estar completos.....!!!!')
    } else {
      form.submit()
    }
    
  })



}