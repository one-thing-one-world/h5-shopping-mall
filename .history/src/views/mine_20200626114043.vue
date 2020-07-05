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

            list: [{
                check: false,
                kk: a
            }, {
                check: true,
                kk: b
            }, {
                check: false,
                kk: c
            }],
            result: ['a', 'b', 'c'],
            list: ['a', 'b'],
            result: [],

        }
    },
    methods: {

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
