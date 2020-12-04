exports.listar = (Colecao, res) => {
    Colecao.find({}, (erro, valores) => {
        mostrar(res, erro, valores);   
    });
}
exports.listarUm = (Colecao, res, req) => {
    Colecao.findById(req.params.id, (erro, valores) => {
        mostrar(res, erro, valores);
    });
}
exports.inserir = (Colecao, res, req) => {
    let novo = new Colecao(req.body);
    novo.save((erro, valores) => {
        mostrar(res, erro, valores);
    });
}
exports.alterar = (Colecao, res, req) => {
    Colecao.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (erro, valores) => {
        mostrar(res, erro, valores);
    });
}
exports.apagar = (Colecao, res, req) => {
    Colecao.findOneAndDelete({ _id: req.params.id}, (erro, valores) => {
        mostrar(res, erro, valores);
    });
}

function mostrar(res, erro, valores) {
    if(erro) res.send(erro);
    res.send(valores); 
}