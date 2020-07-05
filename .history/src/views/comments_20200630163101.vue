<template>
<div>
    <div class="top df h50">
        <div class="ccc text1">
            <div @click="goback">
                <van-icon name="arrow-left" />
            </div>
        </div>

        <div class="ccc w300 text2">评价中心</div>
    </div>

    <div>
        <div class="pic_box">
            <img src="../assets/evaluate.jpg" alt="">
        </div>
        <div>

            <div class="df text_box ">
                <div class="f1 text1 ccc b1">待评价</div>
                <div class="f1 text1 ccc b1">已评价</div>
            </div>
            <div class="line_box">
                <div class="line" :class="{'go':flag===1}"></div>
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
            flag:""

        }
    },
    methods: {
        goback() {
            history.go(-1)
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
.line{
    width: 100px;
    height:3px;
    background:red;
}
.go{
    transform: translate(100px);
    transition: all 3s;
}
.text_box{
    width:330px;
}
.text1{
    height:40px;
}
.pic_box {
    width: 375px;
}

.pic_box img {
    width: 100%;
}

.top {
    border-bottom: 1px solid rgb(180, 176, 176);
}
</style>
