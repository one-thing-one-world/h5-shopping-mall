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
                <div>头像</div>
                <div class="pic"><img :src="userInfo.avatar" alt=""></div>
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
                            <van-radio name="男">男</van-radio>
                            <van-radio name="女">女</van-radio>
                        </van-radio-group>
                    </div>
                </div>
            </div>

            <div>
                <div class="df">
                    <div>年月日:</div>
                    <div>
                        {{this.currentDate}}
                    </div>
                </div>

                <van-action-sheet v-model="show" title="标题">
                    <div class="content">
                        <van-datetime-picker v-model="currentDate" type="date" title="选择年月日" :min-date="minDate" :max-date="maxDate" />
                    </div>
                </van-action-sheet>

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
            userId: '',
            nickName: '',
            radio: '男',
            userId: '',
            year: '',
            minDate: new Date(2020, 0, 1),
            maxDate: new Date(2025, 10, 1),
            currentDate: new Date(),
            show: false,
            userInfo:null,

        }
    },
    methods: {
        goback() {
            this.$router.back()
        },
        getQueryUser() {
            this.$api.getQueryUser().then(res => {
                this.userInfo = res.userInfo
                console.log(this.userInfo);
            }).catch(err => {
                console.log(err);
            })
        },
        

    },
    mounted() {
        this.getQueryUser()

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.pic{
    width:100px;
    height: 100px;
}
.sex {
    margin-left: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.text_box {
    padding: 10px;

}

.van-cell__title {
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
