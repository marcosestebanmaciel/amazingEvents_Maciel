import {data} from './amazing.js'
import {crearCheckBoxes, pintarTarjetasFilt, eventos} from './funciones.js'
let arrayUpcEvent = eventos.filter(elementos => elementos.date > data.currentDate)
crearCheckBoxes(arrayUpcEvent)
pintarTarjetasFilt(arrayUpcEvent)






/*const eve = data.events
const currentD = data.currentDate
const divElementos = document.get ('elementosU')
export 


let arrayUpcEvent = eve.filter(elementos => elementos.date > currentD)
console.log(arrayUpcEvent);
let tarjetas = ''
arrayUpcEvent.forEach(eventos => {
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






/*const eve = data.events
const currentD = data.currentDate

console.log(data);

function searchUpcoming(){
    let upcomingEventAux = [];
    for (let i = 0; i < eve.length; i++) {
        if(eve[i].date > currentD){
            upcomingEventAux.push(eve[i]);
        }
    }
    return upcomingEventAux;
}

const eventsUpcoming = document.getElementById('elementosU');
let fragmento = document.createDocumentFragment();
let upcomingEvents = [];

upcomingEvents = searchUpcoming();


for (let item of upcomingEvents){
    let div = document.createElement('div');
    div.className='card m-3';
    div.style='width: 18rem;';
    div.innerHTML=        
        `<img src="${item.image}" class="card-img-top card-img" alt="card-image">
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
        </div>
        <div class="card-footer d-flex gap-3">
            <p class="card-text mt-2 pt-1">Price $${item.price}.-</p>
            <a href="./details.html" class="btn btn-book pt-2">Book Now!</a>
        </div>`;
    fragmento.appendChild(div);
}

eventsUpcoming.appendChild(fragmento);*/









/*const divElementos = document.getElementById ('elementosU')

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