<template>
<div class="box">
    <div class="right_eng">
        <div class="m-t-2" v-for="(item,index) in two" :key="index">{{item}}</div>
    </div>
    <div class="tops h30  df">
        <div class="ccc top_title_left " @click="gohome">
            <van-icon name="arrow-left" />
        </div>
        <div class="ccc top_title_right">城市列表</div>
    </div>
    <div class="inp">
        <van-search v-model="value" placeholder="请输入搜索关键词" />
    </div>
    <div>

    //当前城市

        <div>
            <div>当前城市</div>
            <div class="currentcity m-l-10 m-t-10 ccc">{{cit}}</div>
        </div>
        <!-- <div>
        <div v-for="(item,index) in this.two" :key="index">
          {{item}}
        </div>
      </div> -->

        <div class="m-l-10 m-t-20">
            <div v-for="(item,index) in two" :key="index">

                <div class="m-b-10">{{item}}</div>

                <div>

                    <div class="cityList m-b-10" v-for="(item1,index1) in three[index]" :key="index1">
                        {{item1.name}}
                    </div>

                </div>
            </div>
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
            cit:'',
        }
    },
    methods: {
      gohome(){
        this.$router.push({name:'home'})
      }

    },
    mounted() {
        //  axios.get('./city.json').then(res=>{
        //   this.citys = res.data
        //  }).catch(err=>{
        //    console.log(err)
        //  })
        this.citys = city
        this.cit = this.$

        console.log(this.citys.data.cities)
        this.one = this.citys.data.cities
        this.two = Object.keys(this.citys.data.cities)
        this.three = Object.values(this.citys.data.cities)

        console.log(this.two);
        console.log(this.three);

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.box{
  position: relative;
}
.right_eng {

    color: skyblue;
    position: fixed;
    right:5px;
    top: 70px;
}

.currentcity {
    height: 28px;
    width: 80px;

    border: 1px solid rgb(177, 170, 170);
    margin-left: 10px;
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
