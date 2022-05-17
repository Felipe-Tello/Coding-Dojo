const mongoose = require('mongoose');

const EsquemaProducto = new mongoose.Schema({
    nombre:String,
    precio:Number,
    descriptions:String
}, {timestamps:true, versionKey:false});

//Timestamps: creando campos de createdAt y upadateAt
//versionKey: estamos eliminando el atributo _v

const Producto = mongoose.model('productos', EsquemaProducto);
// creamos una variable donde guardar modelo que creamos mongoose.model('nombre del esquema que estamos creando', bajo que esquema se va a crear)

module.exports = Producto;