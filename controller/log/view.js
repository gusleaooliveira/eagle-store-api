const { renderizarFormSimples, renderizarFormListarUm, renderizarFormComplexo, queryInserir, queryAlterar, queryApagar } = require('../view'),
        Log = require('../../model/log/index');

exports.formCadastrar = (req, res, next) => {
    renderizarFormSimples(res, 'log/cadastrar');
}
exports.formAlterar = (req, res, next) => {
    renderizarFormComplexo(Log, res, 'log/alterar');
}
exports.formApagar = (req, res, next) => {
    renderizarFormComplexo(Log, res, 'log/apagar');
}
exports.formListar = (req, res, next) => {
    renderizarFormComplexo(Log, res, 'log/listar');
}
exports.formListarUm = (req, res, next) => {
    renderizarFormListarUm(Log, res, req, 'log/listarUm');
}
exports.queryInserir = (req, res, next) => {
    queryInserir(Log, res, req);
}
exports.queryAlterar = (req, res, next) => {
    queryAlterar(Log, res, req);
}
exports.queryApagar = (req, res, next) => {
    queryApagar(Log, res, req);
}