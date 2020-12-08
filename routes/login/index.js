const router = require('express').Router(),
      controller = require('../../controller/login/index');

router.post('/', controller.login)

router.get('/login', controller.formLogin);
router.get('/logout', controller.logout)



module.exports = router;