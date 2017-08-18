import { extractFromReq } from '~/utils/auth'
/*
 *
 * 根数据状态 存放全局数据和异步方法
 *
 */
// global actions
export const actions = {
  // 全局服务初始化
  async nuxtServerInit({ dispatch, commit }, { req }) {
    commit('common/SET_NAV')
    let cookie = extractFromReq(req)
    if (cookie['x-token']) {
      await dispatch('user/initAuth', cookie['x-token'])
    }
  }
}
