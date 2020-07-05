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
            <div class="contentbox" v-if="somedata.length>0">
                <van-tabs v-model="active" swipeable @click='onClick'>

                    <van-tab ellipsis='false' class="content" v-for="(item,index) in somedata[aIndex].bxMallSubDto" :key="index" :title="item.mallSubName">
                        <div class="contain">

                            <div class="conta">

                                <div v-for="(item1,index1) in arr" :key="index1">
                                    <img class="w75" :src="arr[index1].image" alt="">

                                </div>

                            </div>
                        </div>

                    </van-tab>

                </van-tabs>
            </div>

        </div>
    </div>
</div>
</template>

<script>
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
            active: '',
            arr: [],

        }
    },
    methods: {
        selectItem(item, index) {
            this.flag = index
        },
        selectTitle(item, index) {
            this.aIndex = index
            console.log(this.aIndex);
        },
        getList() {
            let arr = this.somedata[this.aIndex].bxMallSubDto.mallCategoryId
            arr.map((item, index) => {

            })
        },
        onClick(name, title) {
            let id = this.somedata[this.aIndex].bxMallSubDto[name].mallSubId
            console.log(id);
            this.$api.getCattagory(id).then((res) => {
                console.log(res.dataList);
                this.arr = res.dataList
            }).catch(err => {
                console.log(err);
            })
        }

    },
    mounted() {

        this.somedata = JSON.parse(localStorage.getItem('somedata'))

        this.aIndex = localStorage.getItem('oneIndex')
        console.log(this.aIndex);
        console.log(this.somedata);
        // console.log(this.somedata[0].bxMallSubDto);

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

.contain {
    width: 300px;
    height: 500px;
    border: 1px solid red;
    overflow: hidden;

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
