<template>
<div>

    <div class="container">
        <div class="box">
            <div class="content">bbb</div>
            <div class="bottomnav">
                <div class="homelayout bg_blue" @click="gotoHome">首页</div>
            </div>
            <div class="catalayout" @click="gotoCata">分类</div>
            <div class="shopcarlayout " @click="gotoShopCar">购物车</div>
            <div class="minelayout " @click="gotoMine">我的</div>
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
            this.$router.push({
                name: 'homeLayout'
            })
        },
        gotoCata() {
            this.$router.push({
                name: 'cataLayout'
            })
        },
        gotoShopCar() {
            this.$router.push({
                name: 'shopCarlayout'
            })
        },
        gotoMine() {
            this.$router.push({
                name: 'mineLayout'
            })
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
.bottomnav {
    display: flex;
}
</style>
