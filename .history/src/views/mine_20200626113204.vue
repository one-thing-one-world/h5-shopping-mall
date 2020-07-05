<template>
<div>

    <van-checkbox-group v-model="result">
        <div v-if="list.length>0">

            <div v-for="(item,index) in list" :key="index">
                <van-checkbox name="a">{{item.check}}</van-checkbox>

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
                check: false,
                name:a
            }, {
                check: true,
                name:a
            }, {
                check: false
            }],
            result: [a,b,c]

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
