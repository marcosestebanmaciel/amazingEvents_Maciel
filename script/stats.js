import { primeraTabla, cargarTabla, segundaTabla} from "./funciones.js";

const tbody1 = document.getElementById("tbody1");
const tbody2 = document.getElementById("tbody2");
const tbody3 = document.getElementById("tbody3");

async function getEvents() {
  await fetch("../amazing.json")
    .then((response) => response.json())
    .then((data) => {
      let eventsList = data.events;
      const currentDate= data.currentDate;
      let upcomingEvents = eventsList.filter((event) => {
        return event.date > currentDate;});
      let pastEvents = data.events.filter((event) => {
        return event.date < currentDate;});
        cargarTabla(primeraTabla(eventsList), tbody1);
      segundaTabla(upcomingEvents, tbody2);
      segundaTabla(pastEvents, tbody3);
    });
}getEvents();