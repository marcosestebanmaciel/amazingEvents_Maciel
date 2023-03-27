async function getEvent(){
    await fetch('../amazing.json')
    .then(response => response.json())
    .then(data =>{
      let eventList = data.events
      console.log(eventList)
    }).catch(error => console.error(error))
  }getEvent()