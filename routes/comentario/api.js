const   controller = require('../../controller/comentario/api'),
        controllerLogin = require('../../controller/login/api'),
        router = require('express').Router();

router.get('/aplicativo/:id', controller.listar);
router.get('/:id', controller.listarUm);
router.post('/',  controllerLogin.verificaJwt, controller.inserir);
router.put('/:id', controllerLogin.verificaJwt, controller.alterar);
router.delete('/:id', controllerLogin.verificaJwt, controller.apagar);

module.exports = router;