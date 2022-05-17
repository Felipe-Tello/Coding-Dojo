const mongoose = require('mongoose')

const EsquemaBroma = new mongoose.Schema({
    preparacion:String,
    remate:String,
}, {timestamps:true, versionKey:false});

const Broma = mongoose.model("bromas", EsquemaBroma);

//exportando objeto Broma
module.exports = Broma;