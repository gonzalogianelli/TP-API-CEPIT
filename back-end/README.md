# API Playlist Gonzalo

---

## 1. app principal (`app.js` o `server.js`)

- Es el archivo que inicia la API y levanta el servidor en el puerto 3000.
- Importa y configura Express para manejar peticiones HTTP.
- Activa middlewares:
  - `express.json()` para entender datos JSON en las peticiones.
  - `cors()` para permitir conexiones desde otros orígenes (como tu frontend).
  - `express.static('public')` para servir archivos estáticos (imágenes, HTML, CSS) desde la carpeta `public`.
- Conecta la ruta `/temas` con el router de temas (`routerTemas`).
- Usa `express-list-endpoints` para mostrar en consola las rutas disponibles (ideal para debugging).

**Este archivo es el primero que se ejecuta cuando arrancás la API.**

---

## 2. rutas (`routes/temas.route.ts`)

- Define las rutas que el cliente puede usar para pedir datos.
- Por ejemplo:
  - `GET /temas` → trae todos los temas.
  - `GET /temas/:id` → trae un tema por ID.
  - `GET /temas/query?artista=nombre` → trae temas filtrados por artista.
- Estas rutas reciben la petición y llaman al controller correspondiente para procesarla.

**Este archivo se ejecuta cuando llega una petición al endpoint `/temas` y decide qué función del controller usar.**

---

## 3. controllers (`controllers/temas.controllers.ts`)

- Contienen la lógica que responde a las rutas.
- Reciben la petición del cliente desde la ruta, usan el servicio para buscar o filtrar datos y devuelven la respuesta.
- Manejan casos como devolver error 404 si un tema no se encuentra.
- Tienen funciones como `get()`, `getById()`, `getByQuery()`, que llaman a los métodos del servicio.

**Este código se ejecuta justo después de las rutas, procesa la petición y prepara la respuesta.**

---

## 4. servicios (`services/temas.service.ts`)

- Manejan la lectura y búsqueda de los datos en el archivo JSON `temas.json`.
- Usan `fs.readFileSync` para leer el archivo y parsear el contenido JSON.
- Métodos:
  - `get()` → trae todos los temas.
  - `getById(id)` → busca un tema por su ID.
  - `getByQuery(artista)` → filtra temas por artista (ignorando mayúsculas/minúsculas).

**Este es el último paso en la API, donde se accede a los datos reales para enviarlos.**

---

## 5. datos (`data/temas.json`)

- Archivo JSON que guarda los datos de los temas musicales.
- Usado por el servicio para devolver la info solicitada.

---

## 6. carpeta `public`

- Contiene archivos estáticos que puede necesitar el frontend o la API, como imágenes y temas.
- Gracias a `express.static('public')`, estos archivos se pueden acceder directamente desde la URL.

---

# ¿Cómo funciona la API, paso a paso?

1. El cliente (tu frontend) hace una petición HTTP, por ejemplo `GET http://localhost:3000/temas` o `GET http://localhost:3000/temas/2`.
2. El servidor arranca con `app.js`, y recibe la petición.
3. La petición pasa por el router `temas.route.ts`, que detecta qué función del controller debe ejecutar según la ruta.
4. El controller (`temas.controllers.ts`) procesa la solicitud, llama al servicio para buscar o filtrar los datos.
5. El servicio (`temas.service.ts`) lee el archivo JSON y devuelve los datos requeridos.
6. El controller devuelve esos datos al cliente en formato JSON.

---

# Links para probar la API en Thunder Client

- **GET todos los temas:**  
  `GET http://localhost:3000/temas`

- **GET tema por ID (reemplazar `:id` por número):**  
  `GET http://localhost:3000/temas/:id`  
  Ejemplo: `GET http://localhost:3000/temas/2`

- **GET temas filtrados por artista (query):**  
  `GET http://localhost:3000/temas/query?artista=Bersuit%20Vergarabat`