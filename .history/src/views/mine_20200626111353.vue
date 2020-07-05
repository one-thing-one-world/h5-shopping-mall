<template>
<div>

    <van-checkbox-group v-model="result">
        <van-cell-group>
            <van-cell v-for="(item, index) in list" clickable :key="item" :title="`复选框 ${item}`" @click="toggle(index)">
                <template #right-icon>
                    <van-checkbox :name="item" ref="checkboxes" />
                </template>
            </van-cell>
        </van-cell-group>
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

      oggle(index) {
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
