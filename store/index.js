import Vuex from 'vuex'
import user from './modules/user'
import common from './modules/common'
export default() => {
  return new Vuex.Store({modules: {
    user,
    common
  }})
}
