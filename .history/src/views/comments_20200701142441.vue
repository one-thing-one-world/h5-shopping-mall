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
    <div class="comment_box">
        <div v-if="flag===0" class="a-center f-column">

            <div class="df  pic_under_box " v-for="(item,index) in list" :key="index">
                <div class="pic">
                    <img :src="item.image_path" alt="">
                </div>
                <div class="df f-column j-around ">
                    <div>
                        {{item.name}}
                    </div>

                    <div class=" j-end">
                        <div @click="goToComment(item,index)" class="comments_pic  ccc">评价晒图</div>
                    </div>

                </div>
                <div class="pic_under">
                </div>
            </div>

        </div>

        <div v-if="flag===1" class="a-center f-column">

            <div class="df  pic_under_box " v-for="(item,index) in list2" :key="index">
                <div class="pic">
                    <img :src="item.goods[0].image_path" alt="">
                </div>
                <div class="df f-column j-around ">
                    <div>
                        {{item.goods[0].name}}
                    </div>

                    <div class=" j-end">
                        <div @click="goToComment(item,index)" class="comments_pic look ccc">查看评价</div>
                    </div>

                </div>
                <div class="pic_under">
                </div>
            </div>
            <div v-if="list">
                <div>暂无数据</div>
                <div>下面没有内容了</div>
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
            list2: [],

        }
    },
    methods: {
        goback() {
            this.$router.push({name:'mine'})
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
        },
        getAlreadyEvaluated() {
            this.$api.getAlreadyEvaluated().then(res => {
                this.list2 = res.data.list
                console.log(this.list2);
            }).catch(err => {
                console.log(err);
            })
        },
        goToComment(item, index) {
            this.$router.push({
                name: 'comment',
                query: {
                    oneItem: JSON.stringify(item)
                }
            })
        }

    },
    mounted() {
        this.getSomeData()
        this.getAlreadyEvaluated()

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.pic_under_box {
    position: relative;
    margin-bottom: 20px;
    width: 90%;
}

.pic_under {
    position: absolute;
    top: 90px;
    left: 0px;
    width: 100%;
    height: 2px;
    background: rgb(240, 229, 229);
}

.comments_pic {
    width: 80px;
    color: red;
    border: 2px solid red;
    border-radius: 10px;
    letter-spacing: 1px;
    font-weight: 700;

}

.comment_box {
    margin-top: 30px;
}

.pic {
    width: 80px;
    height: 80px;
}

.pic img {
    width: 100%;
    height: 100%;
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
    transition: all 0.8s;
}

.gocome {
    transform: translateX(0px);
    transition: all 0.8s;
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

.look {
    border: 2px solid rgb(216, 211, 211);
    color: rgb(216, 211, 211);
}
</style>
