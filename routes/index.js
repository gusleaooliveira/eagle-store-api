const   router = require('express').Router(),
        controller = require('../controller/index');

router.get('/', controller.formInicio)
router.get('*', controller.form404)

module.exports = router