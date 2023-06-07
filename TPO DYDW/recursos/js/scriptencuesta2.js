document.addEventListener("DOMContentLoaded", function() {
    var encuestaForm = document.getElementById("encuestaForm");
  
    encuestaForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Aquí realizarías el envío de la encuesta y obtendrías la respuesta
  
      // Supongamos que la encuesta se envió exitosamente y se obtuvo una respuesta con el estado
      var encuestaCompletada = true;
  
      if (encuestaCompletada) {
        // Redirigir al usuario al "home_empleado.html"
        window.location.href = "home_empleado.html";
      }
    });
  });
  