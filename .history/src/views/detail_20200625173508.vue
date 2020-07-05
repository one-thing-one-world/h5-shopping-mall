<template>
<div>
    <div class="box ">

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
               
               

            </div>

        </div>

        <div class="df shop">
            <div class="df a-center j-center f1">
                <div class="ccc">
                    <van-icon name="send-gift-o" />
                </div>
                <div class="m-l-4">有赞得店</div>
            </div>
            <div class="f1 ccc">进入店铺</div>
        </div>

        <div class="commends df">
            <div @click="gotodetail" class="f1 ccc">商品详情</div>
            <div @click="gotocomments" class="f1 ccc">用户评论</div>
        </div>
        <div v-if="flag===1">

           <div v-if="obj">
             <div v-html="obj.detail"></div>
           </div>

        </div>
        
        <div v-else>
        
            <div>这里是用户得评论</div>

        </div>

        <div class="bottom_nav">
            <van-goods-action>
                <van-goods-action-icon icon="chat-o" text="客服" />
                <van-goods-action-icon icon="cart-o" text="购物车" />
                <van-goods-action-button @click="b"  type="warning" text="加入购物车" />
                <van-goods-action-button  type="danger" text="立即购买" />
            </van-goods-action>
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
            flag:1,
        }
    },
    methods: {
        gotodetail(){
            this.flag = 1;
        },
        gotocomments(){
            this.flag = 2;
        },

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
.box{
    position:relative;
}

.commends {
    font-size: 14px;
    margin-top: 10px;
    padding: 6px 0px;
    font-weight: 700;
    color: rgb(61, 56, 56);
    border-top: 1px solid rgb(192, 185, 185);
    border-bottom: 1px solid rgb(192, 185, 185);
}

.shop {

    margin-top: 10px;
    padding: 6px 0px;
    font-weight: 700;
    font-size: 18px;
    color: rgb(61, 56, 56);
    border-top: 1px solid rgb(192, 185, 185);
    border-bottom: 1px solid rgb(192, 185, 185);
}

.text_name {
    color: black;
    font-weight: 700;
    font-size: 18px;
}

.price {
    margin-top: 5px;
    padding: 5px 0px;
    color: red;
}

.cllect {
    margin-top: 10px;
    padding: 6px 0px;
    color: gray;
    border-top: 1px solid rgb(192, 185, 185);
    border-bottom: 1px solid rgb(192, 185, 185);
}


.top {
    height: 50px;
   
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
