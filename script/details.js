const detallesCont = document.getElementById('elementosD')

async function getDetails(){
    await fetch('../amazing.json')
        .then(response => response.json())
        .then(data =>{
            let eventList = data.events
            console.log(eventList);
            let params = location.search
            
            let  querystring = new URLSearchParams(params)
            let id = querystring.get('id')
            console.log(id);
            let detail = eventList.find(eventos => eventos.id == id)
            console.log(detail);
            pintarTarjetaDetails(detail, detallesCont)
    }).catch(error => console.error(error))
 }getDetails()

 /*async function iniciar(){

 }*/

function pintarTarjetaDetails(dato, container) {
    console.log(dato);
    
    container.innerHTML = `<div class="card" style="width: 18rem;">
                                <img src="${dato.image}" class="card-img-top" alt="${dato.name}">
                                <div class="card-body">
                                    <h5 class="card-title">${dato.name}</h5>
                                    <ul>
                                        <li>Name: ${dato.name}</li>
                                        <li>Date: ${dato.date}</li>
                                        <li>Description: ${dato.description}</li>
                                        <li>Category: ${dato.category}</li>
                                        <li>Place: ${dato.place}</li>
                                        <li>Capacity: ${dato.capacity}</li>
                                        <li>Assistance:${dato.assistance}</li>
                                        <li>Price: ${dato.price} USD</li>
                                    </ul> 
                                </div>
                            </div>`
}




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