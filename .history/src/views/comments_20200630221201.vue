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

    <div class="pic_container ">
        <div class="pic_box">
            <img src="../assets/evaluate.jpg" alt="">
        </div>
        <div class="line_container">

            <div class="df text_box ">
                <div @click="waitEvolute" class="f1 text1 ccc ">待评价</div>
                <div @click="evoluted" class="f1 text1 ccc ">已评价</div>
            </div>
            <div class="line_box">
                <div class="line" :class="{'go':flag===1,'gocome':flag===0}"></div>
            </div>

        </div>

    </div>
    <div class="b1">
        <div v-if="flag===0">

            <div v-for="(item,index) in list" :key="index">
                <div class="pic">
                    <img :src="item.image_path" alt="">
                </div>
                <div>
                    <div>
                        {{item.name}}
                    </div>

                    <div>

                    </div>

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
            flag: 0,
            list: [],

        }
    },
    methods: {
        goback() {
            history.go(-1)
        },
        waitEvolute() {
            this.flag = 0;
        },
        evoluted() {
            this.flag = 1
        },
        getSomeData() {
            this.$api.getTobeEvaluated().then(res => {
                console.log(res);
                this.list = res.data.list
            }).catch(err => {
                console.log(err);
            })
        }

    },
    mounted() {
        this.getSomeData()

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.pic{
    width:50px;
    height:50px;
}
.img img{
    width:100%;
    height:100%;
}
.pic_container {
    position: relative;
}

.line_container {
    position: absolute;
    bottom: -15px;
    left: 22px;
    z-index: 999;
    background: white;
    border-radius: 12px;
    box-shadow: 0 0 3px gray;

}

.line_box {

    position: absolute;
    bottom: 0px;
    left: 30px;

}

.line {
    width: 100px;
    height: 3px;
    background: rgb(202, 5, 5);
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
