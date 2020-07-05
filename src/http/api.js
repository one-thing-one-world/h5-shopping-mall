//用来封装所有的请求
import service from './index'

export default {
    //1. 获取首页数据(get)
    getRecommend() {
        return service.get('/recommend')
    },
    //2. 搜索(get)
    
    getSearch(value) {
        return service.post('/search', {
            value
        })
    },
    //3. 分类查询(get)
    getCattagory(id) {
        return service.get(`/classification?mallSubId=${id}`)
    },
    //4. 查询获取购物车数据(get)
    getCard() {
        return service.post('/getCard')
        
    },
    getEditCart(count, id, mallPrice) {
        return service.post('/editCart', {
            count: count,
            id: id,
            mallPrice: mallPrice
        })
    },
    getDeleteShop(arr) {
        return service.post('/deleteShop', arr)
    },
    getOrder(address,tel,orderId,totalPrice,idDirect,count) {
        return service.post('/order', {
            address: address,
            tel: tel,
            orderId: orderId,
            totalPrice: totalPrice,
            idDirect: idDirect,
            count: count
        })
    },

    getGoodsOne(id){
        return service.get(`/goods/one?id=${id}`)
    },

    getCollection(goods){
        return service.post(`/collection`,goods)
    },
    getCancelCollection(cid){
        return service.post(`/cancelCollection`,{
            id:cid
        })
    },
    getIsCollection(id){
        return service.post(`/isCollection`,{
            id:id
        })
    },
    // 12.加入购物车
    getAddshopping(id){
        return service.post(`/addShop`,{
            id:id
        })
    },
    getLoginOut({}){
        return service.post(`/loginOut`,{})
    },
    getQueryUser(){
        return service.post('/queryUser')
    },
    getSaveUser({gender,year,month, day,id, nickname}){
        return service.post("/saveUser",{
            gender: gender,
            year: year,
            month: month,
            day: day,
            id: id,
            nickname: nickname
        })
    },
    getOrderNum(){
        return service.get(`/myOrder/orderNum`)
    },
    grtComment(id,rate,content,anonymous,_id,order_id,image){
        return service.post(`/goodsOne/comment`,{
            id: id,
            rate: rate,
            content: content,
            anonymous: anonymous,
            _id: _id,
            order_id: order_id,
            image: image
        })
    },
    getVerify(){
        return service.get(`/verify`)
    },
    getAddress(){
        return service.get(`/getAddress`)
    },
    getDefaultAddress(){
        return service.get(`/getDefaultAddress`)
    },
    getSetDefaultAddress(id){
        return service.post(`/setDefaultAddress`,{
            id: id
        })
    },

    //增加收货地址(post)

    getIncreaseAddress(name,tel,address,isDefault,province,city,county,addressDetail,areaCode,id){
        return service.post(`/address`,{
            
            name:name,
            tel:tel,
            
            address:province+city+county,
            isDefault:isDefault,
            province:province,
            city:city,
            county:county,
            addressDetail:addressDetail,
            areaCode:areaCode,
            id:id
            
        })
    },
    getDeleteAddress(id){
        return service.post(`/deleteAddress`,{
            id:id
        })
    },
    getCollectionList(){
        return service.get(`/collection/list`)
    },
    getRegister(nickname,password,verify){
        return service.post(`/register`,{
            nickname,
            password,
            verify
        })
    },
    getLogin(nickname,password,verify){
        return service.post(`/login`,{
            nickname: nickname,
            password:password,
            verify:verify
        })
    },
    getMyOrder(){
        
        return service.get('/myOrder')

    },
    getAlreadyEvaluated(){
        return service.get(`/alreadyEvaluated`)
    },
    getTobeEvaluated(){
        return service.get(`/tobeEvaluated`)
    },
    //请求单个评论evaluateOne
    getSingleComment(id,_id){
        return service.post(`/evaluateOne`,{
             id:id,
             _id:_id
        })
    }

    















}