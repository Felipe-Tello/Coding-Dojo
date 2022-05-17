const express = require('express');
const app = express();

//Inicializando DB

require("./server/config/mongoose.config"); 

//Para usar Json y obtener datos URL

app.use(express.json(), express.urlencoded({express:true}));

const misRutas = require("./server/routes/broma.routes");

misRutas(app);

//Ejecutamos server

app.listen(8000, () => console.log('servidor listo!!'));