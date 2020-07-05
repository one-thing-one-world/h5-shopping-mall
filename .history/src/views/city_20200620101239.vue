<template>
<div class="box">

    div


    <div class="m-l-10 m-t-20">
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
            come: ''

        }
    },
    methods: {
        selectSomeCity(a, b) {

        },

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
