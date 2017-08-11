import axios from 'axios'
// import {Message} from 'element-ui'
import {cookie} from '@/utils/utils'
let axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'production'
    ? 'https://api.ts57.cn'
    : 'http://192.168.8.212:9090',
  timeout: 3000,
  headers: {
    'x-client': 1,
    'x-token': cookie.get('x-token') || ''
  }
})
// ============
// request 请求
// ============
// axiosInstance.interceptors.request.use(config => {
//   axios.defaults.headers['x-token'] = cookie.get('x-token') || ''
//   return config
// }, error => {
//   Message.error({message: 'Internal Error'})
//   return Promise.reject(error)
// })
// // ============
// // response 响应
// // ============
// axiosInstance.interceptors.response.use(response => {
//   if (response.data.code === 210018) {
//     store.commit('LOGIN_OUT')
//     Message({type: 'error', message: response.data.message})
//     router.push('/loginPage')
//     return
//   }
//   if (response.status === 200) {
//     if (response.data.message) {
//       Message({
//         type: !response.data.code
//           ? 'success'
//           : 'error',
//         message: response.data.message
//       })
//     }
//     return response
//   } else {
//     Message({type: 'error', message: response.statusText})
//     return Promise.reject(response.statusText)
//   }
// }, error => {
//   return Promise.reject(error.response.data)
// })
export default axiosInstance
