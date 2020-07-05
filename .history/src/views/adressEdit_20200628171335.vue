<template>
<div>
<div></div>
    
</div>
</template>

<script>
import {
    Toast
} from 'vant';
import area from './lib/area.js'
export default {
    name: '',
    props: {},
    components: {

    },
    data() {
        return {
            areas: area,
            searchResult: [],

        }
    },
    methods: {
        onSave() {
            Toast('save');
        },
        onDelete() {
            Toast('delete');
        },
        onChangeDetail(val) {
            if (val) {
                this.searchResult = [{} ];
            } else {
                this.searchResult = [];
            }
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
