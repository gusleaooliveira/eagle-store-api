const router = require('express').Router(),
      controller = require('../../controller/login/api');

router.post('/', controller.login)

router.get('/logout', controller.logout)



module.exports = router;