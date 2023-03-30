import {pintarPastEvent, crearCheckBoxes, filtrarPorCategoria, filtrarPorTexto} from './funciones.js'
const contenedorCheck = document.getElementById('checkContainer')
const input = document.querySelector('input')

fetch("../amazing.json")
    .then((response) => response.json())
    .then((data) => {
      let checksList = data.events;
    crearCheckBoxes(checksList);
  });

async function getEvents() {
  await fetch("../amazing.json")
    .then((response) => response.json())
    .then((data) => {
      let eventsList = data.events;
      let date = data.currentDate;
      pintarPastEvent(eventsList, date);
      let primerFiltro = filtrarPorTexto(eventsList, input.value);
      let segundoFiltro = filtrarPorCategoria(primerFiltro);
      pintarPastEvent(segundoFiltro, date);
    })
    .catch((err) => console.error(err));
}
getEvents();

input.addEventListener("input", getEvents);
contenedorCheck.addEventListener("change", getEvents);