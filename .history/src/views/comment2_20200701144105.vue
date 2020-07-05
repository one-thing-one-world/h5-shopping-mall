<template>
<div>
    <div>
        <div class="top df h50">
            <div class="ccc text1">
                <div @click="goback">
                    <van-icon name="arrow-left" />
                </div>
            </div>

            <div class="ccc w300 text2">评价中心</div>
        </div>

        <div>
        
            <van-rate v-model="value" :count="5" />

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
        goback() {
            this.$router.push({name:'comments'})
        },

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
.top {
    border-bottom: 1px solid rgb(180, 176, 176);
}
</style>
