const { listar, listarUm, inserir, alterar, apagar } = require('../api'),
        Aplicativo = require('../../model/aplicativo/index');

exports.listar = (req, res, next) => {
    listar(Aplicativo, res);
}
exports.listarUm = (req, res, next) => {
    listarUm(Aplicativo, res, req);
}
exports.inserir = (req, res, next) => {
    inserir(Aplicativo, res, req);
}
exports.alterar = (req, res, next) => {
    alterar(Aplicativo, res, req);
}
exports.apagar = (req, res, next) => {
    apagar(Aplicativo, res, req);
}