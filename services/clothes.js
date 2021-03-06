import axios from 'axios'
// 定制版衣
export const customClothes = () => axios.get(`/clothes/customClothes`)
// 获取版衣列表
export const getClothesList = (param) => axios.post(`/clothes/listClothes`, param)
// 首页版衣列表
export const getHomeClothesList = () => axios.get(`/clothes/listHomeClothes`)