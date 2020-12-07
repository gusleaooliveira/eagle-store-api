const   controller = require('../../controller/comentario/api'),
        router = require('express').Router();

router.get('/aplicativo/:id', controller.listar);
router.get('/:id', controller.listarUm);
router.post('/', controller.inserir);
router.put('/:id', controller.alterar);
router.delete('/:id', controller.apagar);

module.exports = router;