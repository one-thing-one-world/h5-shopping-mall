import axios from 'axios'
const service = axios.create({
    baseURL: '/api',
    timeoutl:'10000'
})
//响应拦截
service.interceptors.responce.use(res=>{
    return res.data
})