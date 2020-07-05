<template>
<div>
    <div class="w375 recom">
        <div class="df m-l-20  a-center  h36">商品推荐</div>
    </div>
    <div class="container" ref="container">
        <div class="box df ">
            <div  class=" fs14 b-r-1-g" v-for="(item,index) in recommend" :key="index">

                <div @click="gotoDetail(item.goodsId)"><img class="w124  h100" :src="item.image" alt=""></div>
                <div @click="gotoDetail(item.goodsId)" class="text m-l-10  fs14">{{item.goodsName}}</div>
                <div @click="gotoDetail(item.goodsId)" class=" m-l-10 fs16 m-t-b-5">￥{{item.mallPrice}} <span class="fs14 price">￥{{item.price}}</span> </div>
                <div  class="df a-center j-center ">
                    <div class="df">
                        <div @click='addShop' class="w20  ccc p5 ">
                            <van-icon name="cart" />
                        </div>
                        <div @click="gotoDetail(item.goodsId)" class=" detail">查看详情</div>
                    </div>
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
        addShop() {
            if (this.users) {

                this.$api.getAddshopping(this.obj.id).then(res => {
                    this.getCard()
                    console.log(res);
                }).catch(err => {
                    console.log(err);
                })
                this.getCard()
            } else {
                this.$checkLogin()
            }

        },
        gotoDetail(a) {

            this.$router.push({
                name: 'detail',
                query: {
                    id: a
                }
            })
            console.log(a);

        }

    },
    mounted() {
        new BScroll(this.$refs.container, {
            scrollX: true,
            click: true
        })
        locals

        console.log(this.recommend);
    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.price {
    text-decoration: line-through !important;
    color: red;
}

.p5 {

    padding: 4px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    background: #FECA3A;

    color: white !important;

}

.detail {
    padding-left: 6px;
    padding-right: 6px;
    background: #FF1D06;
    color: white;
}

.text {
    width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.container {
    display: flex;
    overflow: hidden;
}

.recom {
    border-bottom: 1px solid #d6d6d4;
}
</style>
