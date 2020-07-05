<template>
<div>

    <div class="top df h50 ">

        <div class="goback ccc " @click="goback">
            <van-icon name="arrow-left" />
        </div>

        <div class="ccc fs18 w300 text2">个人设置</div>

    </div>

    <div>

        <div>
            github
        </div>
        <div>
            头像
        </div>

        <div class="text_box 飞速0">

            <!-- 输入任意文本 -->
            <van-field v-model="text" label="github" />
            <!-- 输入手机号，调起手机号键盘 -->
            <van-field v-model="tel" type="tel" label="手机号" />
            <!-- 允许输入正整数，调起纯数字键盘 -->
            <van-field v-model="digit" type="digit" label="整数" />
            <!-- 允许输入数字，调起带符号的纯数字键盘 -->
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
.text_box{
    padding:10px;
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
