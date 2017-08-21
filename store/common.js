import {classifyArr} from '@/utils/utils'
import personNav from '@/utils/consts/personal-menu.json'

export const state = () => {
  return {
    // 用户信息
  	personNav: {}
  }
}
export const mutations = {
	SET_NAV(state, user) {
		state.personNav = classifyArr(personNav, 'parent')
	}
}

