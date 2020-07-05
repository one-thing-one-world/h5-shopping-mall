//用来封装所有的请求
import service from './i'
export default {
    getHomeData(){
        return service.get('/recommend')
    }
}