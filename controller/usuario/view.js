const { renderizarFormComplexo, renderizarFormListarUm, renderizarFormAlterar, queryInserir, queryApagar, queryAlterar } = require('../view'),
        Usuario = require('../../model/usuario/index'),
        Tipo = require('../../model/tipo/index');

exports.formCadastrar = (req, res, next) => {
    renderizarFormComplexo(Tipo, res, 'usuario/cadastrar');
}
exports.formAlterar = (req, res, next) => {
    renderizarFormAlterar(Usuario, Tipo, res, 'usuario/alterar');
}
exports.formApagar = (req, res, next) => {
    renderizarFormComplexo(Usuario, res, 'usuario/apagar');
}
exports.formListar = (req, res, next) => {
    renderizarFormComplexo(Usuario, res, 'usuario/listar');
}
exports.formListarUm = (req, res, next) => {
    renderizarFormListarUm(Usuario, res, req, 'usuario/listarUm');
}
exports.queryInserir = (req, res, next) => {
    queryInserir(Usuario, res, req, true);
}
exports.queryAlterar = (req, res, next) => {
    queryAlterar(Usuario, res, req);
}
exports.queryApagar = (req, res, next) => {
    queryApagar(Usuario,res, req);
}