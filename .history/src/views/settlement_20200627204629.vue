<template>
<div>
    <div class="box">

        <div class="container">

            <div class="top df  h50">
                <div class="ccc text1">
                    <div @click="goback">
                        <van-icon name="arrow-left" />
                    </div>
                </div>

                <div class="ccc w300 text2 ">订单结算</div>

            </div>

            <div class="h60 ccc">

                <div class="underline_box ccc">点击添加收货地址
                    <div class="underline"></div>
                </div>

            </div>

            <div>
                <div>

                    <img class="w375" src="../assets/caitiao.jpg" alt="">

                </div>
            </div>

            <div>

                <div v-if="!id">
                    <div class="df pic_box " v-for="(item,index) in shopList" :key="index">
                        <div><img class="pic" :src="item.image_path" alt=""></div>
                        <div>

                            <div>{{item.name}}</div>
                            <div class="df m-t-40 a-center j-bettween ">
                                <div class="fs18">￥{{item.present_price}}</div>
                                <div class="count">x{{item.count}}</div>
                            </div>

                        </div>
                    </div>
                </div>

                <div v-if="id" class="df pic_box ">
                    <div><img class="pic" :src="goodsOne.image_path" alt=""></div>
                    <div>
                        <div>{{goodsOne.name}}</div>
                        <div class="df m-t-40 a-center j-bettween ">
                            <div class="fs18">￥{{goodsOne.present_price}}</div>
                            <div>x{{value}}</div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        <div class="bottom  df j-end">

            <div class="bottom_left ccc r1 df">
                <div>合计&nbsp;:&nbsp;</div>

                <div v-if="!id"></div>
                <div v-else class="colorRed">￥<span class="allPrice">{{goodsOne.present_price*value}}</span> .00</div>
            </div>
            <div class="submitOrder ccc">提交订单</div>

        </div>

    </div>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    components: {

    },
    data() {
        return {
            id: '',
            shopList: [],
            goodsOne: '',
            value: '',
        }
    },
    methods: {
        goback() {
            history.go(-1)
        },
        getCard() {
            this.$api.getCard().then(res => {
                this.shopList = res.shopList
                console.log(res);

            }).catch(err => {

                console.log(err)

            })
        },
        getGoodsOne() {
            this.$api.getGoodsOne(this.id).then(res => {
                console.log(res);
                this.goodsOne = res.goods.goodsOne
            }).catch()
        }
    },
    mounted() {
        this.id = this.$route.query.id
        this.value = this.$route.query.value

        this.getCard()
        this.getGoodsOne()
    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.submitOrder{
    margin-right
}
.colorRed{
    color: rgb(245, 9, 9);
}
.allPrice{
    font-size: 20px;
}
.bottom_left{
    margin-right:20px;
}
.container{
    height: 617px;
}
.bottom{
    height:50px;
}
.count {
    color: gray;
}

.pic {
    width: 80px
}

.top {
    border-bottom: 1px solid rgb(180, 176, 176);
}

.pic_box {
    padding: 6px 5px 6px 16px;
    margin: 8px 0px;
    background: #FAFAFA;
    box-shadow: 0 0 1px rgb(216, 206, 206);
}

.text1 {
    width: 40px;
}

.text2 {
    color: rgb(116, 87, 87);
    font-weight: 700;
}

.underline_box {
    position: relative;
    color: rgb(116, 87, 87);
    font-weight: 700;
}

.underline {
    position: absolute;
    z-index: 9999;
    height: 1px;
    width: 100%;
    background: black;
    top: 21px;

}
</style>
