import axios from 'axios'
import cookie from 'cookie'
import cookies from 'js-cookie'
import consts from '@/utils/consts/consts'
// 是否浏览器
const inBrowser = typeof window !== 'undefined'
// 设置Header
export const setAuthHeader = req => {
  let jwt = inBrowser
    ? getTokenFromLocalStorage()
    : getTokenInSSR(req)
  if (jwt) {
    axios.defaults.headers.common[consts.TOKEN] = jwt
  } else {
    delete axios.defaults.headers.common[consts.TOKEN]
  }
}
// ==============
// **  COOKIE  **
// ==============
// 1.从cookie获取token
export const getTokenFromCookie = req => {
  const cookieStr = inBrowser
    ? document.cookie
    : req.headers.cookie
  const cookies = cookie.parse(cookieStr || '') || {}
  return cookies[consts.TOEKN]
}
// =============
// **  TOKEN  **
// =============
// 1. 设置TOKEN
export const setToken = token => {
  if (process.server) {
    return
  }
  let exp = jwtDecode(token).exp
  window.localStorage.setItem(consts.TOEKN, JSON.stringify({value: token, exp: exp}))
  cookie.set(consts.TOEKN, token, {
    expires: new Date(exp),
    domain: consts.DOMAIN
  })
  setAuthHeader()
}
// 2.把TOKEN去掉
export const unsetToken = () => {
  if (process.server) {
    return
  }
  window.localStorage.removeItem(consts.TOEKN)
  cookies.remove(consts.TOEKN)
  window.localStorage.setItem('logout', Date.now())
  setAuthHeader()
}
export const getUserFromToken = token => {
  return token
}
// ===========
// **  SSR  **
// ===========
// 1.在客户端获取token
export const getUserInSSR = req => {
  return getUserFromToken(getTokenInSSR(req))
}
// 2.在服务端里获取token
export const getTokenInSSR = req => {
  return getTokenFromCookie(req) || getTokenFromSession(req)
}
// ====================
// **  localStorage  **
// ====================
export const getUserFromLocalStorage = () => {
  return json = getTokenFromLocalStorage()
}

export const getTokenFromLocalStorage = () => {
  if (window.localStorage && window.localStorage.token) {
    let token = JSON.parse(window.localStorage.token)
    if (new Date().getTime() >= token.exp) {
      unsetToken()
      return
    }
    return token
      ? token.value
      : null
  }
}
// ====================
// **  Session  **
// ====================
export const getTokenFromSession = req => {
  if (req && req.session) {
    return req.session.jwt
  }
}
