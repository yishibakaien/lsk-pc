// COOKIE
export const cookie = (() => {
  return {
    // 设置cookie
    //   cookie.set('x-token', data, 7, '/');
    set: (sKey, sValue, vEnd, sPath, sDomain, bSecure) => {
      if (!sKey || /^(?:expires|max\/-age|path|domain|secure)$/i.test(sKey)) {
        return false
      }
      var sExpires = ''
      if (vEnd) {
        var exp = new Date()
        exp.setTime(exp.getTime() + vEnd * 24 * 60 * 60 * 1000)
        sExpires = '; expires=' + exp.toGMTString()
      }
      document.cookie = encodeURIComponent(sKey) + '=' + encodeURIComponent(sValue) + sExpires + (sDomain
        ? '; domain=' + sDomain
        : '') + (sPath
        ? '; path=' + sPath
        : '') + (bSecure
        ? '; secure'
        : '')
      return true
    },
    // 删除cookie
    del: (sKey, sPath, sDomain) => {
      if (!sKey) {
        return false
      }
      document.cookie = encodeURIComponent(sKey) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' + (sDomain
        ? '; domain=' + sDomain
        : '') + (sPath
        ? '; path=' + sPath
        : '')
      return true
    },
    // 获取cookie
    get: (sKey) => {
      return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[\\-\\.\\+\\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null
    }
  }
})()
