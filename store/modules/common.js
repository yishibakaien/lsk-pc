import {classifyArr} from '@/utils/utils'
import personNav from '@/utils/consts/personal-menu.json'
const state = {
  // 用户信息
  personNav: classifyArr(personNav, 'parent')
}
const getters = {
  personNav: (state) => state.personNav
}
export default {
  state,
  getters
}
