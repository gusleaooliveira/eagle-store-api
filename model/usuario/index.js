const   mongoose = require('mongoose'),
        Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

let Usuario = new Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String },
    email: { type: String },
    usuario: { type: String, require: true, unique: true },
    senha: { type:  String, require: true },
    tipo: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Tipo' }
    ]
}, {
    versionKey: false
});

module.exports = mongoose.model('Usuario', Usuario);