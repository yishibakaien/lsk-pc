// import {getUserInfo, checklimit} from '@/common/api/api'
const state = {
  // 用户信息
  userInfo: {},
  isMemeber: false
}
const mutations = {
  GET_USERINFO (state, userInfo) {
    state.userInfo = userInfo
  },
  CLEAR_USERINFO (state, userInfo) {
    state.userInfo = {}
  },
  GET_IS_MEMEBR (state, isMemeber) {
    state.isMemeber = isMemeber
  }
}
const actions = {
  // 获取企业资质信息
  async getUserInfo ({commit}) {
    // let data = await getUserInfo()
    // if (data.hasOwnProperty('data')) {
    //   commit('GET_USERINFO', data.data.data)
    // }
  },
  // 会员权限检查
  async memberChecklimit ({commit}) {
    // let data = await checklimit()
    // if (data.data.data) {
    //   commit('GET_IS_MEMEBR', data.data.data)
    // }
  }
}
const getters = {
  userInfo: (state) => state.userInfo,
  isMemeber: (state) => state.isMemeber
}
export default {
  state,
  actions,
  getters,
  mutations
}
