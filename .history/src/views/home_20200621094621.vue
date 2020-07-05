<template>
<div>
    
    <div>
        <top></top>
    </div>
    <div>
        <banner></banner>
    </div>

</div>
</template>

<script>

import top from '../components/home/top.vue'
import banner from '../components/home/banner.vue'

export default {
    name: '',
    props: {},
    components: {
        top,
        banner,
    },
    data() {
        return {
          

        }
    },
    methods: {
        getRecommend(){
            this.$api.getRecommend().then(res=>{}).catch()
        }
        

    },
    mounted() {
    //   this.cityname =  this.$route.params.cityname
    //   console.log(this.cityname);
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
