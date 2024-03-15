const form = document.querySelector('form') 
const label = document.querySelectorAll('label') 
const input = document.querySelectorAll('input')
const option = document.querySelectorAll('option') 
const select = document.querySelector('select')
const botones = document.querySelector('#botones')

form.style.border = '1px solid grey'
form.style.margin = '30px 0px'
form.style.padding = '10px'

label.forEach(element => {
  element.style.margin = '10px 0px'
  element.style.fontSize = '24px'
});

input.forEach(element => {
  element.style.margin = '5px 0px 20px'
  element.style.fontSize = '18px'
  element.style.padding = '5px'
  element.style.borderRadius = '5px'
});

select.style.margin = '5px 0px 20px'
select.style.fontSize = '18px'
select.style.padding = '5px'
select.style.borderRadius = '5px'

option.forEach(element => {
  element.style.margin = '5px 0px 20px'
  element.style.fontSize = '18px'
  element.style.padding = '10px'
  element.style.borderRadius = '5px'
});

botones.style.display = 'flex'
botones.style.justifyContent = 'space-around'
