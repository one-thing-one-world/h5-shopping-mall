<template>
<div>

    <div class="container">
        <div class="box">
            <div class="content"></div>
            <div class="bottomnav df">
                <div class="homelayout bg_blue  f1" @click="gotoHome">首页</div></div>
                <div class="catalayout f1" @click="gotoCata">分类</div>
                <div class="shopcarlayout f1" @click="gotoShopCar">购物车</div>
                <div class="minelayout f1" @click="gotoMine">我的</div>
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


      gotoHome(){
        this.$router.push({name:'homeLayout'})
      },
      gotoCata(){
        this.$router.push({name:'cataLayout'})
      },
      gotoShopCar
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

</style>
