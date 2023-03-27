import {data} from './amazing.js'
const  queryString = location.search
const params = new URLSearchParams(queryString)
const id = params.get("id")
const evenDat = data.events
const eventDetails = evenDat.find(eventos => eventos.id == id)
const detalles = document.getElementById('elementosD')
detalles.innerHTML =  `<div class="card" style="width: 18rem;">
                            <img src="${eventDetails.image}" class="card-img-top" alt="${eventDetails.name}">
                            <div class="card-body">
                                <h5 class="card-title">${eventDetails.name}</h5>
                                <ul>
                                    <li>Name: ${eventDetails.name}</li>
                                    <li>Date: ${eventDetails.date}</li>
                                    <li>Description: ${eventDetails.description}</li>
                                    <li>Category: ${eventDetails.category}</li>
                                    <li>Place: ${eventDetails.place}</li>
                                    <li>Capacity: ${eventDetails.capacity}</li>
                                    <li>Assistance: ${eventDetails.assistance}</li>
                                    <li>Price: ${eventDetails.price} USD</li>
                                </ul> 
                            </div>
                        </div>`


/*<div class="card mb-3" style="max-width: 400px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${eventDetails.image}" class="img-fluid rounded-start" alt="${eventDetails.name}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">${eventDetails.name}</h5>
                <ul>
                    <li>Name: ${eventDetails.name}</li>
                    <li>Date: ${eventDetails.date}</li>
                    <li>Description: ${eventDetails.description}</li>
                    <li>Category: ${eventDetails.category}</li>
                    <li>Place: ${eventDetails.place}</li>
                    <li>Capacity: ${eventDetails.capacity}</li>
                    <li>Assistance: ${eventDetails.assistance}</li>
                    <li>Price: ${eventDetails.price} USD</li>
                </ul>
            </div>
        </div>
    </div>
</div>*/

/*const divElementos = document.getElementById ('elementosD')

let tarjetas = '' 

for (evento of data.events){
    tarjetas += `<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="${evento.image}" class="img-fluid rounded-start" alt="music_concert">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${evento.name}</h5>
                <ul>
                    <li>${evento.name}</li>
                    <li>${evento.date}</li>
                    <li>${evento.description}</li>
                    <li>${evento.category}</li>
                    <li>${evento.place}</li>
                    <li>${evento.capacity}</li>
                    <li>${evento.assistance}</li>
                    <li>${evento.price}</li>
                </ul>
            </div>
        </div>
    </div>
    </div>`
}

console.log (tarjetas);

divElementos.innerHTML = tarjetas*/












/*<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
    <div class="col-md-4">
        <img src="../assets/images/,music_concert.jpg" class="img-fluid rounded-start" alt="music_concert">
    </div>
    <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">Music Concert</h5>
            <ul>
                <li>Name</li>
                <li>Date</li>
                <li>Description</li>
                <li>Category</li>
                <li>Place</li>
                <li>Capacity</li>
                <li>Assistance or estimate</li>
                <li>Price</li>
            </ul>
        </div>
    </div>
</div>
</div>*/