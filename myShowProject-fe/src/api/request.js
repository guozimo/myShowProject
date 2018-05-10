import wepy from 'wepy'

export default async (params = {}, url, silence = false) => {
  if (!silence) {
    wepy.showLoading({
      title: '加载中',
      icon: 'loading',
      mask: true
    })
  }
  const res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: Object.assign({}, params.data, {
      timestamp: Date.now()
    }),
    header: {
      'Content-Type': 'application/json',
      'Authorization': wepy.getStorageSync('Authorization'),
      charset: 'utf-8'
    }
  })
  wepy.hideLoading()
  if (res.statusCode >= 400) {
    !silence && wepy.showToast({
      title: '加载失败, 请稍后重试',
      icon: 'loading'
    })
    return null
  } else if (res.statusCode === 401) {
    wepy.redirectTo({
      url: '/pages/homePage/homePage?status=9'
    })
  } else {
    return res.data
  }
}
