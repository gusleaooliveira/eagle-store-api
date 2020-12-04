const { renderizarFormSimples, renderizarFormComplexo, renderizarFormListarUm, queryInserir, queryAlterar, queryApagar } = require('../view'),
        Categoria = require('../../model/categoria/index');

exports.formCadastrar = (req, res, next) => {
    renderizarFormSimples(res, 'categoria/cadastrar');
}
exports.formAlterar = (req, res, next) => {
    renderizarFormComplexo(Categoria, res, 'categoria/alterar');
}
exports.formApagar = (req, res, next) => {
    renderizarFormComplexo(Categoria, res, 'categoria/apagar');
}
exports.formListar = (req, res, next) => {
    renderizarFormComplexo(Categoria, res, 'categoria/listar');
}
exports.formListarUm = (req, res, next) => {
    renderizarFormListarUm(Categoria, res, req, 'categoria/listarUm');
}
exports.queryInserir = (req, res, next) => {
    queryInserir(Categoria, res, req);
}
exports.queryAlterar = (req, res, next) => {
    queryAlterar(Categoria, res, req);
}
exports.queryApagar = (req, res, next) => {
    queryApagar(Categoria, res, req)
}