<template>
<div class="box">
   
    <div class="tops h30  df">
        <div class="ccc top_title_left " @click="gohome">
            <van-icon name="arrow-left" />
        </div>
        <div class="ccc top_title_right">城市列表</div>
    </div>
    <div class="inp">
        <van-search v-model="value" placeholder="请输入搜索关键词" />
    </div>
    <div class="allCity">

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
                    <div class="hot_item ccc">{{item.name}}</div>
                </div>
            </div>
        </div>

        <!-- <div>
        <div v-for="(item,index) in this.two" :key="index">
          {{item}}
        </div>
      </div> -->

        <div class="m-l-10 m-t-20">
           
            <van-index-bar>

                <div v-for="(item,index) in two" :key="index">

                    <van-index-anchor :index='item' />

                    <div  v-for="(item1,index1) in three[index]" :key="index1">
                        <van-cell :title='item1.name' />
                    </div>

                </div>

               
            </van-index-bar>
        </div>

        <div>

        </div>

    </div>
</div>
</template>

<script>
import axios from 'axios'
import city from './lib/city.js'
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
            come: ''

        }
    },
    methods: {

        gohome() {
            this.$router.push({
                name: 'home'
            })

        }

    },
    mounted() {
        //  axios.get('./city.json').then(res=>{
        //   this.citys = res.data
        //  }).catch(err=>{
        //    console.log(err)
        //  })

        //js里面的城市
        this.citys = city

        console.log(this.citys.data.hotCities)

        console.log(this.citys.data.cities)
        this.one = this.citys.data.cities
        this.two = Object.keys(this.citys.data.cities)
        this.three = Object.values(this.citys.data.cities)
        this.four = this.citys.data.hotCities

        console.log(this.two);
        console.log(this.three);

    },
    watch: {
        'position_city'(val) {
            console.log(val);
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

.box {
    position: relative;
}

.right_eng {

    color: skyblue;
    position: fixed;
    right: 5px;
    top: 70px;
}

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
