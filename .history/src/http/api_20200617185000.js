//用来封装所有的请求
import service from './index'
export default {
    login(params){
        return service.post(`/`)
    }
}