<template>
<div>
    <div>

        <div class="top df b1 h50">
            <div class="ccc text1">
                <div>
                    <van-icon name="arrow-left" />
                </div>
            </div>

            <div class="ccc w300 text2 r1">订单结算</div>

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

            <div v-for="(item,index) in shopList" :key="index">
                <div><img class="w90" :src="item.image_path" alt=""></div>
                <div>
                    <div>
                        <div>{{item.name}}</div>
                        <div>￥{{item.present_price}}</div>
                    </div>
                    <div>{{item.count}}</div>
                </div>
            </div>

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
            shopList: []
        }
    },
    methods: {
        getCard() {
            this.$api.getCard().then(res => {
                this.shopList = res.shopList
                console.log(res);

            }).catch(err => {

                console.log(err)

            })
        },
    },
    mounted() {
        this.id = this.$route.query.id

        this.getCard()
    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.text1 {
    width: 40px;
}
.underline_box{
    position: relative;
    color: rgb(58, 46, 46);
}
.underline{
    position: absolute;
    z-index: 9999;
    height:1px;
    width: 100%;
    background: black;
    top: 21px;
    
}
</style>
