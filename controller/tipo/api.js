const { listar, listarUm, inserir, alterar, apagar } = require('../api'),
        Tipo = require('../../model/tipo/index');

exports.listar = (req, res, next) => {
    listar(Tipo, res);
}
exports.listarUm = (req, res, next) => {
    listarUm(Tipo, res, req);
}
exports.inserir = (req, res, next) => {
    inserir(Tipo, res, req);
}
exports.alterar = (req, res, next) => {
    alterar(Tipo, res, req);
}
exports.apagar = (req, res, next) => {
    apagar(Tipo, res, req);
}