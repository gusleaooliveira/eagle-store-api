let nodemailer = require('nodemailer'), 
    Log = require('../model/log/index');

exports.listar = (Colecao, res, req=null, comentario=false) => {
    if(comentario == false){
        Colecao.find({}, (erro, valores) => {
            mostrar(res, erro, valores);   
        });
    }
    if(comentario == true){
        Colecao.find({aplicativo: req.params.id},(erro, valores) =>{
            mostrar(res, erro, valores);
        })
    }
}
exports.listarUm = (Colecao, res, req, tipo=false) => {
    if(tipo==false){
        Colecao.findById({_id: req.params.id}, (erro, valores) => {
            mostrar(res, erro, valores);
        });
    }
    else{
        Colecao.findOne({_id: req.params.id})
                .populate('categorias')
                .exec((erro, valores) => {
                    mostrar(res, erro, valores)
                });
    }
}
exports.inserir = (Colecao, res, req, usuario=false) => {
    if(usuario == false){
        let novo = new Colecao(req.body);
        novo.save((erro, valores) => {
            mostrar(res, erro, valores);
        });
    }
    else {
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
                        text: `Olá ${valores.nome}, você se increveu para usar a Eagle Store. Agora podes escrever seus comentários no site!`
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
exports.queryPesquisarDestaque = (Colecao, res) => {
    Colecao.aggregate([{$sample: {size: 1}}], (erro, valores) => {
        mostrar(res, erro, valores);
    });
}

exports.queryPesquisarDestaques = (Colecao, res, req) => {
    Colecao.aggregate([{$sample: {size: parseInt(req.params.id)}}], (erro, valores) => {
        mostrar(res, erro, valores);
    });
}
exports.queryPesquisarCategoria = (Colecao, res, req) => {
    Colecao.find({categorias: req.params.id})
            .populate('categorias')
            .exec((erro, valores) => {
                mostrar(res, erro, valores)
            });
}
exports.queryPesquisarNome = (Colecao, res, req) => {
    Colecao.find({nome: { $regex: new RegExp(req.params.nome), $options: 'i' }})
            .populate('categorias')
            .exec((erro, valores) => {
                console.log('\t teste =====>',valores);
                mostrar(res, erro, valores)
            })
}

function mostrar(res, erro, valores) {
    if(erro) res.send(erro);
    res.send(valores); 
}