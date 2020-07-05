<template>
<div ref="container">
    <van-sticky :container="container">
        <van-button type="warning">指定容器</van-button>
    </van-sticky>
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
            container: null,
        }
    },
    methods: {

    },
    mounted() {
        this.container = this.$refs.container;
    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.container {

    height: 200px;
    border: 1px solid red;
    width: 375px;

}
</style>
