import axios from 'axios'
// OSS_Token
export const OSS_Token = param => axios.post(`/file/token`, param)
// 根据父级编码获取信息
export const areaByParent = param => axios.get(`/front/area/byParent`, {params: param})
// 根据级别获取信息
export const areaByLevel = param => axios.get(`/front/area/byLevel`, {params: param})
// 获取所有的省市区信息
export const allAreas = param => axios.get(`/front/area/allAreas`)
