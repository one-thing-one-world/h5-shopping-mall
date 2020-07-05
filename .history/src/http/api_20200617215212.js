//用来封装所有的请求
import service from './index'
export default {
    getecommend(){
        return service.get('/recommend')
    }
}