<template>
<div claas="relative">
    <van-nav-bar title="购物车" />
    <div>
        <van-panel>
            <template #header>
                <div class="flex j-between p-tb-10">
                    <van-checkbox v-if="flag===false" shape="square" v-model="checked" class="m-l-10" @click="changeAll">全选</van-checkbox>
                    <van-checkbox v-if="flag===true" shape="square" v-model="checked" class="m-l-10" @click="toggleAll">反选</van-checkbox>
                    <div class="flex a-column m-r-50">
                        <div>合计{{total|fixed}}</div>
                        <div>请确认订单</div>
                    </div>
                </div>
            </template>
        </van-panel>
        <div class="m-t-10 flex j-between m-b-5">
            <div></div>
            <div>
                <span class="m-r-10">
                    <van-button size="small" type="danger" @click="delItem">删除</van-button>
                </span>
                <span class="m-r-10">
                    <van-button size="small" type="danger" @click="shoppingPayment">结算</van-button>
                </span>
            </div>
        </div>
    </div>

    <div class="line absoulte"></div>
    <van-checkbox-group v-model="checkboxGroup" ref="checkboxGroup">
        <van-cell-group>
            <van-cell v-for="(item,index) in shopList" :key="index" clickable>
                <div class="flex a-center item relative">
                    <van-checkbox :name="item.name" ref="checkboxes" shape="square" v-model="item.check" @click="checkItem(item)" />
                    <div class="flex a-center m-l-10 m-b-15">
                        <div class="img">
                            <img :src="item.image_path" alt class="w100p" />
                        </div>
                        <div>
                            <div class="color-red m-b-20 F18 m-l-10">{{item.name}}</div>
                            <div class="color-red m-l-10 F18">￥{{item.mallPrice}}</div>
                        </div>
                        <van-stepper v-model="item.count" theme="round" button-size="22" disable-input class="stepper" />
                    </div>
                </div>
            </van-cell>
        </van-cell-group>
    </van-checkbox-group>
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
            checkboxGroup: [],
            count: "",
            checkAll: false,
            flag: false, //默认显示全选按钮
            checked: false,
            shoplist1: []
        };
    },
    methods: {
        changeAll() {
            this.flag = true; //点击之后 显示反选
            this.$refs.checkboxGroup.toggleAll(true); //全部选中
            this.shopList.map(item => {
                item.check = !item.check;
            });
        },
        toggleAll() {
            this.flag = false; //点击之后  显示全选
            this.$refs.checkboxGroup.toggleAll(); //全部不选中
            this.shopList.map(item => {
                item.check = false;
            });
        },
        changeItem() {
            this.checkAll = this.shopList.every(item => {
                return item.check === true;
            });
        },
        //删除
        delItem() {
            this.shopList.map((item, index) => {
                // this.shopList.splice(index,1);
                this.$api
                    .getDeleteShop(this.id)
                    .then(res => {
                        this.shopList = this.shopList.filter(function (item, index, array) {
                            return item.check === false;
                        });
                    })
                    .catch(err => {
                        console.log(err);
                    });
            });
        },
        //选择
        checkItem(item) {
            item.check = !item.check;
            // console.log(item);
            // console.log(item.check);
        },
        //结算
        shoppingPayment() {
            this.$router.push("/shoppingPayment");
        }
    },
    mounted() {
        this.id = this.$route.query.id;
        // console.log(this.id);
        this.$api
            .getShoppingCard(this.id)
            .then(res => {
                console.log(res);
                this.shopList = res.shopList;
            })
            .catch(err => {
                console.log(err);
            });
            this.$router.push({ ,qu})
    },

    watch: {},
    //计算合计
    computed: {
        total() {
            let sum = 0;
            this.shopList.map(item => {
                if (item.check === true) {
                    sum += item.mallPrice * item.count;
                    console.log(sum);
                }
            });
            return sum;
        }
    },
    //格式  两位小数
    filters: {
        fixed(val) {
            return "￥" + Number(val).toFixed(2);
        }
    }
};
</script>
