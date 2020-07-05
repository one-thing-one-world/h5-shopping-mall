<template>
<div>

    <div class="container">
        <div class="box">
            <div class="content"></div>
            <div class="bottomnav">
                <div class="homelayout" @click="gotoHome">首页</div></div>
                <div class="catalayout" >分类</div>
                <div class="shopcarlayout">购物车</div>
                <div class="minelayout">我的</div>
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
