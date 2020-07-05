<template>
<div>
    <div class="box">

       <div></div>

        <div class="bottom b1 df">

            <div class="bottom_left df b1">
                <div>合计</div>

                <div v-if="!id"></div>
                <div v-else>￥{{goodsOne.present_price*value}}</div>
            </div>
            <div class="submitOrder">提交订单</div>

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
            shopList: [],
            goodsOne: '',
            value: '',
        }
    },
    methods: {
        goback() {
            history.go(-1)
        },
        getCard() {
            this.$api.getCard().then(res => {
                this.shopList = res.shopList
                console.log(res);

            }).catch(err => {

                console.log(err)

            })
        },
        getGoodsOne() {
            this.$api.getGoodsOne(this.id).then(res => {
                console.log(res);
                this.goodsOne = res.goods.goodsOne
            }).catch()
        }
    },
    mounted() {
        this.id = this.$route.query.id
        this.value = this.$route.query.value

        this.getCard()
        this.getGoodsOne()
    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.box {
    position: relative;
}

.bottom {
    position: absolute;

    z-index: 9999;

    .count {
        color: gray;
    }

    .pic {
        width: 80px
    }

    .top {
        border-bottom: 1px solid rgb(180, 176, 176);
    }

    .pic_box {
        padding: 6px 5px 6px 16px;
        margin: 8px 0px;
        background: #FAFAFA;
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
