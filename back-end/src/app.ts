import express from 'express';
import cors from 'cors';
import routerTemas from './routes/temas.route';  

import expressListEndpoints from 'express-list-endpoints';

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));



app.use("/temas", routerTemas);  
const endpoints = expressListEndpoints(routerTemas);
console.log( endpoints);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});


