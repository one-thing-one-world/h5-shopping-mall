<template>
<div class="box df f-column">

    <div class=" h100">
        <div class="goback" @click="goback">
            <van-icon name="arrow-left" />
        </div>
    </div>
    <div class="container df w00 j-center">

        <div class=" contents wb90  bgw h500 ">

            <div class=" j-center a-center fs20 m-t-40"> 注册 / 登录 </div>

            <div class=" m-t-20 ">
               

                    <van-field v-model="nickname" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
                    <van-field class="ps" v-model="password" type="password" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
                    <div class="df ps">
                        <div class="phoneverify">
                            <van-field class="phoneitem" v-model="phoneverify" label="短信验证码" placeholder="短信验证码" />
                        </div>
                        <div @click="clickGetVerifyCode" v-if="num===30" class="postcode">请发送验证码</div>
                        <div v-if="num>0&num<30" class="postcode">{{num}}后重新获取</div>
                    </div>
                    <div class="df ps">
                        <div class="phoneverify">
                            <van-field class="phoneitem"  v-model="verify" label="验证码" placeholder="验证码" />
                        </div>
                        <div v-html="verifyCode" @click="clickGetVerify"></div>
                    </div>

                    <div class="sub j-around  df">
                        <van-button class="wb30" round block type="primary" native-type="submit" @click="login()" >
                            登录
                        </van-button>
                        <van-button class="wb30" round block type="warning" native-type="submit" @click="registerAndLogin()" >
                            注册
                        </van-button>
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
            nickname: '',
            password: '',
            phonenumber: '',
            phoneverify: '',
            verifyCode: '',
            verify:'',
            

            num: 30

        }
    },
    methods: {
        login(){
            this.$api.getLogin(this.nickname,this.password,this.verify).then(res=>{
               
                if(res.code===200){
                    console.log(res);
                this.$router.push({name:'mine'})
                }else if(res.code===(-1)){
                   this.$message.error('bu'qu')
                }
            }).catch(err=>{
                console.log(err);
            })
            
        },
        registerAndLogin(){
            this.$api.getRegister(this.nickname,this.password,this.verify).then(res=>{
                
                if(res.code===200){
                    
                this.$router.push({name:'mine'})
                }
            }).catch(err=>{
                console.log(err);
            })
        },
        goback() {

        },
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
        clickGetVerify() {
            this.getVerify()
        },

        clickGetVerifyCode() {
            this.flag = false
            this.id = setInterval(() => {
                this.num = this.num - 1
            }, 1000)
            if (this.num > 0) {
                this.flag = false

            } else {
                clearInterval(this.id)
                this.flag = true

            }

        }

    },
    mounted() {
        this.getVerify()
       
        

    },
    watch: {
        'num'(val){
            if(val===0){
                clearInterval(this.id)
                this.num = 30
            }
        }
    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.postcode {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    height: 40px;
    background: #07C160;
    padding-left: 8px;
    padding-right: 8px;

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
        background-color: #c8cecc;
        opacity: 0.6;
        position: relative;
        left: 15px;
        top: 20px;
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

.contents {
    border-radius: 20px;
    opacity: 0.9;
}
</style>
