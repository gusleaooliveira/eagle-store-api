const { listar, listarUm, inserir, alterar, apagar } = require('../api'),
        Usuario = require('../../model/usuario/index');

exports.listar = (req, res, next) => {
    listar(Usuario, res);
}
exports.listarUm = (req, res, next) => {
    listarUm(Usuario, res, req);
}
exports.inserir = (req, res, next) => {
    inserir(Usuario, res, req);
}
exports.alterar = (req, res, next) => {
    alterar(Usuario, res, req);
}
exports.apagar = (req, res, next) => {
    apagar(Usuario, res, req);
}