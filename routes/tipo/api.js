const   controller = require('../../controller/tipo/api'),
        controllerLogin = require('../../controller/login/api'),
        router = require('express').Router();

router.get('/',  controllerLogin.verificaJwt,controller.listar);
router.get('/:id',  controllerLogin.verificaJwt,controller.listarUm);
router.post('/',  controllerLogin.verificaJwt, controller.inserir);
router.put('/:id',  controllerLogin.verificaJwt,controller.alterar);
router.delete('/:id',  controllerLogin.verificaJwt, controller.apagar);

module.exports = router;