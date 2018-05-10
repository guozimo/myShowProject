const router = require('koa-router')()
const user = require('../../controller/user')

router.get('/logIn', user.logIn)
router.get('/getUserInfo', user.getUserInfo)

module.exports = router
