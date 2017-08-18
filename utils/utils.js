import CONST from '~/utils/consts/consts';
// ===========
// **数组归类**
// ===========
export const classifyArr = ($arr, $typeKey) => {
  let result = []
  result = $arr.reduce((prev, item) => {
    prev[item[$typeKey]]
      ? prev[item[$typeKey]].push(item)
      : prev[item[$typeKey]] = [item]
    return prev
  }, {})
  return result
}
// ==================
// **通过path获取name*
// ==================
export const getNameByRoute = (map, route) => {
  let name = ''
  Object.keys(map).some(path => {
    if (map[path].route === route) {
      name = map[path]
      return true
    }
  })
  return name
}
// ==================
// ** 合成&下载图片 **
// ==================
// * 1.获取mimeType
export const _fixType = (type) => {
  type = type.toLowerCase().replace(/jpg/i, 'jpeg')
  var r = type.match(/png|jpeg|bmp|gif/)[0]
  return 'image/' + r
}
// * 2.在本地进行文件保存
export const saveFile = (data, filename) => {
  var savelink = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
  savelink.href = data
  savelink.download = filename
  var event = document.createEvent('MouseEvents')
  event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
  savelink.dispatchEvent(event)
}
// ==================
// 图片与canvas互相转换
// ==================
export const convertImgToBase64 = (url, callback, error, outputFormat) => {
  var canvas = document.createElement('canvas')
  var ctx = canvas.getContext('2d')
  function requestImg (src) {
    var img = new Image()
    img.crossOrigin = 'Anonymous'
    var timeStamp = +new Date()
    img.src = `${src}?r=${timeStamp}`
    return img
  }
  var imgObj = requestImg(url)
  imgObj.onload = () => {
    canvas.height = imgObj.height
    canvas.width = imgObj.width
    ctx.drawImage(imgObj, 0, 0)
    var dataURL = canvas.toDataURL(outputFormat || 'image/png')
    callback.call(this, dataURL)
    canvas = null
  }
}
// ==================
// ***   AES加密   ***
// ==================
export const Encrypt = (word) => {
  let CryptoJS = require('crypto-js')
  var key = CryptoJS.enc.Utf8.parse(CONST.ECB_KEY)
  var srcs = CryptoJS.enc.Utf8.parse(word)
  var encrypted = CryptoJS.AES.encrypt(srcs, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })
  return encrypted.toString()
};