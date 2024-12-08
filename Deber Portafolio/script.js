document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;
    const formMessage = document.getElementById("form-message");

 
    if (nombre === "" || email === "" || mensaje === "") {
        formMessage.textContent = "Por favor, completa todos los campos.";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "¡Gracias por tu mensaje, " + nombre + "!";
        formMessage.style.color = "green";
        
  
        setTimeout(function() {
            formMessage.textContent = "";
            document.getElementById("contact-form").reset();  
        }, 3000);
    }
});
