const WXBizDataCrypt = require('../lib/Node/WXBizDataCrypt')
const rp = require('request-promise')
const {
  appId,
  appSecret
} = require('../config')

// AppID:
// AppSecret: 39f56668e476eea5d514315898927169
//
exports.logIn = async (ctx, next) => {
  const {
    query: {
      code
    }
  } = ctx
  const {
    session_key,
    openid
  } = await rp(`https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`)
  ctx.body = 'success'
}

exports.getUserInfo = async (ctx, next) => {
  const appId = 'wxd292348da4b04d47'

  const AppSecret = ''
  const {
    iv,
    // code,
    encryptedData
  } = ctx.params
  const pc = new WXBizDataCrypt(appId, sessionKey)

  const data = pc.decryptData(encryptedData, iv)

  console.log('解密后 data: ', data)

  ctx.body = 'hello world'
}
