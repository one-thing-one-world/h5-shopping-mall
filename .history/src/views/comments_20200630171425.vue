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

    <div class="pic_container">
        <div class="pic_box">
            <img src="../assets/evaluate.jpg" alt="">
        </div>
        <div class="line_container">

            <div class="df text_box ">
                <div @click="gocome" class="f1 text1 ccc b1">待评价</div>
                <div @click="gomove" class="f1 text1 ccc b1">已评价</div>
            </div>
            <div class="line_box">
                <div class="line" :class="{'go':flag===1,'gocome':flag===0}"></div>
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
            flag: ""

        }
    },
    methods: {
        goback() {
            history.go(-1)
        },
        gomove() {
            this.flag = 1;
        },
        gocome() {
            this.flag = 0
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
.pic_container{
    position:relative;
}
.line_container{
    position: absolute;
    bottom: -10px;
    left: 50%;
    margin-left
    
    
}
.line_box{

    position: absolute;
    bottom:0px;
    left: 30px;

}
.line {
    width: 100px;
    height: 3px;
    background: red;
}

.go {
    transform: translateX(166px);
    transition: all 1s;
}

.gocome {
    transform: translateX(0px);
    transition: all 1s;
}

.text_box {
    width: 330px;
}

.text1 {
    height: 40px;
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
