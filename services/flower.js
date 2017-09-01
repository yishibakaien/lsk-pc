import axios from 'axios'
// 花型列表
export const listProducts = param => axios.post(`/product/searchLace`, param)
// 花型详情 
export const getProduct = id => axios.get(`/product/getProduct/${id}`)
// 获取色卡信息
export const getColorCards = param => axios.get(`/productColor/getColorCards`, {params: param})