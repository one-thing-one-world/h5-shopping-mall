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

                        <div>

                            <div v-for="(item1,index1) in arr" :key="index1">

                                <div>
                                    
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
            aIndex: 0,
            flag: -1,
            flag1: -1,
            active: '',
            arr: [],

        }
    },
    methods: {

        selectTitle(item, index) {
            this.aIndex = index
            if (this.somedata.length > 0) {
                let id = this.somedata[index].bxMallSubDto[0].mallSubId
                console.log(id);
                this.$api.getCattagory(id).then((res) => {
                    console.log(res);
                    if (res.dataList) {
                        this.arr = res.dataList
                    }
                }).catch(err => {
                    console.log(err);
                })
                
            }
            
        },

        onClick(name, title) {
            let id = this.somedata[this.aIndex].bxMallSubDto[name].mallSubId
            console.log(id);
            this.$api.getCattagory(id).then((res) => {
                console.log(res);
                if (res.dataList) {
                    this.arr = res.dataList
                }
            }).catch(err => {
                console.log(err);
            })
          
        },
        autoGetList() {
            if (this.somedata.length > 0) {
                let id = this.somedata[0].bxMallSubDto[0].mallSubId
                console.log(id);
                this.$api.getCattagory(id).then((res) => {
                    console.log(res);
                    if (res.dataList) {
                        this.arr = res.dataList
                    }
                }).catch(err => {
                    console.log(err);
                })
                this.aIndex=0;
            }
        },
        fun() {
            if (!this.$route.query.id) {
                this.aIndex = 0
            }

        }

    },
    mounted() {
        // this.$api.getCattagory(this.somedata[0].bxMallSubDto[0].mallSubId).then((res) => {

        //     if (res.dataList) {
        //         this.arr = res.dataList
        //     }
        // }).catch(err => {
        //     console.log(err);
        // })
        

        this.somedata = JSON.parse(localStorage.getItem('somedata'))
        this.autoGetList()

        this.aIndex = localStorage.getItem('oneIndex')

        console.log(this.somedata);
        this.aIndex = this.$route.query.id
        this.fun()

        // console.log(this.somedata[0].bxMallSubDto);
        // new BScroll(this.$refs.fuck, {
        //     scrollY: true,
        //     click: true
        // })

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
.fuck {
    display: flex;
    overflow: hidden;

}

.fucker {
    display: flex;
    flex-wrap: wrap;
}

.fuckbox {
    width: 40%;
}

.box {

    display: flex;

}

.container {
    width: 300px;
    height: 500px;
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
