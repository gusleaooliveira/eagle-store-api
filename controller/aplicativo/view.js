const { renderizarFormComplexo, renderizarFormAlterar, renderizarFormListarUm, queryInserir, queryAlterar, queryApagar } = require('../view'),
        Categoria = require('../../model/categoria/index'),
        Aplicativo = require('../../model/aplicativo/index');

exports.formCadastrar = (req, res, next) => {
    renderizarFormComplexo(Categoria, res, 'aplicativo/cadastrar');
}
exports.formAlterar = (req, res, next) => {
    renderizarFormAlterar(Aplicativo, Categoria, res, 'aplicativo/alterar');   
}
exports.formApagar = (req, res, next) => {
    renderizarFormComplexo(Aplicativo, res, 'aplicativo/apagar');
}
exports.formListar = (req, res, next) => {
    renderizarFormComplexo(Aplicativo, res, 'aplicativo/listar');
}
exports.formListarUm = (req, res, next) => {
    renderizarFormListarUm(Aplicativo, res, req, 'aplicativo/listarUm');
}
exports.queryInserir = (req, res, next) => {
    if(req.file){
        console.log(req.file);
    }
    queryInserir(Aplicativo, res, req);
}
exports.queryAlterar = (req, res, next) => {
    queryAlterar(Aplicativo, res, req);
}
exports.queryApagar = (req, res, next) => {
    queryApagar(Aplicativo, res, req);
}