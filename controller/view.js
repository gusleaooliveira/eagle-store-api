let nodemailer = require('nodemailer');

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

exports.queryInserir = (Colecao, res, req, usuario=false) => {
    if(usuario == false){
        let novo =  new Colecao(req.body);
        novo.save((erro, valores) => {
            mostrar(res, erro, valores, 'sucesso');
        });
    }
    else{
        let novoUsuario = new Colecao(req.body);
            novoUsuario.save((erro, valores) => {
                if(erro)res.send(erro)
                else {
                    let transportador = nodemailer.createTransport({
                        service: 'gmail',
                        auth: { user: process.env.EMAIL, pass: process.env.PASSWORD }
                    });
                    let mailOptions = {
                        from: process.env.EMAIL,
                        to: valores.email,
                        subject: 'Olá somos da Eagle Store!!!!!!!',
                        text: `Olá ${valores.nome}, você se increveu para usar a Eagle Store. Agora podes alterar os dados contidos na eagle store!`
                    }
                    transportador.sendMail(mailOptions, (erro, info) => {
                        if(erro)console.log(erro);
                        else console.log(info);
                    })
                    res.send(valores)
                }
            })
    }
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