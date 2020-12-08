exports.renderizarFormSimples = (res, formulario) => {
    renderizar(res, formulario);
}
exports.renderizarFormComplexo = (Colecao, res, formulario) => {
    Colecao.find({}, (erro, valores) => {
        mostrar(res, erro, valores, formulario);
    })
}
exports.renderizarFormAlterar = (Colecao, Colecao2, res, formulario) => {
    Colecao.find({}, (erro, valores1) => {
        if(erro) res.render('erro', {erro});
        Colecao2.find({}, (erro, valores2) => {
            mostrarDuplo(res, erro, valores1, valores2, formulario);
        });
    });
}
exports.renderizarFormListarUm = (Colecao, res, req, formulario) => {
    if(formulario == 'aplicativo/listarUm'){
        Colecao
            .findOne({_id: req.params.id})
            .populate('categorias')
            .exec((erro, valores) => {
                mostrar(res, erro, valores, formulario)
            });
    }
    if(formulario == 'usuario/listarUm'){
        Colecao
                .findOne({_id: req.params.id})
                .populate('tipo')
                .exec((erro, valores) => {
                    mostrar(res, erro, valores, formulario)
                })
    }
    else{
        Colecao.findById(req.params.id, (erro, valores) => {
            mostrar(res, erro, valores, formulario);
        });
    }
}

exports.queryInserir = (Colecao, res, req) => {
    let novo =  new Colecao(req.body);
    novo.save((erro, valores) => {
        mostrar(res, erro, valores, 'sucesso');
    });
}
exports.queryAlterar = (Colecao,res, req) => {
    Colecao.findOneAndUpdate({_id: req.params.id}, req.body, {nre: true}, (erro, valores) => {
        mostrar(res, erro, valores, 'sucesso');
    });
}
exports.queryApagar = (Colecao, res, req) => {
    Colecao.findOneAndDelete({_id: req.params.id}, (erro, valores) => {
        mostrar(res, erro, valores, 'sucesso');
    });
}

function renderizar(res, formulario){
    res.render(formulario)
}
function mostrarDuplo(res, erro, valores1, valores2, formulario) {
    if(erro) res.render('erro', {erro});
    res.render(formulario, {valores1, valores2});
}
function mostrar(res, erro, valores, formulario) {
    if(erro) res.render('erro', {erro});
    res.render(formulario, {valores})
}