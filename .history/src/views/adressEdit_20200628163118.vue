<template>
<div>
    <van-address-edit :area-list="areaList" show-postal show-delete show-set-default show-search-result :search-result="searchResult" :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave" @delete="onDelete" @change-detail="onChangeDetail" />
</div>
</template>

<script>
import {
    Toast
} from 'vant';
export default {
    name: '',
    props: {},
    components: {

    },
    data() {
        return {
            areaList,
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
