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

            <div>
                iii
            </div>

        </div>

        <div class="bottom_nav">
            <van-goods-action>
                <van-goods-action-icon icon="chat-o" text="客服" />
                <van-goods-action-icon icon="cart-o" :badge="shopList.length>0?shopList.length:''" text="购物车" />
                <van-goods-action-button @click="addShop" type="warning" text="加入购物车" />
                <van-goods-action-button type="danger" text="立即购买" @click="show = true" />

            </van-goods-action>

            <div>

                <van-cell is-link @click="showPopup">展示弹出层</van-cell>
                <van-popup closeable close-icon="close" close-icon-position="top-right" v-model="show" position="bottom" :style="{ height: '32%' }">

                    <div class="pic_container m-t-20   df" v-if="obj">

                        <div class="pics" v-if="obj">

                            <div class="pic_box"><img class="pic " :src="obj.image" alt=""></div>
                        </div>

                        <div>
                            <div class=" m-t-15 m-l-10 fs14">{{obj.name}}</div>
                            <div class=" m-t-4 pop_price fs14 m-l-10">￥{{obj.orl_price}}</div>
                        </div>

                    </div>

                    <div v-if="obj" class="  fs14   p-b-10 buy_count">

                        <div class="m-t-10 m-l-20">购买数量</div>
                        <div class="df m-t-4 j-bettween">
                            <div class="df  m-t-7 m-l-20">
                                <div>
                                    <div class="shengyu">剩余{{obj.amount}}件</div>
                                </div>
                                <div>
                                    <div class="xiangou m-l-5">每人限购50件</div>
                                </div>
                            </div>
                            <div class="count ">
                                <van-stepper v-model="value" theme="round" button-size="22" disable-input />
                            </div>
                        </div>

                    </div>

                    <div class=" buycolor m-t-6 ccc h50">
                        <div>立刻购买</div>
                    </div>

                </van-popup>

            </div>
        </div>

    </div>
</div>
</template>

<script>
import {
    Toast
} from 'vant';
export default {
    name: '',
    props: {},
    components: {

    },
    data() {
        return {
            id: '',
            obj: null,
            flag: 1,
            show: false,
            value: '',
            shopList: [],

        }
    },
    methods: {
        showPopup() {
            this.show = true;
        },

        nowBuy() {

        },
        addShop() {
            if(users){
                    
            this.getCard()

            this.$api.getAddshopping(this.obj.id).then(res => {

                console.log(res);
            }).catch(err => {
                console.log(err);
            })
            this.getCard()
            }else

        },
        gotodetail() {
            this.flag = 1;
        },
        gotocomments() {
            this.flag = 2;
        },
        getCard() {
            this.$api.getCard().then(res => {
                this.shopList = res.shopList
                console.log(res);

            }).catch(err => {

                console.log(err)

            })
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
        this.getCard()
        localStorage.getItem('users')

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.buycolor {
    background: #FF5D34;
}

.count {
    margin-right: 40px;
}

.shengyu {
    color: rgb(156, 144, 144);
}

.xiangou {
    color: rgb(221, 49, 6);
}

.pop_price {
    color: rgb(221, 49, 6);
}

.pics {
    margin-left: 20px;
}

.pic_box {
    width: 66px;
    height: 66px;
    border: 1px solid rgb(201, 189, 189);

    box-shadow: rgb(160, 145, 145);
}

.pic {
    width: 66px;
    height: 66px;
}

.canc {
    position: absolute;
    z-index: 999;
    right: 10px;
    top: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid gray;

}

.content {
    padding: 16px 16px;
}

.box {
    position: relative;
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
