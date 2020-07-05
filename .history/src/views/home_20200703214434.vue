<template>
<div>

    <div>
        <top @send='send' @sends='sends'></top>
    </div>

    <div class="search_container " v-if="searchData.length>0">
        <div class="swapFruit" ref="swapFruit">
            <div class="content">
                <div class=" df j-center" v-for="(item,index) in searchData2" :key="index">

                    <div @click="gotoDetail(item.id)" class="search_box df a-center  h40">{{item.name}}</div>

                </div>
            </div>
        </div>
    </div>

    <div v-else>

        <div class="container" ref="container">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <div class="content">
                    <div>
                        <banner v-if="slides.length>0" :slides='slides'></banner>
                    </div>
                    <div>
                        <homecata v-if="category.length>0" :category='category' :pic='pic'></homecata>
                    </div>

                    <div>
                        <homere v-if="recommend.length>0" :recommend='recommend'></homere>
                    </div>

                    <div>
                        <floor1 v-if="floor11.length>0" :floor11='floor11' :floorName='floorName'></floor1>
                    </div>
                    <div>
                        <floor2 v-if="floor22.length>0" :floor22='floor22' :floorName='floorName'></floor2>
                    </div>
                    <div>
                        <floor3 v-if="floor33.length>0" :floor33='floor33' :floorName='floorName'></floor3>
                    </div>
                    <div>
                        <hotgoods v-if="hotgoodss.length>0" :hotgoodss='hotgoodss'></hotgoods>
                    </div>

                </div>
            </van-pull-refresh>
        </div>

    </div>
</div>
</template>

<script>
import {
    Toast
} from 'vant'

import BScroll from 'better-scroll'
import top from '../components/home/top.vue'
import banner from '../components/home/banner.vue'
import homecata from '../components/home/homecata.vue'
import homere from '../components/home/homere.vue'
import floor1 from '../components/home/floor1.vue'
import floor2 from '../components/home/floor2.vue'
import floor3 from '../components/home/floor3.vue'
import hotgoods from '../components/home/hotgoods.vue'

export default {
    name: '',
    props: {},
    components: {
        top,
        banner,
        homecata,
        homere,
        floor1,
        floor2,
        floor3,
        hotgoods,

    },
    data() {
        return {
            isLoading: false,
            slides: [],
            category: [],
            pic: '',
            recommend: [],
            floor11: [],
            floor22: [],
            floor33: [],
            floorName: null,
            hotgoodss: [],
            searchData: '',
            searchData2: [],

        }
    },
    methods: {
        
        highColor(str, value){
             const replaceReg = new RegExp(value, 'g');
                const replaceString = `<span style='color:red'>${value}</span>`
                str = str.replace(replaceReg, replaceString);
                return str

        },
        gotoDetail(a) {

            this.$router.push({
                name: 'detail',
                query: {
                    id: a
                }
            })
            console.log(a);

        },
        sends(data) {
            this.searchData2 = data

            console.log(this.searchData2)
        },
        send(data) {
            this.searchData = data
        },
        onRefresh() {
            setTimeout(() => {
                Toast('刷新成功');
                this.isLoading = false;

            }, 1000);
        },
        getRecommend() {
            this.$api.getRecommend().then(res => {

                this.slides = res.data.slides
                // console.log(this.slides);
                this.category = res.data.category
                this.pic = res.data.advertesPicture.PICTURE_ADDRESS
                this.recommend = res.data.recommend
                this.floor11 = res.data.floor1
                this.floor22 = res.data.floor2
                this.floor33 = res.data.floor3
                this.floorName = res.data.floorName
                this.hotgoodss = res.data.hotGoods
                console.log(res);
                // this.$store.commit('setListCategory', this.category)
                localStorage.setItem('somedata', JSON.stringify(this.category))

            }).catch(err => {
                console.log(err)
            })
        },
        judge() {
            let _this = this

            this.time1 = setTimeout(() => {
                new BScroll(_this.$refs.container, {
                    scrollY: true,
                    click: true
                })

            }, 2000);

            this.timer2 = setTimeout(() => {

                new BScroll(_this.$refs.swapFruit, {
                    scrollY: true,
                    click: true
                })
            }, 2000);

        }

    },
    mounted() {
        //   this.cityname =  this.$route.params.cityname
        //   console.log(this.cityname);

        // this.judge()
        //输出：修改后的值
        new BScroll(this.$refs.container, {
            scrollY: true,
            click: true
        })
        // new BScroll(this.$refs.swapFruit, {
        //     scrollY: true,
        //     click: true
        // })

        this.getRecommend()

    },
    watch: {
        searchData(val) {
            let a = this.highColor(this.searchData,JSON.stringify(this.searchData2))
            this.JSON.parse(a)
        },
        

    },
    computed: {
        // listCategory(){
        //     return this.$store.state.listCategory
        // }

    }
}
</script>

<style lang="scss" scoped>
.search_container {
    background: rgb(243, 242, 242);

}

.swapFruit {
    height: 550px;
    overflow: hidden;
}

.search_box {
    width: 96%;
    background: white;
    border-top: 1px solid rgb(243, 242, 242);
    border-bottom: 1px solid rgb(243, 242, 242);
}

.top_left {

    background: #F0F0EE;
}

.container {
    overflow: hidden;
    height: 556px;
}
</style>
