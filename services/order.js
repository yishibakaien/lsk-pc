import axios from 'axios'
// 删除收货地址
export const deleteConsignee = param => axios.post(`/consignee/deleteConsignee`, param)
// 新增收货地址
export const addConsignee = param => axios.post(`/consignee/addConsignee`, param)
// 编辑收货地址
export const editorConsignee = param => axios.post(`/consignee/editorConsignee`, param)
// 获取收货地址列表
export const getConsigneeList = param => axios.get(`/consignee/listConsignee`, {params: param})
// 获取收货地址详情
export const getConsignee = () => axios.get(`/consignee/getConsignee/${id}`, {params: param})
// 设置默认
export const setConsigneeDefault = id => axios.get(`/consignee/setDefault/${id}`)