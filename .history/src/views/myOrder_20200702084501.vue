<template>
<div>
    <div class="top df h50">
        <div class="ccc text1">
            <div @click="goback">
                <van-icon name="arrow-left" />
            </div>
        </div>

        <div class="ccc w300 text2">我的订单</div>
    </div>

    <div>
        <van-tabs v-model="active" @click="onClick">

            <van-tab title="全部" class="ccc m-t-20">
                开发中,敬请期待..
            </van-tab>
            <van-tab title="待支付" class="ccc m-t-20"> 开发中,敬请期待..</van-tab>
            <van-tab title="代发货" class="ccc m-t-20"> 开发中,敬请期待..</van-tab>
            <van-tab title="待收货" class="ccc m-t-20">
                开发中,敬请期待..
            </van-tab>

            <van-tab title="已完成" class="j-center">

                <div>

                    <div>
                        <div>订单编号:{{}}</div>
                    </div>

                    <div class="all m-t-15">
                        <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
                    </div>

                    <div>

                            <div>创建时间:</div>
                            <div>收货地址:</div>
                            <div>共jian</div>

                    </div>
                </div>

            </van-tab>

        </van-tabs>
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
            active: 0,

        }
    },
    methods: {
        goback() {
            this.$router.back()
        },
        onClick(name, title) {

        },
        getMyOrder() {

            this.$api.getMyOrder().then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })

        },

    },
    mounted() {
        this.getMyOrder()
    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.all {
    width: 90%;
    border-radius: 100px;
}

.text1 {
    width: 40px;
}

.text2 {
    color: rgb(116, 87, 87);
    font-weight: 700;
}

/deep/.van-tab {

    flex-basis: 20% !important;
}
</style>
