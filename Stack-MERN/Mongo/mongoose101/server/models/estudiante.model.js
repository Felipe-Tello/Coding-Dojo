const mongoose = require('mongoose')

const EsquemaEstudiante = new mongoose.Schema({
    nombre:String,
    apellido:String,
    edad:Number
});

const Estudiante = mongoose.model("estudiantes", EsquemaEstudiante);

//exportando objeto estudiante
module.exports = Estudiante;