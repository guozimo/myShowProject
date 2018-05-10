// 判定现在的环境
const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'

const urls = {
  // 测试环境接口地址
  dev: 'http://localhost:3000/api',
  // 生产环境接口地址
  prod: 'production'
}

export const baseUrl = urls[env]
