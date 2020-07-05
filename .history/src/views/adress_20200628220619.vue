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

        <div class="noGood">暂无收货地址~~</div>

    </div>

    <div>

        <van-address-list v-model="chosenAddressId" :list="list"   default-tag-text="默认" @add="onAdd" />

    </div>

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
            chosenAddressId: '1',
            list: [{
                    id: '1',
                    name: '张三',
                    tel: '13000000000',
                    address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
                    isDefault: true,
                },
                {
                    id: '2',
                    name: '李四',
                    tel: '1310000000',
                    address: '浙江省杭州市拱墅区莫干山路 50 号',
                },
            ],
            

        }
    },
    methods: {
        goback() {
            history.go(-1)
        },
        onAdd() {
            this.$router.push({name:'adressEdit'})
        },
        onEdit(item, index) {
            Toast('编辑地址:' + index);
        },
        fn(){
            this.conJSON.parse(localStorage.getItem('content'))
        }

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

.noGood {
    color: gray;
    font-size: 20px;
}
</style>
