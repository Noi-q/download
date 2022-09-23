import Axios from "axios"
import config from '../config/http.config'

const http = Axios.create({
  baseURL:config().url,
  timeout:config().timeout,
  headers:config().header
})


http.interceptors.request.use(
  config =>{
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  response =>{
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default http