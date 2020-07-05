<template>
<div>

    <div class="container" ref="container">
        <div class="box">
            <div class="content ">
                <router-view>

                </router-view>
            </div>
            <div class="bottomnav r1 fs14 df">

                <div class="homelayout f1 df  a-center j-center f-column " @click="gotoHome">
                    <div class="fs25 ">
                        <van-icon name="wap-home-o" />
                    </div>
                    <div class="text">首页</div>

                </div>
                <div class="catalayout f1 df a-center j-center f-column" @click="gotoCata">
                    <div class="fs25">
                        <van-icon name="wap-nav" />
                    </div>
                    <div class="text">分类</div>
                </div>
                <div class="shopcarlayout f1 df a-center j-center f-column " @click="gotoShopCar">
                    <div class="fs25">
                        <van-icon name="cart" />
                    </div>
                    <div class="text">购物车</div>

                </div>
                <div class="minelayout f1 df a-center j-center f-column" @click="gotoMine">
                    <div class="fs25">
                        <van-icon name="manager-o" />
                    </div>
                    <div class="text">我的</div>
                </div>

            </div>
        </div>
    </div>

</div>
</template>

<script>
import axios from "axios"
// import BScroll from 'better-scroll'
export default {
    name: '',
    props: {},
    components: {

    },
    data() {
        return {

        }
    },
    methods: {

        gotoHome() {
            if (this.$route.path !== '/') {
                this.$router.push({
                    name: 'home'
                })
            }
        },
        gotoCata() {

            if (this.$route.path !== '/cata') {
                this.$router.push({
                    name: 'cata'
                })
            }

        },
        gotoShopCar() {
            if (this.$route.path !== '/shop') {
                this.$router.push({
                    name: 'shop'
                })
            }

        },
        gotoMine() {

            if (this.$route.path !== '/mine') {
                this.$router.push({
                    name: 'mine'
                })
            }

        },
        getRecommend(){
        this.$api.getRecommend().then(res=>{
                
              }).catch(err=>{
               
              })
        }
    },
    mounted() {
        this.getRecommend()
        // new BScroll(this.$refs.container, {
        //     scrollY: true,
        //     click: true
        // })

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>

.text{
    position: relative;
    bottom: 5px;
}
.bottomnav{
    color:#666666;
    
}
.content {
    height: 610px;
   
}
</style>
