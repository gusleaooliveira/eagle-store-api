const { route } = require('../log/api');

const   controller = require('../../controller/usuario/api'),
        controllerLogin = require('../../controller/login/api'),
        router = require('express').Router();
        
router.get('/pesquisar',  controllerLogin.verificaJwt, controller.pesquisar)
router.get('/',  controllerLogin.verificaJwt, controller.listar);
router.get('/:id',  controllerLogin.verificaJwt, controller.listarUm);
router.post('/',  controller.inserir);
router.put('/:id',  controllerLogin.verificaJwt, controller.alterar);
router.delete('/:id',  controllerLogin.verificaJwt, controller.apagar);

module.exports = router;