const   controller = require('../../controller/aplicativo/view'),
        router = require('express').Router();

router.get('/cadastrar', controller.formCadastrar);
router.get('/alterar', controller.formAlterar);
router.get('/apagar', controller.formApagar);
router.get('/listar', controller.formListar);
router.get('/listar/:id', controller.formListarUm);

router.post('/cadastro/', controller.queryInserir);
router.put('/:id', controller.queryAlterar);
router.delete('/:id', controller.queryApagar);

module.exports = router;