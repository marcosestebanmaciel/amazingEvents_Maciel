const contenedor = document.getElementById('divElementos')
const contenedorCheck = document.getElementById('checkContainer')

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

export function filtrarPorTexto(arrayEvent, texto){
  console.log(arrayEvent);
  let arrayFiltroUno = arrayEvent.filter(elementos => elementos.name.toLowerCase().includes(texto.toLowerCase()))
  console.log(arrayFiltroUno);
  return arrayFiltroUno
}
  
export function filtrarPorCategoria(array){
  let checkboxes = document.querySelectorAll("input[type='checkbox']")
  console.log(checkboxes);
  let arrayChecks = Array.from(checkboxes)
  console.log(arrayChecks);
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

export function pintarPastEvent(eventos,date){
  if(eventos.length == 0){
      contenedor.innerHTML = `<h2 class="display-1 fw-bolder">Sorry, there were no matches</h2>`
      return
  }
  let tarjetasPast = ''
  eventos.forEach((eventos)  => {
    if (eventos.date < date) {
      tarjetasPast += `<div class="card" style="width: 18rem;">
                    <img src="${eventos.image}" class="card-img-top h-50" alt="${eventos.name}">
                    <div class="card-body">
                      <h5 class="card-title">${eventos.name}</h5>
                      <p class="card-text">${eventos.description}</p>
                      <a href="./details.html?id=${eventos.id}" class="btn btn-primary">Details</a>
                    </div>
                  </div>`
    }    
  });
  contenedor.innerHTML = tarjetasPast
}

export function pintarUpcomingEvent(eventos,date){
  if(eventos.length == 0){
      contenedor.innerHTML = `<h2 class="display-1 fw-bolder">Sorry, there were no matches</h2>`
      return
  }
  let tarjetasUpc = ''
  eventos.forEach((eventos)  => {
    if (eventos.date > date) {
      tarjetasUpc += `<div class="card" style="width: 18rem;">
                    <img src="${eventos.image}" class="card-img-top h-50" alt="${eventos.name}">
                    <div class="card-body">
                      <h5 class="card-title">${eventos.name}</h5>
                      <p class="card-text">${eventos.description}</p>
                      <a href="./details.html?id=${eventos.id}" class="btn btn-primary">Details</a>
                    </div>
                  </div>`
    }    
  });
  contenedor.innerHTML = tarjetasUpc
}

export function eventMayorAsistencia(array) {
  let eventMasAttendance = "";
  let masAttendancePorcentaje = -1;
  array.forEach((event) => {
    const porcentaje =
      ((event.assistance ? event.assistance : event.estimate) /
        event.capacity) *
      100;
    if (porcentaje > masAttendancePorcentaje) {
      masAttendancePorcentaje = porcentaje;
      eventMasAttendance = event.name;
    }
  });
  return eventMasAttendance;
}

export function eventMenorAsistencia(array) {
  let eventsMenosAttendance = "";
  let menosAttendancePorcentaje = 101;
  array.forEach((evento) => {
    const porcentaje =
      ((evento.assistance ? evento.assistance : evento.estimate) /
        evento.capacity) *
      100;
    if (porcentaje < menosAttendancePorcentaje) {
      menosAttendancePorcentaje = porcentaje;
      eventsMenosAttendance = evento.name;
    }
  });
  return eventsMenosAttendance;
}

export function eventGanancias(events) {
  let ganancias = 0;
  events.forEach((event) => {
    const ganancia =
      event.price * (event.assistance ? event.assistance : event.estimate);
    ganancias += ganancia;
  });
  return ganancias;
}


export function porcentajeAssistance (events) {
  let totalAssistance = events.reduce((total, event) => {
    return total + (event.assistance ? event.assistance : event.estimate);
  }, 0);
  let capacidad = events.reduce((capacit, event) => {
    return capacit + event.capacity;
  }, 0);
  return ((totalAssistance / capacidad) * 100).toFixed(2);
}

export function crearTabla(category,revenues,attendancePercentage,container) {
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${category}</td>
                  <td class="text-end">$${revenues}</td>
                  <td class="text-end">${attendancePercentage}%</td>`;
  container.appendChild(tr);
}


export function primeraTabla(array) {
  let aMayorAsistencia = eventMayorAsistencia(array);
  let aMenorAsistencia = eventMenorAsistencia(array);
  let mayorCapacidad = array.reduce((prevEvent, actualEvent) => {
    return (prevEvent.capacity > actualEvent.capacity) ? prevEvent : actualEvent;
}).name;

  let resultado = {
    eventConMayorAsistencia: aMayorAsistencia,
    eventConMenorAsistencia: aMenorAsistencia,
    eventMayorCapacidad: mayorCapacidad,
  };
  return resultado;
}

export function cargarTabla(datos, container) {
  let tr = document.createElement("tr");
  for (let indice in datos) {
    let td = document.createElement("td");
    td.innerText = datos[indice];
    tr.appendChild(td);
  }
  container.appendChild(tr);
}

export function extraerCategorias(array) {
  return [
    ...new Set(
      array
        .map((item) => item.category)
        .flat()
        .map((item) => item.toLowerCase())
    ),
  ];
}

export function segundaTabla(array, container) {
  const totCategorias = {};
  array.forEach((event) => {
      if (!totCategorias[event.category]) {
      totCategorias[event.category] = [];
      }
      totCategorias[event.category].push(event);
  });

  for (const category in totCategorias) {
      let events = totCategorias[category];
      let revenues = eventGanancias(events);
      let attendancePercentage = porcentajeAssistance(events);
      crearTabla(category,revenues,attendancePercentage,container);
  }
}