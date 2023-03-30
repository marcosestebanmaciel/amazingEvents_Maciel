import {pintarEventos, crearCheckBoxes, filtrarPorTexto, filtrarPorCategoria} from './funciones.js'
const contenedorCheck = document.getElementById('checkContainer')
const input = document.querySelector('input')

await fetch('../amazing.json')
  .then(response => response.json())
  .then(data =>{
    let checksList = data.events;
    crearCheckBoxes(checksList);
  });

async function getEvents() {
      await fetch("../amazing.json")
        .then((response) => response.json())
        .then((data) => {
          let eventsList = data.events;
        pintarEventos(eventsList);
          let primerFiltro = filtrarPorTexto(eventsList, input.value);
          let segundoFiltro = filtrarPorCategoria(primerFiltro);
          pintarEventos(segundoFiltro);
        })
        .catch((err) => console.error(err));
    }
getEvents()

input.addEventListener("input", getEvents);
contenedorCheck.addEventListener("change", getEvents);
                