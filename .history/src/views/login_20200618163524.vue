<template>
<div class="box df f-column">

    <div class=" h100">
        <div class="goback b1">
            <van-icon name="arrow-left" />
        </div>
    </div>
    <div class="container df w00 j-center">

        <div class=" contents wb90  bgw h500 ">

            <div class=" j-center a-center fs20 m-t-40"> 注册 / 登录 </div>

            <div class=" m-t-20 ">
                <van-form @submit="onSubmit">

                    <van-field v-model="username" label="username" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
                    <van-field class="ps" v-model="password" type="password" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
                   <div class="df ps">
                        <div class="phoneverify">
                            <van-field class="phoneitem" v-model="phoneverify" label="短信验证码" placeholder="短信验证码" />
                        </div>
                        <div @click="clickGetVerifyCode" class="postcode"> 请发送验证码</div>
                    </div>
                    <div class="df ps">
                        <div class="phoneverify">
                            <van-field class="phoneitem" v-model="phoneverify" label="验证码" placeholder="验证码" />
                        </div>
                        <div v-html="verifyCode" @click="clickGetVerify"></div>
                    </div>

                    <div class="sub j-around  df">
                        <van-button class="wb30" round block type="primary" native-type="submit">
                            登录
                        </van-button>
                        <van-button class="wb30" round block type="warning" native-type="submit">
                            注册
                        </van-button>
                    </div>
                </van-form>
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
            username: '',
            password: '',
            phonenumber: '',
            phoneverify: '',
            verifyCode:'',
            
        }
    },
    methods: {
        onSubmit(values) {
            console.log('submit', values);
        },
        getVerify() {
            this.$api.getVerify().then(res => {
               this.verifyCode = res
            }).catch(err => {
                console.log(err);
            })
        },
        clickGetVerify(){
            this.getVerify()
        },
        clickGetVerifyCode(){

        }

    },
    mounted() {
        this.getVerify()

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.postcode{
    display: flex;
    flex-direction: column;
    justify-content: center;
    color:white;
    height: 40px;
    background: green;
    border-radius: 10px;
    font-size: 14px;
    
}
.box {
    width: 100%;
    height: 667px;

    background: url('../assets/login.jpg');

    .goback {
        width: 36px;
        height: 36px;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: #c6cfcc;
        position: relative;
        left: 10px;
        top: 10px;
    }

}

.sub {
    margin: 16px;
    margin-top: 40px !important;
}

.ps {
    margin-top: 15px;
    margin-bottom: 15px;
}
.contents{
    border-rad
}
</style>
