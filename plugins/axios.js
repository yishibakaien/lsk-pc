import axios from 'axios'
import { Message } from 'element-ui'
export default ({ store }) => {
  axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? process.env.proxyUrl : process.env.baseUrl
  axios.interceptors.request.use(config => {
    if (store.state.user.accessToken) {
      config.headers['x-token'] = store.state.user.accessToken
    }
    return config
  })
  axios.interceptors.response.use(response => {
    if (response.data.message) {
      Message({
        type: !response.data.code ? 'success' : 'error',
        message: response.data.message
      })
      return Promise.reject(response.data.code)
    }
    return response
  }, error => {
    return Promise.reject(error)
  })
}
