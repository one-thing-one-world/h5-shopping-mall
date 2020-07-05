<template>
<div>

    <div class="top df h50 ">

        <div class="goback ccc " @click="goback">
            <van-icon name="arrow-left" />
        </div>

        <div class="ccc fs18 w300 text2">个人设置</div>

    </div>

    <div>

        <div class="m-l-20">

            <div class="h50 fs18 b1 df a-center">
                github
            </div>
            <div class="h80 b1 df a-center">
                头像
            </div>
        </div>

        <div class="text_box ">

            <!-- 输入任意文本 -->
            <van-field v-model="username" label="用户名" />
            <!-- 输入手机号，调起手机号键盘 -->
            <van-field v-model="ni" type="tel" label="昵称" />
           <!--性别-->
            
            <van-field v-model="number" type="number" label="数字" />
            <!-- 输入密码 -->
            <van-field v-model="password" type="password" label="密码" />

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
            tel: '',
            text: '',
            digit: '',
            number: '',
            password: '',

        }
    },
    methods: {
        goback() {
            this.$router.back()
        }

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
.text_box {
    padding: 10px;

}

.top {
    border-bottom: 1px solid rgb(180, 176, 176);
}

.text1 {
    width: 40px;
}

.goback {
    width: 30px;
}
</style>
