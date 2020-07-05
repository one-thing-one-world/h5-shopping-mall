<template>
<div>

    <div class="container">
        <div class="box vb">
            <div class="content">bfgbb</div>
            <div class="bottomnav df">

                <div class="homelayout f1 bg_blue ccc" @click="gotoHome">首页</div>
                <div class="catalayout f1 ccc" @click="gotoCata">分类</div>
                <div class="shopcarlayout ccc f1" @click="gotoShopCar">购物车</div>
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
.content{
    height: 200px;
}
</style>
