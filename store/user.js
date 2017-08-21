import { loginOut, login, getUserInfo } from '@/services/user'
import Cookie from 'js-cookie'
import axios from 'axios'
const EXPIRES = 7
const DOMAIN = ''
const PATH = '/'
const COOKIE_KEY = 'x-token'
const inBrowser = typeof window !== 'undefined'
export const state = () => {
  return {
    // 用户信息
    userInfo: null,
    accessToken: null
  }
}
export const mutations = {
  SET_USER(state, user) {
    state.userInfo = user || null
  },
  UNSET_AUTH(state) {
    state.userInfo = null
    state.accessToken = null
  },
  SET_TOKEN(state, token) {
    state.accessToken = token
  }
}
export const actions = {
  async login({ commit }, param) {
    try {
      let res = await login(param)
      Cookie.set(COOKIE_KEY, res.headers['x-token'], { domain: DOMAIN, path: PATH, expires: EXPIRES })
      commit('SET_USER', res.data.data)
      commit('SET_TOKEN', res.headers['x-token'])
    } catch (e) {
      console.log(e)
      console.log('登录失败')
    }
  },
  async loginOut({ commit }) {
    await loginOut()
    await Cookie.remove(COOKIE_KEY)
    await commit('UNSET_AUTH')
  },
  /**
   * Init auth for the request.
   */
  async initAuth({ commit }, accessToken) {
    await commit('SET_TOKEN', accessToken)
    let {data} = await getUserInfo()
    commit('SET_USER', data.data)
  }
}
export const getters = {
  isAuthenticated: (state) => !!state.userInfo,
  userInfo: (state) => state.userInfo,
  accessToken: state => state.accessToken
}
