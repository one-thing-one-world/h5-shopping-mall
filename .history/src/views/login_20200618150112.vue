<template>
<div class="box df f-column">

    <div class=" h100">
        <div class="goback b1">
            <van-icon name="arrow-left" />
        </div>
    </div>
    <div class="container df w00 j-center">

        <div class=" contents wb90  bgw h500 ">

            <div class=" j-center a-center fs20 m-t-20"> 注册 / 登录 </div>

            <div class=" m-t-20 ">
                <van-form @submit="onSubmit">
                    <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
                    <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
                    <div style="margin: 16px;">
                        <van-button round block type="info" native-type="submit">
                            提交
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

        }
    },
    methods: {

    },
    mounted() {

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
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

    .container {
        .contents {}
    }
}
</style>
