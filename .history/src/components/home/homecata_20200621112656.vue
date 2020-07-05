<template>
<div class="df b1">

    <div @click="gotocate(item,index)" class="f1 picbox" v-for="(item,index) in category" :key="index">

        <div class=" ccc">
            <img class="pic" :src="item.image" alt="">
        </div>
        <div class=" fs15 ccc">
            {{item.mallCategoryName}}
        </div>

    </div>

</div>
</template>

<script>
export default {
    name: '',
    props: {
        category: {
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
      gotocate(a,b){
        
      }

    },
    mounted() {

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.picbox {
    margin-left: 6px;
    margin-right: 6px;
}

.pic {
    width: 50px;
    height: 50px;
}
</style>
