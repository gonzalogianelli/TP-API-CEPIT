 // Llamada a tu API
    fetch('http://localhost:3000/temas')
      .then(response => response.json())
      .then(data => {
        const contenedor = document.getElementById('playlist');

        data.forEach(tema => {
          const div = document.createElement('div');
          div.innerHTML = `<div class="card" style="width: 18rem; background-color: black;"> 
         
 <img src="http://localhost:3000/${tema.imagen}" class="imagenes"alt="${tema.titulo}">
<div class="card-body">
  <h5 class="card-title">${tema.artista}</h5> 
  <p class="card-text">${tema.titulo}</p>

  <!-- Botón para abrir modal, con id dinámico -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#miModal${tema.id}">
    Play
  </button>

  <!-- Modal con id dinámico -->
  <div class="modal fade" id="miModal${tema.id}" tabindex="-1" aria-labelledby="tituloModal${tema.id}" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h5 class="modal-title" id="tituloModal${tema.id}">Play - ${tema.titulo}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
        </div>

        <div class="modal-body">
          <audio controls src="http://localhost:3000/${tema.cancion}"></audio>
        </div>

      </div>
    </div>
  </div>
</div>
         
          `;
          contenedor.appendChild(div);
        });
      })
      .catch(error => {
        console.error('Error al traer los temas:', error);
      });
 const inputBusqueda = document.getElementById('inputBusqueda');
  const btnBuscar = document.getElementById('btnBuscar');
  const contenedor = document.getElementById('playlist');

  btnBuscar.addEventListener('click', () => {
    const valor = inputBusqueda.value.trim();
    let url = '';

    if (valor !== '' && Number(valor) === Number(valor)) {
      // Buscar por ID
      url = `http://localhost:3000/temas/${valor}`;
    } else {
      // Buscar por artista (query)
      url = `http://localhost:3000/temas/query?artista=${valor}`;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => {
        contenedor.innerHTML = ''; // Limpia lo anterior

        // Si la búsqueda por ID devuelve un solo objeto, lo convertimos en array
        const temas = Array.isArray(data) ? data : [data];

        temas.forEach(tema => {
          const div = document.createElement('div');
          div.innerHTML = `<div class="card" style="width: 18rem; background-color: black;"> 
            <img src="http://localhost:3000/${tema.imagen}" class="imagenes" alt="${tema.titulo}">
            <div class="card-body">
              <h5 class="card-title">${tema.artista}</h5> 
              <p class="card-text">${tema.titulo}</p>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#miModal${tema.id}">
                Play
              </button>
              <div class="modal fade" id="miModal${tema.id}" tabindex="-1" aria-labelledby="tituloModal${tema.id}" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="tituloModal${tema.id}">Play - ${tema.titulo}</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                    </div>
                    <div class="modal-body">
                      <audio controls src="http://localhost:3000/${tema.cancion}"></audio>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `;
          contenedor.appendChild(div);
        });
      })
      .catch(err => {
        console.error(err);
        contenedor.innerHTML = '<p class="text-danger">Error al buscar.</p>';
      });
  });

      

