const jwt = require('jsonwebtoken'),
      Usuario = require('../../model/usuario/index');
      
exports.formLogin = (req, res, next) => {
    res.render('login/login')
}

exports.verificaJwt = (req, res, next) => {
    let token = null;
    if(req.cookies.token){token = req.cookie.token }
    else if(req.signedCookies.token){token = req.signedCookies.token}
    else {
        if(req.headers['x-access-token']){token = req.headers['x-access-token']}
        else{res.render('erro', {erro: 'nenhum token fornecido'})}
    }
    console.log('token ====> ', token);
    jwt.verify(token, process.env.SECRET, (erro, decoded) => {
        if(erro) { res.render('erro', {erro: 'erro ao fazer login'})}
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
                    if(erro)res.render('erro', {erro})
                    if(usuario == null)res.render('erro', {erro: 'Nenhum usuário encontrado!'})
                    else {
                        console.log(erro, usuario);
                        if(usuario.tipo[0]._id == "5fce8224cedc06a05dcdd6d2"){
                            let token = jwt.sign({usuario}, process.env.SECRET, {expiresIn: 300000});
                            res.cookie('token', token, {signed: true }).redirect('aplicativo/listar')
                        }
                        else{
                            res.render('erro', {erro: 'Faça login com um Administrador'})
                        }
                    }
                })
    }
}

exports.logout = (req, res, next) => {
    if(req.cookies || req.signedCookies){
        res.clearCookie('token').redirect('aplicativo/listar');
    }
}