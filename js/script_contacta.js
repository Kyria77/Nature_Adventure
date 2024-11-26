formulario = document.getElementById("formuContacta");
nombreInput = document.getElementById("nombreContacta");
telefonoInput = document.getElementById("telefonoContacta");
emailInput = document.getElementById("emailContacta");
mensajeInput = document.getElementById("mensajeContacta");
privacidadInput = document.getElementById("privacidadContacta");

function validarNombre(){
    const nombre = nombreInput.value;
    const nombrePattern = /^[a-zA-Z\s]{3,}$/

    if(nombrePattern.test(nombre)){
        nombreInput.classList.add('valido');
        nombreInput.classList.remove('invalido');
        document.getElementById("nombreContactaError").textContent = "";
    }else{
        nombreInput.classList.add('invalido');
        nombreInput.classList.remove('valido');
        document.getElementById("nombreContactaError").textContent = "El nombre debe contener solo letras y mínimo 3 caracteres";
    }
}

function validarTelefono(){
    const telefono = telefonoInput.value;
    const telefonoPattern = /^(6|7|8|9)[0-9]{8}$/

    if(telefonoPattern.test(telefono)){
        telefonoInput.classList.add('valido');
        telefonoInput.classList.remove('invalido');
        document.getElementById("telefonoContactaError").textContent = "";
    }else{
        telefonoInput.classList.add('invalido');
        telefonoInput.classList.remove('valido');
        document.getElementById("telefonoContactaError").textContent = "El teléfono debe contener solo números y 9 caracteres";
    }
}

function validarEmail(){
    const email = emailInput.value;
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

    if(emailPattern.test(email)){
        emailInput.classList.add('valido');
        emailInput.classList.remove('invalido');
        document.getElementById("emailContactaError").textContent = "";
    }else{
        emailInput.classList.add('invalido');
        emailInput.classList.remove('valido');
        document.getElementById("emailContactaError").textContent = "Introduce un email válido";
    }
}

function validarmensaje(){
    const mensaje = mensajeInput.value;

    if(mensaje != ""){
        mensajeInput.classList.add('valido');
        mensajeInput.classList.remove('invalido');
        document.getElementById("mensajeContactaError").textContent = "";
    }else{
        mensajeInput.classList.add('invalido');
        mensajeInput.classList.remove('valido');
        document.getElementById("mensajeContactaError").textContent = "Debe escribir un mensaje";
    }
}

function validarprivacidad(){

    if(privacidadInput.checked){
        privacidadInput.classList.add('valido');
        privacidadInput.classList.remove('invalido');
        document.getElementById("privacidadContactaError").textContent = "";
    }else{
        privacidadInput.classList.add('invalido');
        privacidadInput.classList.remove('valido');
        document.getElementById("privacidadContactaError").textContent = "Debe aceptar la política de privacidad";
    }
}

function resetearFormu(){
    formulario.reset();
    nombreInput.classList.remove('valido');
    telefonoInput.classList.remove('valido');
    emailInput.classList.remove('valido');
    mensajeInput.classList.remove('valido');
    privacidadInput.classList.remove('valido');
}



nombreInput.addEventListener("input", validarNombre);
telefonoInput.addEventListener("input", validarTelefono);
emailInput.addEventListener("input", validarEmail);
mensajeInput.addEventListener("input", validarmensaje);
privacidadInput.addEventListener("input", validarprivacidad);

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    validarNombre();
    validarTelefono();
    validarEmail();
    validarmensaje();
    validarprivacidad();

    if(nombreInput.classList.contains('valido') && telefonoInput.classList.contains('valido') && emailInput.classList.contains('valido') && mensajeInput.classList.contains('valido') && privacidadInput.classList.contains('valido')){
        alert("El formulario se ha enviado correctamente");
        resetearFormu();
        formulario.submit();
    }else{
        alert("Por favor, corrija los errores en el formulario");
    }
})


let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximunAge: 0
}

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(success, error, options);
}else{
    alert("Los servicios de geolocalización no están disponibles");
}

function success(position){
    let latitud = position.coords.latitude;
    let longitud = position.coords.longitude;

    let map = L.map("mapaContacta", {
        center: [latitud, longitud],
        zoom: 14
    });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Mi openStreetMap' //Podemos poner el título que queramos
    }).addTo(map);

    L.Routing.control({
        waypoints: [
            L.latLng(40.3409576, -3.529744,493),
            L.latLng(latitud, longitud)
        ],
        language: 'es'
    }).addTo(map)
}

function error(){
    let map = L.map('mapaContacta', {
        center: [40.3409576, -3.529744,493],
        zoom: 14
    })
}