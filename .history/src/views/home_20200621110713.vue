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
                <homecata></homecata>
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
        catagory:[]
    },
    data() {
        return {
            slides: [],

        }
    },
    methods: {
        getRecommend() {
            this.$api.getRecommend().then(res => {
                this.slides = res.data.slides
                 console.log(res.data);
                // this.catagory = res.data.catagory
                // console.log(this.catagory);
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
