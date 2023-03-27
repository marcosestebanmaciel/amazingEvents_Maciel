import {crearCheckBoxes, pintarTarjetasFilt, dobleFiltro} from './funciones.js'

async function getEvent(){
  await fetch('../amazing.json')
  .then(response => response.json())
  .then(data =>{
    let arrayPastEvent = data.events.filter(elementos => elementos.date < data.currentDate)
    console.log(arrayPastEvent)
    pintarTarjetasFilt(arrayPastEvent)
    crearCheckBoxes(arrayPastEvent)
    dobleFiltro(arrayPastEvent)
  }).catch(error => console.error(error))
}getEvent()







//crearCheckBoxes(arrayPastEvent)
//pintarTarjetasFilt(arrayPastEvent)



/*import {data} from './amazing.js'
const eve = data.events
const currentD = data.currentDate
const divElementos = document.getElementById ('elementosP')


let arrayPastEvent = eve.filter(elementos => elementos.date < currentD)
//console.log(arrayPastEvent);
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
})
divElementos.innerHTML = tarjetas*/

//console.log(data);

/*function searchPast(){
    let pastEventAux = [];
    for (let i = 0; i < eve.length; i++) {
        if(eve[i].date < currentD){
            pastEventAux.push(eve[i]);
        }
    }
    return pastEventAux;
}*/ 



//function filtrarDate(array){

 /* let arrayChecksCheckedValues = arrayChecksChecked.map(checkChecked => checkChecked.value)
  console.log(arrayChecksCheckedValues);
  let arrayFiltrado = array.filter(elementos => arrayChecksCheckedValues.includes(elementos.category))
  console.log(arrayFiltrado);
  if(arrayChecksChecked.length > 0){
      return arrayFiltrado
  }
  return array
}*/

/*const eventsPast = document.getElementById('elementosP');
let fragmento = document.createDocumentFragment();
let pastEvents = [];

pastEvents = searchPast();*/

/*function pintarEventos(arrayPastEvent){
  if(arrayPastEvent.length == 0){
      contenedor.innerHTML = `<h2 class="display-1 fw-bolder">Sorry, there were no matches</h2>`
      return
  }
  let tarjetas = ''
  arrayPastEvent.forEach(eventos => {
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
}*/


/*for (let elementos of pastEvents){
    let div = document.createElement('div');
    div.innerHTML= 
    `<div class="card" style="width: 18rem;">
      <img src="${elementos.image}" class="card-img-top h-50" alt="${elementos.name}">
      <div class="card-body">
        <h5 class="card-title">${elementos.name}</h5>
        <p class="card-text">${elementos.description}</p>
        <a href="./page/details.html?id=${elementos.id}" class="btn btn-primary">Details</a>
      </div>
    </div>`       
        
    fragmento.appendChild(div);
}

eventsPast.appendChild(fragmento);*/



/*`<img src="${item.image}" class="card-img-top card-img" alt="card-image">
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
        </div>
        <div class="card-footer d-flex gap-3">
            <p class="card-text mt-2 pt-1">Price $${item.price}.-</p>
            <a href="./pages/details.html" class="btn btn-book pt-2">Book Now!</a>
        </div>`;*/

/*const divElementos = document.getElementById ('elementosP')

let eventosPasados = []

for (evento of data.events){
    if (evento.date > data.currentDate) {
        eventosPasados.push(evento)
    }
}
console.log (eventosPasados)*/

/*const divElementos = document.getElementById ('elementosP')

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

divElementos.innerHTML = tarjetas*/
//console.log (data.events)
        
        
        
        
        
        
        /*<div class="card" style="width: 18rem;">
          <img src="./assets/images/,music_concert.jpg" class="card-img-top h-50" alt="music_concert">
          <div class="card-body">
            <h5 class="card-title">Music Concert</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="./page/details.html" class="btn btn-primary">Details</a>
          </div>
        </div>*/