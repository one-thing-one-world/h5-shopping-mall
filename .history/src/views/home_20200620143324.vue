<template>
<div>
    
    <div>
        <top ></top>
    </div>

</div>
</template>

<script>

import top from '../components/home/top.vue'

export default {
    name: '',
    props: {},
    components: {
        top
    },
    data() {
        return {
           name:'',

        }
    },
    methods: {
        

    },
    mounted() {
      this.name =  this.$route.query.name
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
