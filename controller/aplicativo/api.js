const { listar, listarUm, inserir, alterar, apagar, queryPesquisarDestaque, queryPesquisarDestaques, queryPesquisarCategoria, queryPesquisarNome } = require('../api'),
        Aplicativo = require('../../model/aplicativo/index');

exports.listar = (req, res, next) => {
    listar(Aplicativo, res);
}
exports.listarUm = (req, res, next) => {
    listarUm(Aplicativo, res, req, true);
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
exports.queryPesquisar = (req, res, next) => {
    queryPesquisarDestaque(Aplicativo, res);
}
exports.queryPesquisarQuantidade = (req, res, next) => {
    queryPesquisarDestaques(Aplicativo, res, req);
}
exports.queryPesquisarCategoria = (req, res, next) =>{
    queryPesquisarCategoria(Aplicativo, res, req);
}
exports.queryPesquisarNome = (req, res, next) => {
    queryPesquisarNome(Aplicativo, res, req)
}