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
            <van-field v-model="userId" label="用户名" />
            <!-- 输入手机号，调起手机号键盘 -->
            <van-field v-model="nickName" type="tel" label="昵称" />
            <!--性别-->
            <div class="sex">
                <div class="df">
                    <div>性别:</div>
                    <div class="m-l-10">
                        <van-radio-group v-model="radio" direction="horizontal">
                            <van-radio name="n">男</van-radio>
                            <van-radio name="2">女</van-radio>
                        </van-radio-group>
                    </div>
                </div>
            </div>
            <van-field v-model="number" type="number" label="出生年月" />
            

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
            userId:'',
            nickName:'',
            userId:'',
            userId:'',


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
.sex{
    margin-left:15px;
    margin-top: 10px;
    margin-bottom:10px;
}
.text_box {
    padding: 10px;

}
.van-cell__title{
    font-size: 18px !important;
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
