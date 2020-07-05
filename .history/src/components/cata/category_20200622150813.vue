<template>
<div>
    <div class="top">商品分内</div>
    <div>

        <div class="left">

        </div>
        <div class="right">

        </div>

    </div>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
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
        listCategory() {
            return this.$store.state.listCategory
        }
    }
}
</script>

<style scoped lang='scss'>
.top{
    width:375px;
    height:40px;
    border:1px solid red;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: ;
}
</style>
