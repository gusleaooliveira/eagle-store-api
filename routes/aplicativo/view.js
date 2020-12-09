const   controller = require('../../controller/aplicativo/view'),
        controllerLogin = require('../../controller/login/index'),
        router = require('express').Router(),
        multer = require('multer'),
        upload = multer({dest: __dirname+'../../../uploads/imagens/'});

router.get('/cadastrar', controllerLogin.verificaJwt,  controller.formCadastrar);
router.get('/alterar',  controllerLogin.verificaJwt,controller.formAlterar);
router.get('/apagar',  controllerLogin.verificaJwt,controller.formApagar);
router.get('/listar', controllerLogin.verificaJwt, controller.formListar);
router.get('/listar/:id',  controllerLogin.verificaJwt,controller.formListarUm);

router.post('/cadastro/',  controllerLogin.verificaJwt,  upload.single('imagem'), controller.queryInserir);
router.put('/:id',  controllerLogin.verificaJwt,controller.queryAlterar);
router.delete('/:id', controllerLogin.verificaJwt, controller.queryApagar);

module.exports = router;