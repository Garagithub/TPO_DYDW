document.addEventListener("DOMContentLoaded", function() {
    var encuestaForm = document.getElementById("encuestaForm");
  
    encuestaForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Aquí realizarías el envío de la encuesta y obtendrías la respuesta
  
      // Supongamos que la encuesta se envió exitosamente y se obtuvo una respuesta con el estado
      var encuestaCompletada = true;
  
      if (encuestaCompletada) {
        // Obtener la lista de encuestas pendientes y completadas
        var encuestasPendientes = document.getElementById("encuestasPendientes");
        var encuestasCompletadas = document.getElementById("encuestasCompletadas");
  
        // Obtener el primer elemento de la lista de encuestas pendientes
        var encuesta = encuestasPendientes.querySelector(".card");
  
        if (encuesta) {
          // Mover la encuesta de la lista de encuestas pendientes a la lista de encuestas completadas
          encuesta.remove();
          encuestasCompletadas.appendChild(encuesta);
        }
      }
    });
  });
  