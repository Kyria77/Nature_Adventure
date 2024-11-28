
const containerViajes = document.getElementById("containerViajes");

function realizarFetch(url){
    return fetch(url)
        .then(respuesta => {
            if(!respuesta.ok){
                throw new Error("Error en la solicitud: " + respuesta.statusText)
            }
            return respuesta.json();
        })

        .then(data =>{
            if(Array.isArray(data.viajes)){
                data.viajes.forEach(viaje =>{
                    containerViajes.innerHTML += 
                    `
                    <div class="contenedor-viajes">
                        <h3>${viaje.titulo}</h3>
                        <img class="imagen_viajes" src=${viaje.ruta_img} alt=${viaje.alt_img} width=${viaje.width_img} height=${viaje.height}>
                        <p class="descripcion_viajes">${viaje.descripcion}</p>
                        <a href="#" ><input type="button" class="disponibilidad_viajes" value="Ver disponibilidad"></a>
                    </div>
                    `
                });
            }else{
                throw new Error("Formato inesperado de JSON");
            }
        })

        .catch(error =>{
            containerViajes.innerHTML += '<p>Error (fetch): ' + error + '</p>';
            throw new Error("Error de red: " + error);
        });
}

realizarFetch("../assets/data/viajes.json");
