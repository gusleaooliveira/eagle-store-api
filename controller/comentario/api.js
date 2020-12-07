const { listar, listarUm, inserir, alterar, apagar } = require('../api'),
        Comentario = require('../../model/comentario/index');

exports.listar = (req, res, next) => {
    listar(Comentario, res, req, true);
}
exports.listarUm = (req, res, next) => {
    listarUm(Comentario, res, req);
}
exports.inserir = (req, res, next) => {
    inserir(Comentario, res, req);
}
exports.alterar = (req, res, next) => {
    alterar(Comentario, res, req);
}
exports.apagar = (req, res, next) => {
    apagar(Comentario, res, req);
}