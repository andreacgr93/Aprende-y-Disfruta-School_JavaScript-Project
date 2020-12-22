//Arrays for splitting events
var past = [];
var futures = [];

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
      else{
        futures.push(events[i]);
      }
    };

    //Sorting past events
    past.sort((before, after)=>{
      if(before.fecha < after.fecha){
        return 1; 
      }
      if(before.fecha > after.fecha){
        return -1;
      }
      return 0;
    });
    //Sorting future events
    futures.sort((before, after)=>{
      if(before.fecha < after.fecha){
        return -1; 
      }
      if(before.fecha > after.fecha){
        return 1;
      }
      return 0;
    });
    
    //Function to create content to display
    function twoEvents(array, arrayString){
      var textHTML = ""
      for (var j = 0; j < 2; j++){
              textHTML += `<span class="every-event">
                            <h2><a href="./${arrayString}.html">${array[j].nombre}</a></h2>
                            <p class="date-place-color">${array[j].fecha}</p>
                            <p>${array[j].descripcion}</p>
                          </span>`
      }
      //Introducing content to HTML
      return document.getElementById(arrayString).innerHTML = textHTML;    
    }

    //Adding the corresponding content according to the events
    twoEvents(past, "past");
    twoEvents(futures, "futures");
    
  });
});
