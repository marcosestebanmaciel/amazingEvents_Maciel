/*const divElementos = document.getElementById ('elementosP')

let eventosPasados = []

for (evento of data.events){
    if (evento.date > data.currentDate) {
        eventosPasados.push(evento)
    }
}
console.log (eventosPasados)*/

const divElementos = document.getElementById ('elementosP')

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
//console.log (data.events)
        
        
        
        
        
        
        /*<div class="card" style="width: 18rem;">
          <img src="./assets/images/,music_concert.jpg" class="card-img-top h-50" alt="music_concert">
          <div class="card-body">
            <h5 class="card-title">Music Concert</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="./page/details.html" class="btn btn-primary">Details</a>
          </div>
        </div>*/