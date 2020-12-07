const { renderizarFormSimples, renderizarFormComplexo, renderizarFormListarUm, queryInserir, queryAlterar, queryApagar } = require('../view'),
        Tipo = require('../../model/tipo/index');

exports.formCadastrar = (req, res, next) => {
    renderizarFormSimples(res, 'tipo/cadastrar');
}
exports.formAlterar = (req, res, next) => {
    renderizarFormComplexo(Tipo, res, 'tipo/alterar');
}
exports.formApagar = (req, res, next) => {
    renderizarFormComplexo(Tipo, res, 'tipo/apagar')
}
exports.formListar = (req, res, next) => {
    renderizarFormComplexo(Tipo, res, 'tipo/listar');
}
exports.formListarUm = (req, res, next) => {
    renderizarFormListarUm(Tipo, res, req, 'tipo/listarUm');
}
exports.queryInserir = (req, res, next) => {
    queryInserir(Tipo, res, req);
}
exports.queryAlterar = (req, res, next) => {
    queryAlterar(Tipo, res, req);
}
exports.queryApagar = (req, res, next) => {
    queryApagar(Tipo, res, req);
}