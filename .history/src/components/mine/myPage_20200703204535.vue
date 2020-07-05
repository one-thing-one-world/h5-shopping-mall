<template>
<div>

    <div class="top  h40 ccc">
        <div>会员中心</div>
    </div>

    <div class="box">

        <div class="df  j-end">

            <div @click="gosetting" class="setting ccc ">
                <van-icon name="setting" />
            </div>

        </div>
        <div class="ccc ">
            <div class="pic "><img src="../../assets/ssw.jpg" alt=""></div>
        </div>
        <div class="" v-if="users">

            <div v-else class=" username ccc">
                欢迎您:{{users}}
                
            </div>
             <div v-if="userinformation" class=" username ccc">
                欢迎您:{{userinformation.}}
                
            </div>
            
            <div class=" ccc">

                <div class="text1 ccc" @click="logOut">退出登录</div>

            </div>

        </div>

        <div class="" v-else>

            <div class=" username ccc">
                您还没有登录
            </div>
            <div class=" ccc">

                <div class="text2">
                    <van-button @click="gotoLogin" type="primary"><span class="btn">请登录</span></van-button>
                </div>

            </div>

        </div>

    </div>

    <div class="box1">

        <div class="df">
            <div class="f1  item" @click="gotoSomePage(item,index)" v-for="(item,index) in list1" :key="index">
                <div>
                    <div class="item_icon ccc">
                        <van-icon :name=item.name />
                    </div>
                    <div class=" item_text ccc">
                        {{item.text}}
                    </div>
                </div>

                <div class="ccc  comments_num" v-if="index===3&&list.length>0">
                    <div>{{list.length}}</div>
                </div>

            </div>

        </div>

    </div>

    <div class="box2">

        <div @click="goSomePage(item,index)" class="box2_container" v-for="(item,index) in list2" :key="index">

            <div class="item2_box  df j-bettween">
                <div class="df">

                    <div class="item2_icon ccc">
                        <van-icon :name=item.name />
                    </div>
                    <div class="item2_text ccc">
                        {{item.text}}
                    </div>
                </div>
                <div>
                    <div class="arrow ccc">
                        <van-icon name="arrow" />
                    </div>
                </div>

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
            list1: [{

                    name: 'send-gift-o',
                    text: '待付款',
                },
                {
                    name: 'balance-list-o',
                    text: '待发货',
                }, {

                    name: 'logistics',

                    text: '待收货',
                }, {

                    name: 'comment-o',
                    text: '评价',
                },
                {

                    name: 'points',
                    text: '已完成',

                }
            ],
            list2: [{

                    name: 'orders-o',
                    text: '全部订单'
                },
                {

                    name: 'points',
                    text: '收藏商品'
                },
                {

                    name: 'aim',
                    text: '地址管理'
                },
                {

                    name: 'eye-o',
                    text: '最近浏览'
                },
            ],
            list: [],
            userinformation: ''
        }
    },
    methods: {
        gosetting() {
            this.$router.push({
                name: 'personalDatas'
            })
        },

        gotoSomePage(item, index) {
            console.log(item);
            if (index === 3) {
                this.$router.push({
                    name: 'comments',
                    params: {
                        oneItem: JSON.stringify(item)
                    }
                })
            }
            if (index === 4) {
                this.$router.push({
                    name: 'myOrder',
                    query: {
                        yy: 4
                    }
                })
            }

        },
        logOut() {
            this.$api.getLoginOut({}).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
            localStorage.removeItem('users')
            this.users = localStorage.getItem('users')
        },
        gotoLogin() {
            this.$router.push({
                name: 'login'
            })
        },
        getSomeData() {
            this.$api.getTobeEvaluated().then(res => {
                console.log(res);
                this.list = res.data.list
            }).catch(err => {
                console.log(err);
            })
        },
        goSomePage(item, index) {
            if (index === 0) {
                this.$router.push({
                    name: 'myOrder'
                })
            }
            if (index === 1) {
                this.$router.push({
                    name: 'myCollect'
                })
            }
            if (index === 2) {
                this.$router.push({
                    name: 'adress'
                })
            }
            if (index === 3) {
                this.$router.push({
                    name: 'lookThrough'
                })
            }
        },
        getInformation() {
            if (localStorage.personList) {
                this.userinformation = JSON.parse(localStorage.getItem('personList'))
                console.log(this.userinformation);
            }

        }

    },
    mounted() {
        this.users = localStorage.getItem('users')
        this.getSomeData()
        this.getInformation()

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.box1,
.box2 {
    letter-spacing: 1px;
}

.arrow {
    margin-right: 10px;
    font-weight: 900;
}

.item2_text {
    margin-left: 6px;
    color: #666666;
}

.box2_container {
    margin-bottom: 20px;

}

.item2_box {
    padding: 10px 0px;
    border-top: 1px solid #dfc9c9;
    border-bottom: 1px solid #dfc9c9;
}

.item2_icon {
    margin-left: 16px;
    font-size: 20px;
}

.item_icon {
    font-size: 30px;
}

.item_text {
    margin-top: 5px;
}

.item {
    color: #666666;
    padding: 10px 0px;
    position: relative;
}

.comments_num {
    border-radius: 50% 50%;
    position: absolute;
    top: 0;
    right: 8px;
    font-size: 14px;
    width: 20px;
    height: 20px;
    background: red;
    color: white;
}

.box {
    background: #F4267C;
    color: white;
    letter-spacing: 2px;
    height: 220px;
}

.btn {
    letter-spacing: 2px;
    height: 26px;
}

.text1 {

    height: 30px;
    letter-spacing: 2px;
    font-size: 20px;
    margin-bottom: 20px;

}

.text2 {
    margin-top: 5px;
    margin-bottom: 20px;

}

.username {
    height: 50px;
    font-size: 22px;

}

.pic {

    width: 70px;
    height: 70px;
    border-radius: 50% 50%;
    overflow: hidden;

}

.pic img {
    width: 100%;
    height: 100%;
}

.top {

    border-bottom: 2px solid rgb(201, 198, 198);
    font-size: 22px;
    letter-spacing: 6px;
    color: rgb(32, 23, 23);
}

.setting {

    color: white;
    font-size: 30px;
    margin-top: 20px;
    margin-right: 20px;
}
</style>
