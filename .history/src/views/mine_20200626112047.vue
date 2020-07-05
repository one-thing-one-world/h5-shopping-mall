<template>
<div>

   <van-checkbox-group v-model="result">
  <van-checkbox name="a">复选框 a</van-checkbox>
  <van-checkbox name="b">复选框 b</van-checkbox>
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

          list: ['a', 'b'],
    result: [],

        }
    },
    methods: {

      toggle(index) {
    this.$refs.checkboxes[index].toggle();
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

</style>
