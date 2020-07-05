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
            <div class="h80 b1 df j-bettween a-center" v-if="userInfo">
                <div>头像</div>
                <div class="pic m-r-30"><img :src="userInfo.avatar" alt=""></div>
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
                    <div class="m-l-30">
                        <van-radio-group v-model="radio" direction="horizontal">
                            <van-radio name="男">男</van-radio>
                            <van-radio name="女">女</van-radio>
                        </van-radio-group>
                    </div>
                </div>
            </div>

            <div >
                <div @click="selectTime" class="df fs18 time">
                    <div>年月日: &nbsp;</div>
                    <div class="m-l-2">

                       {{year}}年{{month}}月{{day}}日

                    </div>
                </div>

                <van-action-sheet v-model="show" title="请选择时间">
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
import dayjs from 'dayjs'
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
            month: '',
            day: '',
            minDate: new Date(2020, 0, 1),
            maxDate: new Date(2025, 10, 1),
            currentDate: new Date(),
            show: false,
            userInfo: null,

        }
    },
    methods: {
        selectTime() {
            this.show = !this.show
        },
        goback() {
            this.$router.back()
        },
        getQueryUser() {
            this.$api.getQueryUser().then(res => {
                this.userInfo = res.userInfo
                this.year = dayjs(this.currentDate).format("YYYY")
                this.month = dayjs(this.currentDate).format("MM")
                this.day = dayjs(this.currentDate).format("DD")
                console.log(this.day);
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
.time{
    
    margin-top: 20px;
    margin-left: 15px;
    
}
.pic {
    width: 40px;
    height: 40px;
}

.pic img {
    width: 100%;
    height: 100%;
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
