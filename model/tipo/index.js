const   mongoose = require('mongoose'),
        Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

let Tipo = new Schema({
    tipo: String
}, {
    versionKey: false
});

module.exports = mongoose.model('Tipo', Tipo);