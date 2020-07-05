// 封装axios
// import 导入
import axios from 'axios'

// 创建一个axios的实例
const service = axios.create({
  // 请求的基础路径 如果配置了基础路径在实际发请求的时候可以省略
  baseURL: "/api",
  // 超时时间
  timeout: 10000
})

// 响应拦截
service.interceptors.response.use(res => {
  return res.data
})

// xport default 导出
export default service