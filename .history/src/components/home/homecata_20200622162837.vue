<template>
<div class="box ">

    <div class="df  box_container bgw">
        <div @click="gotocate(item,index)" class="f1 picbox" v-for="(item,index) in category" :key="index">

            <div class=" ccc">
                <img class="pic" :src="item.image" alt="">
            </div>
            <div class=" fs15 ccc">
                {{item.mallCategoryName}}
            </div>

        </div>
    </div>

    <div class="bottom m-t-15">
        <div>
            <img class="w375" :src="pic" alt="">
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
        },
        pic: {
            type: String
        }
    },
    components: {

    },
    data() {
        return {

        }
    },
    methods: {
        gotocate(a,b) {
            this.$router.push({name:'cata',query:{
                activeIndex: a
            }})
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
.box {

    background: #F0F0EE;
    padding: 15px 0px;
}

.box_container {
    padding: 8px 0px;
    border-radius: 16px;
}

.picbox {
    margin-left: 6px;
    margin-right: 6px;
    background: white;
}

.pic {
    width: 50px;
    height: 50px;
}
</style>
