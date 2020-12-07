const   controller = require('../../controller/categoria/api'),
        router = require('express').Router();

router.get('/', controller.listar);
router.get('/:id', controller.listarUm);
router.post('/', controller.inserir);
router.put('/:id', controller.alterar);
router.delete('/:id', controller.apagar)

module.exports = router;