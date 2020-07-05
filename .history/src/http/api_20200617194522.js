//用来封装所有的请求
import service from '.'
export default {
    getHomeData(){
        return service.get('/recommend')
    }
}