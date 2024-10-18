const apiUrlCharacters = "https://dragonball-api.com/api/characters?limit=58";

async function getCharacters(apiUrl) {
  try {
    // Realizar la solicitud
    const response = await fetch(apiUrlCharacters);

    // Verificar si la respuesta fue exitosa
    if (!response.ok) {
      throw new Error("Error en la solicitud: " + response.status);
    }

    // Convertir la respuesta a JSON
    const datos = await response.json();
    let characters = datos.items;

    // Devolver los datos obtenidos
    return characters;
  } catch (error) {
    console.error("Hubo un problema al obtener los datos:", error);
  }
}

let container = document.getElementById("container-characters");

getCharacters().then((characters) => {
  characters.forEach((element) => {
    container.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${element.image}" class="card-img-top" alt="imagen de un personaje">
                <div class="card-body">
                    <h5 class="text-primary card-title">${element.name}</h5>
                </div>

                <ul class="list-group list-group-flush">
                    <li class="list-group-item"> <strong>Race:</strong> ${element.race}</li>
                    <li class="list-group-item"><strong>Base Ki:</strong> ${element.ki}</li>
                    <li class="list-group-item"><strong>Max Ki:</strong> ${element.maxKi}</li>
                    <li class="list-group-item"><strong>Afilliation:</strong> ${element.affiliation}</li>
                </ul>
            </div>
             `
         });
});
