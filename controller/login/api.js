const   jwt = require('jsonwebtoken'),
        Usuario = require('../../model/usuario/index');

exports.verificaJwt = (req, res, next) => {
    let token = null;
    if(req.headers['x-access-token']){
        token = req.headers['x-access-token']
        jwt.verify(token, process.env.SECRET, (erro, decoded) => {
            console.log('erro=>',erro);
            if(erro) { res.send({erro: 'erro ao fazer login'})}
            req.userId = decoded.id;
            next()
        })
    }
    else{res.send({erro: 'nenhum token fornecido'})}    
}

exports.login = (req, res, next) => {
    if(req.cookie == undefined || req.signedCookie == undefined){
            Usuario
                .findOne({usuario: req.body.usuario, senha: req.body.senha})
                .populate('tipo')
                .exec((erro, usuario) =>{
                    if(erro)res.send(erro)
                    if(usuario == null)res.send({erro: 'Nenhum usuário encontrado!'})
                    else {
                        console.log(erro, usuario);
                        let token = jwt.sign({usuario}, process.env.SECRET, {expiresIn: 3000});
                        res.send({token, usuario})
                    }
                })
    }
}

exports.logout = (req, res, next) => {
    
}