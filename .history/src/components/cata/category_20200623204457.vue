<template>
<div>
    <div class="top">商品分</div>
    <div class="df">
        <div class="left" v-if="somedata.length>0">
            <div class="left_text" :class="{'left_texts':index===aIndex}" @click="selectTitle(item,index)" v-for="(item,index) in somedata" :key="index">
                <div class="w75 ccc" :class="{'left_textss':index===aIndex}">
                    <div>{{item.mallCategoryName}}</div>
                </div>
            </div>
        </div>

        <div class="container" ref="container">
            <div class="contentbox" v-if="somedata.length>0">
                <van-tabs v-model="active" swipeable @click="onClick">
                    <div class="bo" ref="wrap">
                        <div class="bobo">
                            <van-tab ellipsis="false" class="content" v-for="(item,index) in somedata[aIndex].bxMallSubDto" :key="index" :title="item.mallSubName">

                                <div v-for="(item1,index1) in arr" :key="index1">
                                    <div class="line df">
                                        <div class="m-l-10">
                                            <img class="w75 g1" :src="arr[index1].image"  />
                                        </div>

                                        <div>
                                            <div class="m-l-10 cred m-t-10">{{item1.name}}</div>

                                            <div class="m-l-10 m-t-10">
                                                <span class="text1 cred">{{item1.present_price}}</span>
                                                <span class="text2">{{item1.orl_price}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </van-tab>
                        </div>

                    </div>
                </van-tabs>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import BScroll from "better-scroll";
export default {
    name: "",
    props: {},
    components: {},
    data() {
        return {
            list: [],
            somedata: [],
            aIndex: 0,
            anIndex:0,
            
            flag: -1,
            flag1: -1,
            active: "",
            arr: []
        };
    },
    methods: {
        selectTitle(item, index) {
            this.aIndex = index;
            
            
            if (this.somedata.length > 0) {
                let id = this.somedata[this.aIndex].bxMallSubDto[0].mallSubId;
                
                console.log(id);
                this.$api
                    .getCattagory(id)
                    .then(res => {
                        console.log(res);
                        if (res.dataList) {
                            this.arr = res.dataList;
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        },

        onClick(name, title) {
            let id = this.somedata[this.aIndex].bxMallSubDto[name].mallSubId;
            console.log(id);
            this.$api
                .getCattagory(id)
                .then(res => {
                    console.log(res);
                    if (res.dataList) {
                        this.arr = res.dataList;
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },
        autoGetList() {

            if (this.somedata.length > 0) {
                let id = this.somedata[0].bxMallSubDto[0].mallSubId;
                console.log(id);
                this.$api
                    .getCattagory(id)
                    .then(res => {
                        console.log(res);
                        if (res.dataList) {
                            this.arr = res.dataList;
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    });
                
                
            }
        },
        fun() {
            if (!this.$route.query.id) {
                this.aIndex = 0;
            }
        }
    },
    mounted() {
        

        this.somedata = JSON.parse(localStorage.getItem("somedata"));
        console.log(this.somedata);
        this.autoGetList();

        // this.aIndex = localStorage.getItem("oneIndex");

        this.aIndex = this.$route.query.id;
        this.fun();
        this.$nextTick(() => {
            new BScroll(this.$refs.wrap, {
                scrollY: true,
                click: true
            });
        });
    },
    watch: {},
    computed: {
        oneIndex() {
            return this.$store.state.oneIndex;
        }
    }
};
</script>

<style lang="scss" scoped>
.bo {
    overflow: hidden;
    height: 516px;
}

.line {
    padding: 7px 0px;
    border-bottom: 1px solid rgb(206, 197, 197);
}

.text1 {
    font-size: 17px;
}

.text2 {
    font-size: 14px;
    margin-left: 12px;
    color: gray;
    text-decoration: line-through;
}

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

    background: #f0f0ee;
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
