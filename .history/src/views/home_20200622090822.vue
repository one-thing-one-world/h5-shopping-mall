<template>
<div>

    <div>
        <top></top>
    </div>
    <div class="container" ref="container">
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
                <floor1  v-if="floor11.length>0" :floor11='floor11' :floorName='floorName'></floor1>
            </div>
            
        </div>
    </div>

</div>
</template>

<script>
import BScroll from 'better-scroll'
import top from '../components/home/top.vue'
import banner from '../components/home/banner.vue'
import homecata from '../components/home/homecata.vue'
import homere from '../components/home/homere.vue'
import floor1 from '../components/home/floor1.vue'

export default {
    name: '',
    props: {},
    components: {
        top,
        banner,
        homecata,
        homere,
        floor1,
        
    },
    data() {
        return {
            slides: [],
            category:[],
            pic:'',
            recommend:[],
            floor11:[],
            floor22:[],
            floor33:[],
            floorName:null,


        }
    },
    methods: {
        getRecommend() {
            this.$api.getRecommend().then(res => {
                this.slides = res.data.slides
                 console.log(res.data);
                this.category = res.data.category
                this.pic = res.data.advertesPicture.PICTURE_ADDRESS
                this.recommend = res.data.recommend
                this.floor11= res.data.floor1
                this.floor22= res.data.floor2
                this.floor33= res.data.floor3
                this.floorName = res.data.floorName
                console.log(this.floor11);
                
            }).catch(err => {
                console.log(err)
            })
        }
        

    },
    mounted() {
        //   this.cityname =  this.$route.params.cityname
        //   console.log(this.cityname);

        this.getRecommend()
         new BScroll(this.$refs.container, {
            scrollY: true,
            click: true
        })
    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.top_left {

    background: #F0F0EE;
}
.container{
    overflow: hidden;
}
.content{
    height:400px;
}
</style>
