import axios from 'axios'
// OSS_Token
export const OSS_Token = param => axios.post(`/file/token`, param)
// 根据父级编码获取信息
export const areaByParent = param => axios.get(`/front/area/byParent`, {params: param})
// 根据级别获取信息
export const areaByLevel = param => axios.get(`/front/area/byLevel`, {params: param})
// 获取所有的省市区信息
export const allAreas = param => axios.get(`/front/area/allAreas`)
// 收藏或取消
export const favoriteBus = param => axios.post(`/favorite/favoriteBus`, param)
// 字典
export const getDicTree = param => axios.get(`/front/dicTree/byTypeKey`, {params: param})
// 根据编码获取区域信息
export const byCode = param => axios.get(`/front/area/byCode`, {params: param})
// 获取蕾丝控商家入驻地 
export const getSettledLands = () => axios.get(`/common/getSettledLands`)
