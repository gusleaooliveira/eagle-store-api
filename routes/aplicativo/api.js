const   controller = require('../../controller/aplicativo/api'),
        router = require('express').Router();

router.get('/categoria/:id', controller.queryPesquisarCategoria)
router.get('/destaque/:id', controller.queryPesquisarQuantidade);
router.get('/destaque', controller.queryPesquisar);
router.get('/', controller.listar);
router.get('/:id', controller.listarUm);
router.post('/', controller.inserir);
router.put('/:id', controller.alterar);
router.delete('/:id', controller.apagar);

module.exports = router;