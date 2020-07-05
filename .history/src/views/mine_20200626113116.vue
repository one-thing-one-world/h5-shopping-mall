<template>
<div>

    <van-checkbox-group v-model="list.check">
        <div v-if="list.length>0">

            <div v-for="(item,index) in list" :key="index">
                <van-checkbox name="">{{item.check}}</van-checkbox>

            </div>
        </div>
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
                check: false
            }, {
                check: true
            }, {
                check: false
            }],
            result: []

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
