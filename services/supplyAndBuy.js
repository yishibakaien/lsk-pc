import axios from 'axios'
// 供应列表
export const listHomeCompanySupplys = param => axios.get(`/companySupply/listHomeCompanySupplys`, {params: param});
// 求购列表
export const listHomeProductBuys = param => axios.get(`/productBuy/listHomeProductBuys`, {params: param});
// 发布求购
export const releaseProductBuy = param => axios.post(`/productBuy/releaseProductBuy`, param);
// 发布供应
export const releaseCompanySupply = param => axios.post(`/companySupply/releaseCompanySupply`, param);
// 供应详情
export const getCompanySupply = id => axios.get(`/companySupply/getCompanySupply/${id}`);
// 求购详情
export const getProductBuy = id => axios.get(`/productBuy/getProductBuy/${id}`);
// 获取用户供应列表
export const listUserCompanySupplys = param => axios.get(`/companySupply/listUserCompanySupplys`, {params: param});
// 获取用户求购列表
export const listUserProductBuys = param => axios.get(`/productBuy/listUserProductBuys`, {params: param});
// 关闭求购
export const closeProductBuy = param => axios.post(`/productBuy/closeProductBuy`, param);
// 完成接单
export const finishProductBuy = param => axios.post(`/productBuy/finishProductBuy`, param);
// 删除求购
export const deleteProductBuy = param => axios.post(`/productBuy/deleteProductBuy`, param);
// 取消接单
export const cancelBuyTask = id => axios.post(`/buyTask/cancelBuyTask/${id}`);
// 删除接单
export const deleteBuyTask = param => axios.post(`/buyTask/deleteBuyTask`, param);