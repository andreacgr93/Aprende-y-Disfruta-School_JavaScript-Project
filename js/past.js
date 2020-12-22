//Array for splitting events
var past = [];

$(document).ready(function () {
  $.ajax({
    url: "info.json"
  }).done(info=>{
    var events = info.eventos;
    var today = info.fechaActual;

    //Filling the arrays with their respective events
    for (var i = 0; i < events.length; i++){
      if (events[i].fecha < today){
        past.push(events[i]);
      }
    };

    //Sorting events
    past.sort((before, after)=>{
      if(before.fecha < after.fecha){
        return 1; 
      }
      if(before.fecha > after.fecha){
        return -1;
      }
      return 0;
    });
    
    //Creating content to display
    var textHTML = ""
    for (var j = 0; j < past.length; j++){
      
      textHTML += `<span class="every-event event-list">
                    <h2><a href="../detail.html?id=${past[j].id}">${past[j].nombre}</a></h2>
                    <p class="date-place-color">${past[j].fecha} - ${past[j].lugar}</p>
                    <p>${past[j].descripcion}</p>
                    <p class="price-color">Costo: ${past[j].precio}</p>
                  </span>`
    };
    //Introducing content to HTML
    document.getElementById("past").innerHTML = textHTML;
    
  });
});
