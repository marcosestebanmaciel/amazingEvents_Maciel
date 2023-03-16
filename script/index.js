const contenedor = document.getElementById('divElementos')
const contenedorCheck = document.getElementById('checkContainer')
const input = document.querySelector('input')
const eventos = data.events 
console.log(eventos);

input.addEventListener('input',dobleFiltro)

contenedorCheck.addEventListener('change',dobleFiltro)


function dobleFiltro(){
    let primerFiltro = filtrarPorTexto(eventos,input.value)
    let segundoFiltro = filtrarPorCategoria(primerFiltro)
    pintarEventos(segundoFiltro)
}


pintarEventos(eventos)
crearCheckBoxes(eventos)

function crearCheckBoxes(array){
  let arrayCategorias = array.map(eventos => eventos.category)
  /* console.log(arrayCountrys) */
  let setCategoria = new Set(arrayCategorias)
  /* console.log(setCountry) */
  let arrayChecks = Array.from(setCategoria)
  /* console.log(arrayChecks) */
  let checkboxes = ''
  arrayChecks.forEach(category => {
      checkboxes += `<div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" role="switch" id="${category}" value="${category}">
      <label class="form-check-label" for="${category}">${category}</label>
    </div>`
  })
  contenedorCheck.innerHTML = checkboxes
}

function pintarEventos(array){
  if(array.length == 0){
      contenedor.innerHTML = `<h2 class="display-1 fw-bolder">Sorry, there were no matches</h2>`
      return
  }
  let tarjetas = ''
  array.forEach(eventos => {
      tarjetas += `<div class="card" style="width: 18rem;">
                    <img src="${eventos.image}" class="card-img-top h-50" alt="${eventos.name}">
                    <div class="card-body">
                      <h5 class="card-title">${eventos.name}</h5>
                      <p class="card-text">${eventos.description}</p>
                      <a href="./page/details.html?id=${eventos.id}" class="btn btn-primary">Details</a>
                    </div>
                  </div>`
  })
  contenedor.innerHTML = tarjetas
}

function filtrarPorTexto(array,texto){
  let arrayFiltrado = array.filter(elementos => elementos.name.toLowerCase().includes(texto.toLowerCase()))
  return arrayFiltrado
}

function filtrarPorCategoria(array){
  let checkboxes = document.querySelectorAll("input[type='checkbox']")
  console.log(checkboxes);
  let arrayChecks = Array.from(checkboxes)
  let arrayChecksChecked = arrayChecks.filter(check => check.checked)
  console.log(arrayChecksChecked);
  let arrayChecksCheckedValues = arrayChecksChecked.map(checkChecked => checkChecked.value)
  console.log(arrayChecksCheckedValues);
  let arrayFiltrado = array.filter(elementos => arrayChecksCheckedValues.includes(elementos.category))
  console.log(arrayFiltrado);
  if(arrayChecksChecked.length > 0){
      return arrayFiltrado
  }
  return array
}















/*const divElementos = document.getElementById ('elementos')

let tarjetas = '' 

for (evento of data.events){
    tarjetas += `<div class="card" style="width: 18rem;">
                    <img src="${evento.image}" class="card-img-top h-50" alt="music_concert">
                    <div class="card-body">
                        <h5 class="card-title">${evento.name}</h5>
                        <p class="card-text">${evento.description}</p>
                        <a href="./page/details.html" class="btn btn-primary">Details</a>
                     </div>
                </div>`
}

console.log (tarjetas);

divElementos.innerHTML = tarjetas
//console.log (data.events)*/
        
        
        
        
        
        
        /*<div class="card" style="width: 18rem;">
          <img src="./assets/images/,music_concert.jpg" class="card-img-top h-50" alt="music_concert">
          <div class="card-body">
            <h5 class="card-title">Music Concert</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="./page/details.html" class="btn btn-primary">Details</a>
          </div>
        </div>*/