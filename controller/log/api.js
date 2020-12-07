const { listar, listarUm, inserir, alterar, apagar } = require('../api'),
        Log = require('../../model/log/index');

exports.listar = (req, res, next) => {
    listar(Log, res);
}
exports.listarUm = (req, res, next) => {
    listarUm(Log, res, req);
}
exports.inserir = (req, res, next) => {
    inserir(Log, res, req);
}
exports.alterar = (req, res, next) => {
    alterar(Log, res, req);
}
exports.apagar = (req, res, next) => {
    apagar(Log, res, req);
}
