// Lista de empleados y coordinadores
var users = [
    { role: "employee", username: "empleado1@gmail.com", password: "123456" },
    { role: "employee", username: "empleado2@gmail.com", password: "abcdef" },
    { role: "coordinator", username: "coordinador1@gmail.com", password: "password1" },
    { role: "coordinator", username: "coordinador2@gmail.com", password: "password2" }
  ];
  
  // Obtener los elementos del formulario
  var emailInput = document.getElementById("form3Example3");
  var passwordInput = document.getElementById("form3Example4");
  var loginButton = document.querySelector("button.btn-primary");
  
  // Agregar evento al botón de inicio de sesión
  loginButton.addEventListener("click", function() {
    var email = emailInput.value;
    var password = passwordInput.value;
    var role = document.querySelector("input[name='userRole']:checked").value;
  
    // Verificar las credenciales
    var isValidUser = users.some(function(user) {
      return user.role === role && user.username === email && user.password === password;
    });
  
    if (isValidUser) {
      
  
      // Obtener el valor del rol seleccionado
      var selectedRole = document.querySelector('input[name="userRole"]:checked').value;
  
      // Verificar el valor del rol y redirigir según corresponda
      if (selectedRole === 'employee') {
        // Redirigir a la página de empleado
        window.location.href = "../paginas/home_empleado.html";
      } else if (selectedRole === 'coordinator') {
        // Redirigir a la página de coordinador
        window.location.href = '../paginas/home_coordinador.html';
      } else {
        // Manejar cualquier otro caso o mostrar un mensaje de error
        console.log('Rol no válido');
      }
    } else {
      alert("Credenciales inválidas. Por favor, inténtalo de nuevo.");
    }
  });
  