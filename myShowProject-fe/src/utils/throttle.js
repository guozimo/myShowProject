/*
 * @Author: 罗圈圈
 * @Date: 2018-05-08 14:42:43
 * @Last Modified by: 罗圈圈
 * @Last Modified time: 2018-05-08 14:49:00
 */

export const throttle = function (fn, wait = 1000) {
  let _lastTime = null
  return function () {
    const _newTime = Date.now()
    if (!_lastTime || _newTime - _lastTime >= wait) {
      fn.apply(this, arguments)
    }
    _lastTime = _newTime
  }
}
