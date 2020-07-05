<template>
<div>
    <div v-if="!users">
        <div class="top  h40 ccc">
            <div>购物车</div>
        </div>
        <div>

            <div>
                <img class="pic1" src="../../assets/order.gif">
            </div>

            <div class="text1 ccc">
                <div>登陆后才能查看订单</div>
            </div>
            <div class="text2  ccc">
                <div @click="goToLogin" class="text22 ccc">请先登录</div>
            </div>
        </div>
    </div>

    <div v-else-if="users">

        <div v-if="shopList.length===0">
            <div class="top  h40 ccc">
                <div>购物车</div>
            </div>
            <div class="pic_container ccc">
                <div class="pic2_box ccc">
                    <img class="pic2" src="../../assets/shop.png">
                </div>
            </div>

            <div class="text11 ccc">
                <div>你的购物还是空的</div>
            </div>

            <div class="text2  ccc">
                <div @click="goToHome" class="text22 ccc">去购物</div>
            </div>

        </div>

        <div v-else>

            <div class="top  h40 ccc">
                <div>购物车</div>
            </div>

            <div class="df j-bettween ">

                <div class="choose_left ccc">

                    <div class="selectall " @click="selectall">

                        <van-checkbox v-model="flag" checked-color="#07c160">全选</van-checkbox>

                    </div>

                </div>

                <div class="choose_right ">

                    <div class="sum ">合计:<span class="sum_price">￥{{totalPrice}}:00</span></div>

                    <div class="confirm">请确认订单</div>

                </div>

            </div>

            <div class="df   a-center   delet j-end">

                <div v-if="flag2" class=" ccc  delet1" @click="del">删除</div>
                <div v-if="flag2" class=" ccc  delet2" @click="gotoSettlement">去结算</div>

            </div>

            <div class="item_box" v-if="shopList.length>0">

                <div v-for="(item, index) in shopList" class="df item_item" :key="index">

                    <div class=" circle ccc" @click='toggle(item)'>
                        <van-checkbox v-model="item.check" checked-color="#07c160"></van-checkbox>
                    </div>

                    <div class="list_right df a-center j-bettween">

                        <div>
                            <img class="pic" :src="item.image_path" alt="">
                        </div>

                        <div class="text_box">

                            <div class="fs14">{{item.name}}</div>

                            <div class="df count_box j-bettween">

                                <div>￥:{{item.present_price}}</div>

                                <div class="count">
                                    <van-stepper v-model="item.count" theme="round" button-size="22" disable-input />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    </div>
</div>
</template>

<script>
import {
    Dialog
} from 'vant';
export default {
    name: '',
    props: {},
    components: {

    },
    data() {
        return {
            users: '',
            shopList: [],
            list: ['a', 'b'],
            result: [],
            flag: false,
            flag2: false,

        }
    },
    methods: {
        del() {
            Dialog.confirm({

                    message: '确认删除',
                })
                .then(() => {
                    let mm = this.shopList.filter((item, index) => {
                        return item.check === true
                    })
                    mm.map((item,index)=>{
                        
                    })
                    
                })
                .catch(() => {
                    // on cancel
                });
        },
        gotoSettlement() {

            let arr = this.shopList.filter((item, index) => {
                return item.check === true
            })
            localStorage.setItem('someArr', JSON.stringify(arr))
            console.log(arr);

            this.$router.push({
                name: 'settlement'
            })
        },
        selectall() {

            this.flag = !this.flag
            console.log(this.flag);

            this.shopList.map(item => {
                item.check = this.flag
                console.log(item);
                console.log(this.flag);
            })
            this.flag2 = this.shopList.some(item => {
                return item.check === true
            })

        },
        toggle(item) {

            item.check = !item.check

            this.flag = this.shopList.every(item => {
                return item.check === true
            })
            this.flag2 = this.shopList.some(item => {
                return item.check === true
            })

            console.log(this.flag);

        },
        goToLogin() {
            this.$router.push({
                name: 'login'
            })

        },
        goToHome() {
            this.$router.push({
                name: 'home'
            })
        },
        getCard() {
            this.$api.getCard().then(res => {
                this.shopList = res.shopList
                console.log(res.shopList);

            }).catch(err => {

                console.log(err)

            })
        },

    },
    mounted() {
        this.users = localStorage.getItem('users')
        console.log(this.users);
        this.getCard()
    },
    watch: {

    },
    computed: {
        totalPrice() {
            let mm = this.shopList.filter((item, index) => {
                return item.check === true
            })
            let sum = 0;
            mm.map((item, index) => {
                sum = sum + item.present_price * item.count
            })
            return sum

        }

    }
}
</script>

<style lang="scss" scoped>
.circle {
    width: 30px;
    padding: 0px 8px;
}

.sum {
    padding: 3px 0px;
}

.sum_price {
    color: rgb(126, 2, 2);
}

.confirm {
    padding: 5px 0;
}

.choose_right {
    margin-right: 10px;
    width: 152px;
}

.delet {
    height: 60px;
    font-size: 18px;

    border-bottom: 1px solid rgb(231, 215, 215);

}

.delet1 {
    height: 40px;
    width: 70px;
    margin-right: 20px;
    background: #1989FA;
    border-radius: 10px;
    color: white;
}

.delet2 {
    height: 40px;
    width: 70px;
    background: #1989FA;
    border-radius: 10px;
    color: white;
}

.selectall {
    margin-left: 14px;
}

.count_box {
    margin-top: 10px;
}

.count {
    margin-right: 10px;
}

.text_box {
    padding-left: 5px;
    width: 240px;
    color: red;

}

.item_item {

    border-bottom: 1px solid rgb(218, 205, 205);
    padding: 8px 0px;

}

.list_right {
    width: 316px;
    padding-left: 5px;
}

.pic {
    width: 70px;
    box-shadow: 0 0 1px rgb(71, 64, 64);
}

.top {

    border-bottom: 2px solid rgb(201, 198, 198);
    font-size: 22px;
    letter-spacing: 6px;
    color: rgb(32, 23, 23);
}

.pic1 {

    width: 374px;

}

.pic_container {
    margin-top: 60px;
}

.pic2_box {
    width: 160px;
    height: 160px;
    background: #F0F0EE;
    border-radius: 50% 50%;
}

.pic2 {

    width: 100px;

}

.text1 {

    font-size: 22px;
    color: rgb(31, 25, 25);

}

.text11 {
    margin-top: 50px;
    font-size: 22px;
    color: rgb(31, 25, 25);
}

.text2 {
    margin-top: 50px;
}

.text22 {

    width: 120px;
    height: 40px;

    background: rgb(62, 173, 62);
    border-radius: 20px;
    letter-spacing: 3px;
    color: white;

}
</style>
