const   jwt = require('jsonwebtoken'),
        Usuario = require('../../model/usuario/index');

exports.verificaJwt = (req, res, next) => {
    let token = null;
    if(req.cookies.token){token = req.cookie.token }
    else if(req.signedCookies.token){token = req.signedCookies.token}
    else {
        if(req.headers['x-access-token']){token = req.headers['x-access-token']}
        else{res.send({erro: 'nenhum token fornecido'})}
    }
    console.log('token ====> ', token);
    jwt.verify(token, process.env.SECRET, (erro, decoded) => {
        if(erro) { res.send({erro: 'erro ao fazer login'})}
        req.userId = decoded.id;
        next()
    })
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
                        let token = jwt.sign({usuario}, process.env.SECRET, {expiresIn: 300});
                        res.cookie('token', token, {signed: true }).send({token})
                    }
                })
    }
}

exports.logout = (req, res, next) => {
    if(req.cookies || req.signedCookies){
        res.clearCookie('token').render('index');
    }
}