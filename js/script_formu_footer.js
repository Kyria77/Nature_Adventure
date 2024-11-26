const formulario_footer = document.getElementById("footerForm");
const nombre_footer = document.getElementById("nombre");
const apellido_footer = document.getElementById("apellidos");
const email_footer = document.getElementById("email");
const asunto_footer = document.getElementById("asunto");
const mensaje_footer = document.getElementById("mensaje");

function setError(input){
    input.className = "footerInvalido";
}

function setSuccess(input){
    input.className = "footerValido";
}

let validacion = {
    nombre: false,
    apellido: false,
    email: false,
    asunto: false,
    mensaje: false
}

nombre_footer.addEventListener("blur", ()=>{
    const namePatter = /^[a-zA-Z\s]{2,20}$/

    if(nombre_footer.value == "" || !namePatter.exec(nombre_footer.value)){
        validacion.nombre = false;
        setError(nombre_footer);
    }else{
        validacion.nombre = true;
        setSuccess(nombre_footer);
    }
})

apellido_footer.addEventListener("blur", ()=>{
    const apellidoPatter = /^[a-zA-Z\s]{4,50}$/

    if(apellido_footer.value == "" || !apellidoPatter.exec(apellido_footer.value)){
        validacion.apellido = false;
        setError(apellido_footer);
    }else{
        validacion.apellido = true;
        setSuccess(apellido_footer);
    }
})

email_footer.addEventListener("blur", ()=>{
    const emailPatter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

    if(email_footer.value == "" || !emailPatter.exec(email_footer.value)){
        validacion.email = false;
        setError(email_footer);
    }else{
        validacion.email = true;
        setSuccess(email_footer);
    }
})
asunto_footer.addEventListener("blur", ()=>{
    const asuntoPatter = /^[a-zA-Z\s0-9]{4,100}$/

    if(asunto_footer.value == "" || !asuntoPatter.exec(asunto_footer.value)){
        validacion.asunto = false;
        setError(asunto_footer);
    }else{
        validacion.asunto = true;
        setSuccess(asunto_footer);
    }
})
mensaje_footer.addEventListener("blur", ()=>{

    if(mensaje_footer.value == ""){
        validacion.mensaje = false;
        setError(mensaje_footer);
    }else{
        validacion.mensaje = true;
        setSuccess(mensaje_footer);
    }
})

formulario_footer.addEventListener("submit", (e)=>{
    e.preventDefault();

    let errorVal = false;

    for(comprobacion in validacion){
        if(validacion[comprobacion] == false){
            errorVal = true;
            alert("Por favor, rellene correctamente todos los campos");
        }

        if(!errorVal){
            alert("Formulario enviado correctamente");
            formulario_footer.submit();
        }
    }
})

