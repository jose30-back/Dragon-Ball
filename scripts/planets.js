const apiUrlPlanets = "https://dragonball-api.com/api/planets";

async function getPlanets(apiUrl) {
    try {
      // Realizar la solicitud
      const response = await fetch(apiUrlPlanets);
  
      // Verificar si la respuesta fue exitosa
      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.status);
      }
  
      // Convertir la respuesta a JSON
      const datos = await response.json();
      let planets = datos.items;
      
      // Devolver los datos obtenidos
      return planets;
  
    } catch (error) {
      console.error("Hubo un problema al obtener los datos:", error);
    }
  }
  
  let container = document.getElementById("container-planets");
  
getPlanets().then(planets => {
    planets.forEach(element => {

        container.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${element.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">${element.description}</p>
                </div>
            </div>
            `
        })
    })
