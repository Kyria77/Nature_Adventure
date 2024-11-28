
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
            data.forEach(viajes =>{
                containerViajes.innerHTML += 
                `
                <div class="contenedor-viajes">
                    <h3>${viajes.titulo}</h3>
                    <img class="imagen_viajes" src=${viajes.ruta_img} alt=${viajes.alt_img} width=${viajes.width_img} height=${viajes.height}>
                    <p class="descripcion_viajes">${viajes.descripcion}</p>
                    <a href="#" ><input type="button" class="disponibilidad_viajes" value="Ver disponibilidad"></a>
                </div>
                `
            });
        })

        .catch(error =>{
            containerViajes.innerHTML += '<p>Error (fetch): ' + error + '</p>';
            throw new Error("Error de red: " + error);
        });
}

realizarFetch("../assets/data/viajes.json");
