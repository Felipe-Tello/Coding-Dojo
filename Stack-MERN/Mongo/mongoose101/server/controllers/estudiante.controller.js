const Estudiante = require('../models/estudiante.model');//importando modelo de estudiante


//regresa todos los estudiante
module.exports.findAllStudent = (req, res) => {
    Estudiante.find()
        .then(allStudent => res.json({estudiantes: allStudent}))
        .catch(err => res.json({message: "Hubo un error"+ err}));
};


//regresa un estudiante por id
module.exports.findOneStudent = (req, res) => {
    Estudiante.findOne({_id: req.params.id})
        .then(student => res.json({estudiantes: student}))
        .catch(err => res.json({message: "Hubo un error"+ err}));
}


//Crea un estudiante
module.exports.createStudent = (req, res) => {
    Estudiante.create(req.body)
        .then(student => res.json({estudiante: student}))
        .catch(err => res.json({message: "Hubo un error"+ err}));
}

//Actualizacion de estudiante
module.exports.updateStudent = (req, res) => {
    Estudiante.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(student => res.json({estudiante: student}))
        .catch(err=> res.json({message: "Hubo un error"+ err}));
}

//Borrar Usuario

module.exports.deleteStudent = (req, res) => {
    Estudiante.deleteOne({_id: req.params.id})
        .then(student => res.json({result: result}))
        .catch(err=> res.json({message: "Hubo un error"+ err}));    
}