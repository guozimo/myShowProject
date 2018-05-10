const router = require('koa-router')()
const user = require('./user')

router.prefix('/api')

router.use('/user', user.routes(), user.allowedMethods())

module.exports = router
