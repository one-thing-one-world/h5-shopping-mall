//用来封装所有的请求
import service from './index'
export default {
    //1. 获取首页数据(get)
    getRecommend() {
        return service.get('/recommend')
    },
    //2. 搜索(get)
    getSearch() {
        return service.get('/search')
    },
    //3. 分类查询(get)
    getCattagory(id) {
        return service.get('/classification?id=${id}')
    },
    //4. 查询获取购物车数据(get)
    getCard() {
        return service.get('/getCard')
    },
    getEditCart(count, id, mallPrice) {
        return service.post('/editCart', {
            count: count,
            id: id,
            mallPrice: mallPrice
        })
    },
    getDeleteShop(id) {
        return service.post('/deleteShop', {
            id: id
        })
    },
    getOrder() {
        return service.post('/order', {
            address: 收货地址,
            tel: 电话,
            orderId: 所有商品的id(数组),
            totalPrice: 总价格,
            idDirect: 用来判断是购物车结算还是直接购买(直接购买为true, 购物车结算为false),
            count: 商品数量
        })
    }













}