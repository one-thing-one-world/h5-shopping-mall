<template>
<div class="container" >

    <div class="df">
        <div  v-for="(item,index) in slides" :key="index">
            <img class="w375" :src="item.image" alt="">
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: '',
    props: {
        slides: {
            type: Array
        }
    },
    components: {

    },
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style scoped lang='scss'>

</style>
