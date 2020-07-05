<template>
<div>
    <div class="w375 recom">
        <div class="df m-l-20  a-center  h36">商品推荐</div>
    </div>
    <div class="container" ref="container">
        <div class="box df b1">
            <div class=" fs14" v-for="(item,index) in recommend" :key="index">

                <div><img class="w124  h50" :src="item.image" alt=""></div>
                <div class="fs14">{{item.goodsName}}</div>
                <div>{{item.mallPrice}}+++{{item.price}}</div>
                <div class="df">
                    <div><img class="w20 h20" src="../../assets/shop.png" alt=""></div>
                    <div>查看详情</div>
                </div>
                <div>

                </div>

            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: '',
    props: {
        recommend: {
            type: Array
        }
    },
    components: {

    },
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  overfl
}
.recom {
    border-bottom: 1px solid #F0F0EE;
}
</style>
