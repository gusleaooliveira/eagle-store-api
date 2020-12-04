const   mongoose = require('mongoose'),
        Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

let Tipo = new Schema({
    tipo: { type: String, default: ['Administrador', 'Usuário Padrão', 'Desenvolvedor'] },
    valor: { type: Number, default: 0 }
}, {
    versionKey: false
});

module.exports = mongoose.model('Tipo', Tipo);