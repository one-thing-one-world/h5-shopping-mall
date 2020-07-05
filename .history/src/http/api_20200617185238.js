//用来封装所有的请求
import service from './index'
export default {
    getHomeDATE(){
        return service.get(`/recommend`)
    }
}