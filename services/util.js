import axios from 'axios'
// OSS_Token
export const OSS_Token = param => axios.post(`/file/token`, param)
// 根据父级编码获取信息
export const areaByParent = param => axios.get(`/front/area/byParent`, {params: param})
