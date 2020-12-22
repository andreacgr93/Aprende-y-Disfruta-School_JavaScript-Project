//Array for splitting events
var futures = [];

$(document).ready(function () {
  $.ajax({
    url: "info.json"
  }).done(info=>{
    var events = info.eventos;
    var today = info.fechaActual;

    //Filling the arrays with their respective events
    for (var i = 0; i < events.length; i++){
      if (events[i].fecha > today){
        futures.push(events[i]);
      }
    };

    //Sorting events
    futures.sort((before, after)=>{
      if(before.fecha < after.fecha){
        return -1; 
      }
      if(before.fecha > after.fecha){
        return 1;
      }
      return 0;
    });
    
    //Creating content to display
    var textHTML = ""
    for (var j = 0; j < futures.length; j++){
      
      textHTML += `<span class="every-event event-list">
                    <h2><a href="../detail.html?id=${futures[j].id}">${futures[j].nombre}</a></h2>
                    <p class="date-place-color">${futures[j].fecha} - ${futures[j].lugar}</p>
                    <p>${futures[j].descripcion}</p>
                    <p class="price-color">Costo: ${futures[j].precio}</p>
                  </span>`
    };
    //Introducing content to HTML
    document.getElementById("futures").innerHTML = textHTML;
    
  });
});
