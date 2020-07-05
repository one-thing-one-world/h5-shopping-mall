<template>
<div>

    <div class="container">
        <div class="box b1">
            <div class="content">
                <router-view>

                </router-view>
            </div>
            <div class="bottomnav df">

                <div class="homelayout f1 ccc" @click="gotoHome">
                    div
                
                </div>
                <div class="catalayout f1 ccc" @click="gotoCata">分类</div>
                <div class="shopcarlayout f1 ccc " @click="gotoShopCar">购物车</div>
                <div class="minelayout f1 ccc" @click="gotoMine">我的</div>

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

        }
        // getRecommend(){
        // this.$api.getRecommend().then(res=>{
        //         console.log(11);
        //         console.log(res);
        //       }).catch(err=>{
        //         console.log(err);
        //       })
        // }
    },
    mounted() {
        // this.getRecommend()

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.content {
    height: 300px;
}
</style>
