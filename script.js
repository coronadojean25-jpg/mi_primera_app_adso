const formulario = document.getElementById("formularioContacto");
const respuesta = document.getElementById("respuestaFormulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
    }

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const asunto = document.getElementById("asunto").value;
    const mensajeContacto = document.getElementById("mensajeContacto").value.trim();

    if (nombre.length < 3 || mensajeContacto.length < 10) {
        respuesta.style.color = "#dc2626";
        respuesta.textContent = "Por favor, revisa los datos ingresados.";
        return;
    }

    respuesta.style.color = "#16a34a";
    respuesta.textContent =
        "¡Gracias, " + nombre + "! Tu formulario se ha validado correctamente.";

    console.log("Datos del formulario:", {
        nombre: nombre,
        correo: correo,
        asunto: asunto,
        mensaje: mensajeContacto
    });

    formulario.reset();
});

const botonMensaje = document.getElementById("botonMensaje");
const mensaje = document.getElementById("mensaje");

botonMensaje.addEventListener("click", function() {
    mensaje.textContent =
        "¡Hola, gracias por visitar mi tarjeta personal! Sigue aprendiendo y persiguiendo tus metas.";
});