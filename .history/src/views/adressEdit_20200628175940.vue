<template>
<div>
    <div class="top df  h50">
        <div class="ccc text1">
            <div @click="goback">
                <van-icon name="arrow-left" />
            </div>
        </div>

        <div class="ccc w300 text2 ">地址列表</div>

    </div>

    <div>
        <van-address-edit :area-list="areas" show-postal show-delete show-set-default show-search-result :search-result="searchResult" :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave" @delete="onDelete" @change-detail="onChangeDetail" />
    </div>

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
        goback() {
            history.go(-1)
        },
        onSave(content) {
            this.$router.push({name:'adress'})
        },
        onDelete() {
            Toast('delete');
        },
        onChangeDetail(val) {
            if (val) {
                this.searchResult = [{
                    name: '东方广场',
                    address: '杭州市西湖区',
                }];
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

<style lang="scss" scoped>
.top {
    border-bottom: 1px solid rgb(180, 176, 176);
}

.text1 {
    width: 40px;
}

.text2 {
    color: rgb(116, 87, 87);
    font-weight: 700;
}
</style>
