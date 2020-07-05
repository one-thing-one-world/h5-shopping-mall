//用来封装所有的请求
import service from './index'
export default {
    //1. 获取首页数据(get)
    getRecommend(){
        return service.get('/recommend')
    },
    //
    getSearch(){
        return service.get('/search')
    },
    getCattagory(id){
        return service.get('/classification?id=${id}')
    },
    getCard(){
        return service.get('/getCard')
    }












}