const   mongoose = require('mongoose'),
        Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

let Comentario = new Schema({
    nome: { type: String, require: true },
    email: { type: String, require: true },
    comentario: String,
    classificacao: Number,
    aplicativo: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Aplicativo'}
    ]
},{
    versionKey: false
});

module.exports = mongoose.model('Comentario', Comentario);