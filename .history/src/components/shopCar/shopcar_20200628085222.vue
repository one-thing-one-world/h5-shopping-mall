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
                    <div class="">
                        <van-button type="primary" @click="checkAll">全选</van-button>
                    </div>
                </div>
                <div class="choose_right">

                    <div>合计</div>

                    <div>请确认订单</div>

                </div>

            </div>

            <div class="df j-end">

                <div>删除</div>
                <div>去结算</div>

            </div>
            <div class="b1">

                <van-checkbox-group v-model="result" ref="checkboxGroup">

                    <van-cell-group>

                        <div v-for="(item, index) in shopList" class="df" >

                            <div>
                                <van-cell clickable :key="item" @click="toggle(index)">

                                    <template #right-icon>
                                        <van-checkbox :name="item" ref="checkboxes" />
                                    </template>

                                </van-cell>
                            </div>
                            <div>7</div>
                        </div>

                    </van-cell-group>
                </van-checkbox-group>

            </div>

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
            users: '',
            shopList: [],
            list: ['a', 'b'],
            result: [],
            flag: false,

        }
    },
    methods: {
        checkAll() {
            this.flag = !this.flag
            this.$refs.checkboxGroup.toggleAll(this.flag);
        },
        toggle(index) {
            this.$refs.checkboxes[index].toggle();
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
                console.log(res);

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

    }
}
</script>

<style lang="scss" scoped>
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
