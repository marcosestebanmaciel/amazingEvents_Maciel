import {data} from './amazing.js'

export const contenedor = document.getElementById('divElementos')
//export const contenedorP = document.getElementById('elementosP')
//export const contenedorU = document.getElementById ('elementosU')
const contenedorCheck = document.getElementById('checkContainer')
const input = document.querySelector('input')
export const eventos = data.events
const currentD = data.currentDate
export let arrayUpcEvent = eventos.filter(elementos => elementos.date > currentD)
//console.log(eventos);

input.addEventListener('input',dobleFiltro)
contenedorCheck.addEventListener('change',dobleFiltro)

export function dobleFiltro(){
    let primerFiltro = filtrarPorTexto(eventos,input.value)
    let segundoFiltro = filtrarPorCategoria(primerFiltro)
    pintarEventos(segundoFiltro)
}

export function crearCheckBoxes(array){
    let arrayCategorias = array.map(array => array.category)
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

  export function filtrarPorTexto(array,texto){
    let arrayFiltrado = array.filter(elementos => elementos.name.toLowerCase().includes(texto.toLowerCase()))
    return arrayFiltrado
  }
  
  export function filtrarPorCategoria(array){
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


  export function pintarEventos(array){
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

  export function pintarTarjetasFilt(array){
    if(array.length == 0){
        contenedor.innerHTML = `<h2 class="display-1 fw-bolder">Sorry, there were no matches</h2>`
        return
    }
    let tarjetasFilt = ''
    array.forEach(array => {
        tarjetasFilt += `<div class="card" style="width: 18rem;">
                      <img src="${array.image}" class="card-img-top h-50" alt="${array.name}">
                      <div class="card-body">
                        <h5 class="card-title">${array.name}</h5>
                        <p class="card-text">${array.description}</p>
                        <a href="./details.html?id=${array.id}" class="btn btn-primary">Details</a>
                      </div>
                    </div>`
    })
    contenedor.innerHTML = tarjetasFilt
  }

  export function pintarTarjetasU(array){
    if(array.length == 0){
        contenedorU.innerHTML = `<h2 class="display-1 fw-bolder">Sorry, there were no matches</h2>`
        return
    }
    let tarjetasU = ''
    array.forEach(eventos => {
        tarjetasU += `<div class="card" style="width: 18rem;">
                      <img src="${eventos.image}" class="card-img-top h-50" alt="${eventos.name}">
                      <div class="card-body">
                        <h5 class="card-title">${eventos.name}</h5>
                        <p class="card-text">${eventos.description}</p>
                        <a href="./details.html?id=${eventos.id}" class="btn btn-primary">Details</a>
                      </div>
                    </div>`
    })
    contenedorU.innerHTML = tarjetasU
  }



    /*let arrayPastEvent = eve.filter(elementos => elementos.date < currentD)
    console.log(arrayPastEvent);
    let tarjetas = ''
    arrayPastEvent.forEach(eventos => {
    tarjetas += `<div class="card" style="width: 18rem;">
                    <img src="${eventos.image}" class="card-img-top h-50" alt="${eventos.name}">
                    <div class="card-body">
                        <h5 class="card-title">${eventos.name}</h5>
                        <p class="card-text">${eventos.description}</p>
                        <a href="./details.html?id=${eventos.id}" class="btn btn-primary">Details</a>
                    </div>
                    </div>`
    })*/