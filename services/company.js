import axios from 'axios'
// 最新入驻商家列表
export const getUnSettledCompanyList = param => axios.post(`/company/listUnSettledCompany`, param)
// 已入驻商家列表
export const getSettledCompanyList = param => axios.post(`/company/listSettledCompany`, param)
// 首页优质商家
export const getLSKHomeCompanyList = param => axios.get(`/company/listLSKHomeCompany`)
