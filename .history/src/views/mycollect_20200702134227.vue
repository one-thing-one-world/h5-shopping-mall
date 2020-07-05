<template>
<div>

    <div class="top ">

        <div class="goback" @click="goback">
            <van-icon name="arrow-left" />
        </div>

    </div>

    <div>
        <div>
            <div></div>
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
      goback(){
        this.$router.back()
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

.top {
    border-bottom: 1px solid rgb(180, 176, 176);
}

.text1 {
    width: 40px;
}
</style>
