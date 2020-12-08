const   mongoose = require('mongoose'),
        Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

let Log = new Schema({
    data: { type: String, default: `Data: ${Date.now}` },
    hora: { type: String, default: `Data: ${Date.now}` },
    metodo: { type: String, default: "GET" },
    url: { type: String, default: "/" },
    corpo: { type: Array },
    cookieSemSeguranca: { type: Array },
    cookieComSeguranca: { type: Array },
    mensagem: { type: String, required: true },
    dataRequisicaoDB: { type: Date, default: Date.now }
}, {
    versionKey: false
});

module.exports = mongoose.model('Log', Log);
