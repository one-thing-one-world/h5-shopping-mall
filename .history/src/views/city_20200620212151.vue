<template>
<div class="box">

    <div class="top_fixed">

        <div class="box_top">
            <div class="tops h30  df">
                <div class="ccc top_title_left " @click="gohome">
                    <van-icon name="arrow-left" />
                </div>
                <div class="ccc top_title_right">城市列表</div>
            </div>
            <div class="inp">
                <van-search v-model="value" placeholder="请输入搜索关键词" />
            </div>
            <div v-if="value!==''">

                <div class="item_city" v-for="(item,index) in caicai" :key="index">

                    <div @click="gotohome(item.name)">{{item.name}}</div>

                </div>
            </div>
        </div>

    </div>
    <div class=" vanbox m-l-10" v-if="value==''">
        <div>

            <div>
                <div class="fs20">当前城市</div>
                <div v-if="position_city!==''" class="currentcity m-l-10 m-t-20 ccc">{{position_city}}</div>
                <div v-if="position_city===''" class="currentcity m-l-10 m-t-20 ccc">定位中..</div>

            </div>

            <div class="underline m-t-10"></div>

            <div>
                <div class="fs20 m-t-10">热门城市</div>
                <div class="hotbox  ">
                    <div class="hotcity" v-for="(item,index) in four" :key="index">
                        <div @click="" class="hot_item ccc">{{item.name}}</div>
                    </div>
                </div>
            </div>

        </div>

        <van-index-bar>
            <div v-for="(item,index) in two" :key="index">

                <van-index-anchor :index='item' />

                <div @click="selectSomeCity(item1,index1)" v-for="(item1,index1) in three[index]" :key="index1">
                    <van-cell :title='item1.name' />
                </div>

            </div>
        </van-index-bar>
    </div>

</div>
</template>

<script>
import axios from 'axios'
import city from './lib/city.js'
import BScroll from 'better-scroll'
export default {
    name: '',
    props: {},
    components: {

    },
    data() {
        return {
            citys: [],
            value: '',
            one: '',
            two: '',
            three: '',
            four: '',
            come: '',
            cai: [],
            caicai: [],
            citysss: '',

        }
    },
    methods: {
        selectSomeCity(a, b) {

        },
        gotohome(a) {
           
            this.$store.commit('setPosition_city', a)
            this.$router.push({
                name: 'home',
               
            })

        },

        gohome(a) {
            this.$router.push({
                name: 'home'
                
            })

        },
        getSomeCity() {
            let _this = this
            AMap.plugin('AMap.Geolocation', function () {
                var geolocation = new AMap.Geolocation({
                    // 是否使用高精度定位，默认：true
                    enableHighAccuracy: true,
                    // 设置定位超时时间，默认：无穷大
                    timeout: 10000,
                    // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
                    buttonOffset: new AMap.Pixel(10, 20),
                    //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                    zoomToAccuracy: true,
                    //  定位按钮的排放位置,  RB表示右下
                    buttonPosition: 'RB'
                })

                geolocation.getCurrentPosition()
                AMap.event.addListener(geolocation, 'complete', onComplete)
                AMap.event.addListener(geolocation, 'error', onError)

                function onComplete(data) {
                    // data是具体的定位信息
                    _this.citysss = data.addressComponent.city
                    _this.$store.commit('setPosition_city', _this.citysss)
                   
                }

                function onError(data) {
                    // 定位出错
                }
            })

        }

    },
    mounted() {

       
        this.citys = city

        //this is obj{A:[],b:[],c:[]}

        this.one = this.citys.data.cities
        this.two = Object.keys(this.citys.data.cities)
        this.three = Object.values(this.citys.data.cities)
        this.four = this.citys.data.hotCities

        this.getSomeCity()

    },
    watch: {

        'value'(val) {
            if (val !== "") {
                
                this.cai = this.three.flat(1)
                this.caicai = this.cai.filter((item, index) => {
                    return JSON.stringify(item).includes(val) === true
                })

            }

        }
    },
    computed: {

        position_city() {
            return this.$store.state.position_city
        }
    }
}
</script>

<style lang="scss" scoped>
.item_city {
    margin-top: 10px;
    margin-left: 20px
}

.vanbox {
    margin-top: 100px;

}

.top_fixed {

    position: fixed;
    top: 0;
    z-index: 99999;
    background: white;

}

.hotbox {
    width: 375px;
    padding: 10px 0px;
    display: flex;
    flex-wrap: wrap;
}

.hotcity {
    width: 25%;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 20px;

}

.hot_item {
    border: 1px solid rgb(177, 170, 170);
    padding: 5px 0px;
}

.underline {
    border: 1px solid #dadcdf;
    border-top: 0px solid white;

}

// .right_eng {

//     color: skyblue;
//     position: fixed;
//     right: 5px;
//     top: 70px;
// }

.currentcity {
    border: 1px solid rgb(177, 170, 170);
    padding: 5px 0px;
    width: 90px;

    border: 1px solid rgb(177, 170, 170);
    margin-left: 20px;
}

.tops {
    border-bottom: 1px solid gray;
    padding: 8px 0;
    font-size: 22px;

    .top_title_left {
        width: 40px;

    }

    .top_title_right {
        width: 335px;
    }
}

.inp {
    padding: 0 10px;
}
</style>
