const   mongoose = require('mongoose'),
        Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

let Categoria =  new Schema({
    categoria: { type: String, required: true },
    icone: { type: String, default: "faTag" }
}, {
    versionKey: false
});

module.exports = mongoose.model('Categoria', Categoria);