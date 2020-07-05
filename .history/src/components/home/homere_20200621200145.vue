<template>
<div>
    <div class="w375 recom">
        <div class="df m-l-20  a-center  h36">商品推荐</div>
    </div>
    <div class="container" ref="container">
        <div class="box df ">
            <div class=" fs14 b-r-1-g" v-for="(item,index) in recommend" :key="index">

                <div><img class="w124  h100" :src="item.image" alt=""></div>
                <div class="text m-l-10 b1 fs14">{{item.goodsName}}</div>
                <div cla>{{item.mallPrice}}+++{{item.price}}</div>
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
import BScroll from 'better-scroll'
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
        new BScroll(this.$refs.container, {
            scrollX: true,
            click: true
        })
    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.text {
    width:100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.container {
    display: flex;
    overflow: hidden;
}

.recom {
    border-bottom: 1px solid #F0F0EE;
}
</style>
