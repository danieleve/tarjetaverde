const mongoose = require('mongoose');
const { Schema } = mongoose;

const rolSchema = new Schema({
    idRol: { type: String, required: false},
    tiporol: { type: String, required: false },
    descripcion: { type: String, required: false }
   
   
});

module.exports = mongoose.model('Rol', rolSchema);