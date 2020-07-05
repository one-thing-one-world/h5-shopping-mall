<template>
<div>

    <div class="top  h40 ccc">
        <div>会员中心</div>
    </div>

    <div class="box">

        <div class="df  j-end">

            <div class="setting ccc ">
                <van-icon name="setting" />
            </div>

        </div>
        <div class="ccc ">
            <div class="pic "><img src="../../assets/ssw.jpg" alt=""></div>
        </div>
        <div class="" v-if="users">

            <div class=" username ccc">
                欢迎您:{{users}}
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

    <div>

        <div class="df">
            <div class="f1 b1 item" v-for="(item,index) in list1" :key="index">
                <div>
                    <div class="item_icon ccc">
                        <van-icon :name=item.name />
                    </div>
                    <div class=" item_text ccc">
                        {{item.text}}
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div>


        <div v-for="(item,index) in list2" :key="index">
        
            <div>
            
              <van-icon :name=item.name />
            
            </div>
            <div>
              {{}}
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
                    name: 'balance-list-o',
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
            list2:[
                {
                
                  name:'orders-o',
                  text:'全部订单'
                },
                {
                
                  name:'points',
                  text:'收藏商品'
                },
                {
                
                  name:'aim',
                  text:'地址管理'
                },
                {
                
                  name:'eye-o',
                  text:'最近浏览'
                },
            ]
        }
    },
    methods: {
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
        }

    },
    mounted() {
        this.users = localStorage.getItem('users')
    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.item_icon {
    font-size: 30px;
}

.item_text {
    margin-top: 5px;
}

.item {
    padding: 10px 0px;
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
