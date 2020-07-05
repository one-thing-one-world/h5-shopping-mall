<template>
<div>
    <div class="top">商品分内</div>
    <div class="df">

        <div class="left" v-if="somedata.length>0">
            <div class="left_text " :class="{'left_texts':index===aIndex}" @click="selectTitle(item,index)" v-for="(item,index) in somedata" :key="index">
                <div class=" w75 ccc" :class="{'left_textss':index===aIndex}">
                    <div> {{item.mallCategoryName}}</div>
                </div>
            </div>
        </div>

        <div class="container " ref="container">
            <div class="contentbox">
                <van-tabs v-model="active" scrollspy sticky ellipsis=>

                    <van-tab class="content" v-for="(item,index) in somedata[aIndex].bxMallSubDto" :key="index" :title="item.mallSubName">

                    </van-tab>

                </van-tabs>
            </div>

        </div>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: '',
    props: {

    },
    components: {

    },
    data() {
        return {
            list: [],
            somedata: [],
            aIndex: '',
            flag: -1,
            flag1: -1,

        }
    },
    methods: {
        selectItem(item, index) {
            this.flag = index
        },
        selectTitle(item, index) {
            this.aIndex = index
            console.log(this.aIndex);
        }

    },
    mounted() {

        this.somedata = JSON.parse(localStorage.getItem('somedata'))
        this.aIndex = localStorage.getItem('oneIndex')
        console.log(this.aIndex);
        console.log(this.somedata);
        // console.log(this.somedata[0].bxMallSubDto);
        new BScroll(this.$refs.container, {
            scrollX: true,
            click: true
        })

    },
    watch: {

    },
    computed: {

        oneIndex() {
            return this.$store.state.oneIndex
        }

    }
}
</script>

<style lang="scss" scoped>
.box {

    display: flex;

}





.underline {
    position: absolute;
    top: 33px;
    height: 1px !important;
    width: 60%;
    background: white;
    z-index: 99999;
}

.under {

    width: 60%;

    background: red !important;

}

.top {
    width: 375px;
    height: 40px;

    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

}

.left {

    width: 75px;

    height: 564px;

    background: #F0F0EE;

}

.left_text {
    padding-top: 5px;

    height: 30px;
    display: flex;
    align-items: center;

    justify-content: center;
}

.left_texts {
    background: white;

}

.left_textss {
    border-left: 2px solid red;

}
</style>
