const Broma = require('../models/broma.model')//importando modelo de Broma

//regresa todos las bromas
module.exports.findAllBroma = (req, res) => {
    Broma.find()
        .then(allBromas => res.json({Bromas: allBromas}))
        .catch(err => res.json({message: "Hubo un error"+ err}));
};


//regresa una broma por id
module.exports.findOneBroma = (req, res) => {
    Broma.findOne({_id: req.params.id})
        .then(broma => res.json({bromas: broma}))
        .catch(err => res.json({message: "Hubo un error"+ err}));
}


//Crea una Broma
module.exports.createBroma = (req, res) => {
    Broma.create(req.body)
        .then(broma => res.json({broma: broma}))
        .catch(err => res.json({message: "Hubo un error"+ err}));
}

//Actualizacion de Broma
module.exports.updateBroma = (req, res) => {
    Broma.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(broma => res.json({broma: broma}))
        .catch(err=> res.json({message: "Hubo un error"+ err}));
}

//Borrar Broma
module.exports.deleteBroma = (req, res) => {
    Broma.deleteOne({_id: req.params.id})
        .then(broma => res.json({result: result}))
        .catch(err=> res.json({message: "Hubo un error"+ err}));    
}