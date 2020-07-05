<template>
<div>
    <div class="box">
        <div class="container">
            <div class="top df h50">
                <div class="ccc text1">
                    <div @click="goback">
                        <van-icon name="arrow-left" />
                    </div>
                </div>

                <div class="ccc w300 text2">订单结算</div>
            </div>

            <div class="h60 h60box ccc">
                <div v-if="defaultAdress">

                    <div class="people df j-bettween">
                        <div>收货人:{{defaultAdress.name}}</div>
                        <div class=" ccc">{{defaultAdress.tel}}</div>
                    </div>
                    <div class="goodsAress">
                        收货地址:{{defaultAdress.addressDetail}}
                    </div>
                    <div @click='chooseAdress' class="chooseAdress">
                        <van-icon name="arrow" />
                    </div>

                </div>
                <div v-else @click="goToAdress" class="underline_box ccc">
                    点击添加收货地址
                    <div class="underline"></div>
                </div>

            </div>

            <div>
                <div>
                    <img class="w375" src="../assets/caitiao.jpg" alt />
                </div>
            </div>

            <div>
                <div v-if="!id">
                    <div class="df pic_box" v-for="(item,index) in someArr" :key="index">
                        <div>
                            <img class="pic" :src="item.image_path" alt />
                        </div>
                        <div>
                            <div>{{item.name}}</div>
                            <div class="df m-t-40 a-center j-bettween">
                                <div class="fs18">￥{{item.present_price}}</div>
                                <div class="count">x{{item.count}}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="id" class="df pic_box">
                    <div>
                        <img class="pic" :src="goodsOne.image_path" alt />
                    </div>
                    <div>
                        <div>{{goodsOne.name}}</div>
                        <div class="df m-t-40 a-center j-bettween">
                            <div class="fs18">￥{{goodsOne.present_price}}</div>
                            <div>x{{value}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bottom df j-end">
            <div class="bottom_left ccc df">
                <div>合计&nbsp;:&nbsp;</div>

                <div v-if="!id" class="colorRed">
                    ￥
                    <span class="allPrice">{{totalPrice1}}</span>:00
                </div>
                <div v-else class="colorRed">
                    ￥
                    <span class="allPrice">{{totalPrice2}}</span> .00
                </div>
            </div>

            <div class="submitOrder ccc" @click="submitOrder">提交订单</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "",
    props: {},
    components: {},
    data() {
        return {
            id: "",
            shopList: [],
            goodsOne: "",
            value: "",
            someArr: [],
            defaultAdress: [],

        };
    },
    methods: {

        chooseAdress() {
            this.$router.push({
                name: 'adress'
            })
        },
        goToAdress() {
            this.$router.push({
                name: "adress"
            });
        },
        submitOrder() {

            
            if (this.defaultAdress) {

                if (!this.id) {
                    let arr = []
                    let counts = 0
                    this.someArr.map((item, index) => {
                        arr.push(item.cid)
                        counts = counts + item.count
                    })

                    this.$api.getOrder(this.defaultAdress.address, this.defaultAdress.tel, arr, this.totalPrice1, false, counts).then(res => {
                        console.log(res);
                    }).catch(err => {
                        console.log(err);
                    })

                  
                    this.$toast(`您总共消费了${this.totalPrice1}元`);

                } else {
                    let arr = [];
                    arr.push(this.id)
                    this.$api.getOrder(this.defaultAdress.address, this.defaultAdress.tel, arr, this.totalPrice2, true, this.value).then(res => {
                        console.log(res);
                    }).catch(err => {
                        console.log(err);
                    })

                    this.$toast(`您总共消费了${this.totalPrice2}元`);
                }
                this.$router.push({
                    name: 'home'
                })

            } else {
                this.$toast("您还没有填写收货地址，请点击填写");
            }
        },
        goback() {
            this.$router.back()
        },
        getCard() {
            this.$api
                .getCard()
                .then(res => {
                    this.shopList = res.shopList;
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                });
        },
        getGoodsOne() {
            this.$api
                .getGoodsOne(this.id)
                .then(res => {
                    console.log(res);
                    this.goodsOne = res.goods.goodsOne;
                    console.log(this.goodsOne);
                })
                .catch();
        },
        getDefaultAddress() {
            this.$api.getDefaultAddress().then(res => {
                this.defaultAdress = res.defaultAdd
                console.log(this.defaultAdress);
            }).catch(err => {
                console.log(err);
            })
        }
    },
    mounted() {

        this.id = this.$route.query.id;
        this.value = this.$route.query.value;
        this.someArr = JSON.parse(localStorage.getItem("someArr"));
        this.items = this.$route.query.item
        console.log(this.);

        console.log(this.someArr);

        this.getCard();
        this.getGoodsOne();
        this.getDefaultAddress();
    },
    watch: {},
    computed: {
        totalPrice1() {
            let sum = 0;

            this.someArr.map((item, index) => {
                sum = sum + item.present_price * item.count;
            });

            return sum;
        },
        totalPrice2() {
            let sum = this.goodsOne.present_price * this.value
            return sum
        }
    }
};
</script>

<style lang="scss" scoped>
.h60box {
    position: relative;
}

.chooseAdress {
    position: absolute;
    right: 20px;
    bottom: 0px;
    font-size: 22px;
}

.people {
    width: 320px;
    margin-bottom: 5px;
    margin-top: 3px;
}

.submitOrder {
    height: 40px;
    margin-right: 20px;
    width: 120px;
    border-radius: 46px;
    background: rgb(252, 109, 58);
    color: white;
    letter-spacing: 2px;
}

.colorRed {
    color: rgb(245, 9, 9);
}

.allPrice {
    font-size: 20px;
}

.bottom_left {
    margin-right: 20px;
    height: 40px;
}

.container {
    height: 617px;
}

.bottom {
    height: 50px;
}

.count {
    color: gray;
}

.pic {
    width: 80px;
}

.top {
    border-bottom: 1px solid rgb(180, 176, 176);
}

.pic_box {
    padding: 6px 5px 6px 16px;
    margin: 8px 0px;
    background: #fafafa;
    box-shadow: 0 0 1px rgb(216, 206, 206);
}

.text1 {
    width: 40px;
}

.text2 {
    color: rgb(116, 87, 87);
    font-weight: 700;
}

.underline_box {
    position: relative;
    color: rgb(116, 87, 87);
    font-weight: 700;
}

.underline {
    position: absolute;
    z-index: 9999;
    height: 1px;
    width: 100%;
    background: black;
    top: 21px;
}
</style>
