<template>
<div>

    <div>
        <top></top>
    </div>
    <div class="container" ref="container">
        <div class="content ">
            <div>
                <banner v-if="slides.length>0" :slides='slides'></banner>
            </div>
            <div class="">
                <homecata v-if="category.length>0" :category='category' :pic='pic'></homecata>
            </div>
            
            
        </div>
    </div>

</div>
</template>

<script>
import top from '../components/home/top.vue'
import banner from '../components/home/banner.vue'
import homecata from '../components/home/homecata.vue'

export default {
    name: '',
    props: {},
    components: {
        top,
        banner,
        homecata,
        
    },
    data() {
        return {
            slides: [],
            category:[],
            pic:''

        }
    },
    methods: {
        getRecommend() {
            this.$api.getRecommend().then(res => {
                this.slides = res.data.slides
                 console.log(res.data);
                this.category = res.data.category
                this.pic = res.data.advertesPicture.PICTURE_ADDRESS
                console.log(this.category);
            }).catch(err => {
                console.log(err)
            })
        }

    },
    mounted() {
        //   this.cityname =  this.$route.params.cityname
        //   console.log(this.cityname);

        this.getRecommend()
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
</style>
