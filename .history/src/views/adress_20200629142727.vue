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

    <div v-if="list.length<-1">

        <div class="noGood ccc ">暂无收货地址~~</div>

    </div>

    <div>

        <van-address-list v-model="chosenAddressId" :list="list" default-tag-text="默认" @add="onAdd" @edit="onEdit" />

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
            chosenAddressId: '4',
            list: [],

            contents: [],

        }
    },
    methods: {
        goback() {
            history.go(-1)
        },
        onAdd() {
            this.$router.push({
                name: 'adressEdit'
            })
        },
        onEdit(item, index) {
            this.$router.push({name:'adressEdit',query:{
                list: j
            }})
        },

        getAddress() {
            this.$api.getAddress().then(res => {

                this.contents = res.address
                this.contents.map((item, index) => {
                    
                    
                    this.list.push({

                        id: `${this.list.length + 1}`,
                        name: item.name,
                        tel: item.tel,
                        address: item.addressDetail,
                        isDefault: item.isDefault,

                    })
                    if(item.isDefault===true){
                        this.chosenAddressId = this.list[index].id
                    }

                })

                console.log(this.list);
            }).catch(err => {
                console.log(err);
            })

        },

        select(item) {

            this.$api.getSetDefaultAddress(item).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })

        }

    },
    mounted() {
        // this.fn()
        this.getAddress()

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
    font-size: 24px;
    height: 400px;
}
</style>
