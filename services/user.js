import axios from 'axios'
// 获取用户信息
export const getUserInfo = () => axios.post(`/user/getUserInfo`)
// 登录
export const login = param => axios.post(`/front/user/login`, param)
// 注册
export const register = param => axios.post(`/front/user/reg`, param)
// 退出登录
export const loginOut = param => axios.post(`/front/user/loginOut`)
// 获取图片验证码
export const getVerifyCode = param => axios.post(`/front/user/getVerifyCode`, param)
// 获取注册短信
export const getRegSMSCode = param => axios.post(`/front/user/getRegSMSCode`, param)
// 找回密码
export const findPassWd = param => axios.post(`/front/user/findPassWd`, param)
// 修改用户密码
export const restPasswd = param => axios.post(`/user/restPasswd`, param)
// 校验密码
export const checkPasswd = param => axios.post(`/user/checkPasswd`, param)
// 获取档口or工厂信息
export const getCompanyInfo = param => axios.get(`/company/getCompanyInfo`, {params: param})
// 获取公司二维码 
export const getCompanyQRcode = param => axios.get(`/company/getCompanyQRcode`, {params: param})