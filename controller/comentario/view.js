const { queryPesquisarDestaque } = require('../api');
const { renderizarFormSimples, renderizarFormComplexo, renderizarFormListarUm, queryInserir, queryAlterar, queryApagar } = require('../view'),
        Comentario = require('../../model/comentario/index');

exports.formCadastrar = (req, res, next) => {
    renderizarFormSimples(res, 'comentario/cadastrar');
}
exports.formAlterar = (req, res, next) => {
    renderizarFormComplexo(Comentario, res, 'comentario/alterar');
}
exports.formApagar = (req, res, next) => {
    renderizarFormComplexo(Comentario, res, 'comentario/apagar');
}
exports.formListar = (req, res, next) => {
    renderizarFormComplexo(Comentario, res, 'comentario/listar');
}
exports.formListarUm = (req, res, next) => {
    renderizarFormListarUm(Comentario, res, req);
}
exports.queryInserir = (req, res, next) => {
    queryInserir(Comentario, res, req);
}
exports.queryAlterar = (req, res, next) => {
    queryAlterar(Comentario, res, req);
}
exports.queryApagar = (req, res, next) =>{
    queryApagar(Comentario, res, req);
}