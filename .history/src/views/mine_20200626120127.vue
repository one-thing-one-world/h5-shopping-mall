<template>
<div>

    <van-checkbox-group v-model="result" ref="checkboxGroup">
      <div v-for="(item)"></div>
        <van-checkbox name="a">复选框 a</van-checkbox>
        
    </van-checkbox-group>

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

            list: [{
                check: false,
                kk: 'a'
            }, {
                check: true,
                kk: 'b'
            }, {
                check: false,
                kk: 'c'
            }],
            // result: ['a', 'b', 'c'],
            // list: ['a', 'b'],
            result: [],

        }
    },
    methods: {
        // toggle(index) {

        //     this.$refs.checkboxes[index].toggle();
        // },
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
