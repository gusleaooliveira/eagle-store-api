const { listar, listarUm, inserir, alterar, apagar } = require('../api'),
        Categoria = require('../../model/categoria/index')

exports.listar = (req, res, next) => {
    listar(Categoria, res);
}
exports.listarUm = (req, res, next) => {
    listarUm(Categoria, res, req);
}
exports.inserir = (req, res, next) => {
    inserir(Categoria, res, req);
}
exports.alterar = (req, res, next) => {
    alterar(Categoria, res, req);
} 
exports.apagar = (req, res, next) => {
    apagar(Categoria, res, req);
}