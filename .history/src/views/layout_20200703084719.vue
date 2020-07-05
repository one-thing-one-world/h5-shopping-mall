<template>
<div>

    <div class="container" ref="container">
        <div class="box">
            <div class="content">
                <router-view>

                </router-view>
            </div>
            <div class="bottomnav  fs14 df">

                <div :class="{'one':flag===1}" class="homelayout f1 df  a-center j-center f-column " @click="gotoHome">
                    <div class="fs25 ">
                        <van-icon name="wap-home-o" />
                    </div>
                    <div class="text">首页</div>

                </div>
                <div :class="{'one':this.flag===2}" class="catalayout f1 df a-center j-center f-column" @click="gotoCata">
                    <div class="fs25">
                        <van-icon name="wap-nav" />
                    </div>
                    <div class="text">分类</div>
                </div>
                <div :class="{'one':flag===3}" class="shopcarlayout f1 df a-center j-center f-column " @click="gotoShopCar">
                    <div class="fs25 num_container">
                        <van-icon name="cart" />

                        <div v-if="users">
                            <div v-if="shopList.length!==0" class="num_box">

                                <div class="num ccc">

                                    {{shopList.length}}

                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="text">购物车</div>

                </div>
                <div :class="{'one':flag===4}" class="minelayout f1 df a-center j-center f-column" @click="gotoMine">
                    <div class="fs25">
                        <van-icon name="manager-o" />
                    </div>
                    <div class="text">我的</div>
                </div>

            </div>
        </div>
    </div>

</div>
</template>

<script>
import axios from "axios"
// import BScroll from 'better-scroll'
export default {
    name: '',
    props: {},
    components: {

    },
    data() {
        return {
            flag: 0,
            shopList: [],
            users: '',

        }
    },
    methods: {
        getCard() {
            this.$api.getCard().then(res => {
                this.shopList = res.shopList
                console.log(res);

            }).catch(err => {

                console.log(err)

            })
        },
        gotoHome() {
            if (this.$route.path !== '/') {
                this.$router.push({
                    name: 'home'
                })
            }
            this.flag = 1
        },
        gotoCata() {

            if (this.$route.path !== '/cata') {
                this.$router.push({
                    name: 'cata'
                })
            }
            this.flag = 2

        },
        gotoShopCar() {
            if (this.$route.path !== '/shop') {
                this.$router.push({
                    name: 'shop'
                })
            }
            this.flag = 3

        },
        gotoMine() {

            if (this.$route.path !== '/mine') {
                this.$router.push({
                    name: 'mine'
                })
            }
            this.flag = 4

        },

        autoGetNavColor() {
            let one = this.$route.path
            if (one === '/') {
                this.flag = 1

            } else if (one === '/cata') {
                this.flag = 2
            } else if (one === '/shop') {
                this.flag = 3
            } else if (one === '/mine') {
                this.flag = 4
            }

        }

    },
    mounted() {
        this.autoGetNavColor()

        this.getCard()
        this.users = localStorage.getItem('users')
        localStorage.setItem('arrays',[])

        // new BScroll(this.$refs.container, {
        //     scrollY: true,
        //     click: true
        // })

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.num_container {
    position: relative;
}

.num_box {
    font-size: 14px;
    position: absolute;
    z-index: 9999;
    border: 1px solid red;
    top: -7px;
    right: -9px;
    width: 15px;
    height: 15px;
    border-radius: 50% 50%;
    color: white;
    background: red;

}

.one {
    color: skyblue;
}

.text {
    position: relative;
    bottom: 5px;
}

.bottomnav {
    color: #666666;
    letter-spacing: 1px;

}

.content {
    height: 615px;

}
</style>
