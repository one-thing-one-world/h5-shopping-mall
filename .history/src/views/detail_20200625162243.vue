<template>
<div>
    <div class="box">

        <div class="top ">

            <div class="goback " @click="goback">
                <van-icon name="arrow-left" />
            </div>

        </div>

        <div v-if="obj">

            <van-swipe :autoplay="3000">

                <van-swipe-item><img class="w375" :src="obj.image" alt=""></van-swipe-item>
                <van-swipe-item><img class="w375" :src="obj.image" alt=""></van-swipe-item>

            </van-swipe>

        </div>

        <div v-if="obj">
            <div class="m-l-10 text_name">{{obj.name}}</div>
        </div>
        <div v-if="obj">
            <div class="m-l-10 price">￥{{obj.orl_price}}</div>
        </div>

        <div class="cllect df  ">

            <div class="f1 m-l-20">
                运费&nbsp;:&nbsp;0
            </div>
            <div class="df f1 " v-if="obj">

                <div>剩余&nbsp;:&nbsp;{{obj.amount}}</div>
                

            </div>
            <div class="f1  ccc">

                <div class=" df">

                    <div>收藏</div>

                    <div class="m-l-5 ccc">
                        <van-icon name="like-o" />
                    </div>
                </div>
                <div></div>

            </div>

        </div>

        <div>
            <div>
                div
            </div>
            <div>进入店铺</div>
        </div>

    </div>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    components: {

    },
    data() {
        return {
            id: '',
            obj: null,
        }
    },
    methods: {

        getDetail() {
            this.$api.getGoodsOne(this.id).then(res => {

                this.obj = res.goods.goodsOne
                console.log(this.obj);

            }).catch(err => {
                console.log(err);
            })
        },
        goback() {
            history.go(-1)
        }

    },
    mounted() {
        this.id = this.$route.query.id
        console.log(this.id);
        this.getDetail()
        this.$api.getCard().then(
            res => {
                console.log(res);
            }
        ).catch(err => {
            console.log(err);
        })

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.text_name{
    color: black;
    font-weight: 700;
    font-size: 18px;
}
.price{
    margin-top: 5px;
    padding: 5px 0px;
    color: red;
}
.cllect {
    margin-top: 10px;
    padding: 6px 0px;
    color:gray;
    border-top: 1px solid rgb(192, 185, 185);
    border-bottom: 1px solid rgb(192, 185, 185);
}

.box {
    position: relative;
}

.top {
    height: 50px;
    position: absolute;
    z-index: 999;
}

.goback {
    width: 36px;
    height: 36px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #c8cecc;
    opacity: 0.6;
    position: relative;
    left: 10px;
    top: 15px;
}
</style>
