const rp = require('request-promise')

rp('http://www.baidu.com').then(data => {
  console.log(data)
})
