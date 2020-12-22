$(document).ready(function () {
  $.ajax({
    url: "info.json"
  }).done(info=>{
    var events = info.eventos;
    //A variable is created for event id
    var identifier = location.search.match(/id=(\d)*/)[1]
    var eventId = events.find(e=>{
      return e.id == identifier;
    })
    //Creating content to display
    var textHTML = `<span class="every-event" style="flex: none; width: 100%">
                      <h2>${eventId.nombre}</h2>
                      <p class="date-place-color">${eventId.fecha} - ${eventId.lugar}</p>
                      <p>${eventId.descripcion}</p>
                      <p class="price-color">Costo: ${eventId.precio}</p>
                      <p class="guests-color">Invitados: ${eventId.invitados}</p>
                    </span>`
    //Introducing content to HTML
    document.getElementById("event").innerHTML = textHTML;
  });
});
