const   controller = require('../../controller/aplicativo/api'),
        controllerLogin = require('../../controller/login/api'),
        router = require('express').Router();

router.get('/pesquisar/:nome', controller.queryPesquisarNome)
router.get('/categoria/:id', controller.queryPesquisarCategoria)
router.get('/destaque/:id', controller.queryPesquisarQuantidade);
router.get('/destaque', controller.queryPesquisar);
router.get('/', controller.listar);
router.get('/:id', controller.listarUm);
router.post('/', controllerLogin.verificaJwt, controller.inserir);
router.put('/:id', controllerLogin.verificaJwt, controller.alterar);
router.delete('/:id', controllerLogin.verificaJwt, controller.apagar);

module.exports = router;