<template>
<div>

    <div class="container">
        <div class="box">
            <div class="content">
                <router-view>

                </router-view>
            </div>
            <div class="bottomnav fs14 df">

                <div class="homelayout f1 df  a-center j-center f-column " @click="gotoHome">
                    <div>
                        <van-icon name="wap-home-o" />
                    </div>
                    <div>首页</div>

                </div>
                <div class="catalayout f1 df a-center j-center f-column" @click="gotoCata">
                    <div>
                        <van-icon name="wap-nav" />
                    </div>
                    <div>分类</div>
                </div>
                <div class="shopcarlayout f1 df a-center j-center f-column " @click="gotoShopCar">
                    <div>
                        <van-icon name="cart" />
                    </div>
                    <div>购物车</div>

                </div>
                <div class="minelayout f1 df a-center j-center f-column" @click="gotoMine">
                    <div>
                        <van-icon name="manager-o" />
                    </div>
                    <div>我的</div>
                </div>

            </div>
        </div>
    </div>

</div>
</template>

<script>
import axios from "axios"
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

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.bottomnav{
    color:#666666;
}
.content {
    height: 630px;
}
</style>
