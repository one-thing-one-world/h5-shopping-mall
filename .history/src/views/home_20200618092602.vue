<template>
<div>

    <div class="container">
        <div class="box">
            <div class="content"></div>
            <div class="bottomnav df">
                <div class="homelayout f1" @click="gotoHome">首页</div></div>
                <div class="catalayout f" @click="gotoCata">分类</div>
                <div class="shopcarlayout" @click="gotoShopCar">购物车</div>
                <div class="minelayout" @click="gotoMine">我的</div>
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
.one {
    width: 100px;
    height: 100px;
    border: 1px solid red;
}
</style>
