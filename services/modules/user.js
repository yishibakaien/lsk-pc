import axios from 'axios'
// 获取用户信息
export const getProductDetail = () => axios.get(`/user/getUserInfo`)
