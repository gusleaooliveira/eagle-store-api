const   controller = require('../../controller/log/api'),
        controllerLogin = require('../../controller/login/api'),
        router = require('express').Router();

router.get('/', controller.listar);
router.get('/:id', controller.listarUm);
router.post('/', controllerLogin.verificaJwt, controller.inserir);
router.put('/:id',  controllerLogin.verificaJwt,controller.alterar);
router.delete('/:id',  controllerLogin.verificaJwt,controller.apagar);

module.exports = router;