const   mongoose = require('mongoose'),
        Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

let Aplicativo = new Schema({
    nome: { type: String, required: true },
    slogan: String,
    versao: String,
    descricao: String,
    licenca: String,
    comandoSnap: Array,
    comandoFlatpak: String,
    icone: String,
    categorias: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' }
    ]
}, {
    versionKey: false
});


module.exports = mongoose.model('Aplicativo', Aplicativo);