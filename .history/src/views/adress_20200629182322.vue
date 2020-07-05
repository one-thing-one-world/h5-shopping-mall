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

    <div >

        <div v-if="list.length<=0" class="noGood ccc ">暂无收货地址~~</div>
        

        <div v-else>

                
        
        </div>

    </div>

    <div>

        <van-address-list v-model="chosenAddressId" :list="list" default-tag-text="默认" @add="onAdd" @edit="onEdit" @select="select" />

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

            chosenAddressId: '',

            list: [],

            contents: [],

        }
    },
    methods: {
        goback() {
            this.$router.push({name:'settlement'})
        },
        onAdd() {
            this.$router.push({
                name: 'adressEdit'
            })
        },
        onEdit(item) {
            this.$router.push({name:'adressEdit',params:{
                oneList: JSON.stringify(item)
            }})
            console.log(item);
        },

        getAddress() {
            this.$api.getAddress().then(res => {
                console.log(res.address);

                this.contents = res.address
                this.contents.map((item, index) => {
                    
                    
                    this.list.push({

                        id: item._id,
                        name: item.name,
                        tel: item.tel,
                        address: item.addressDetail,
                        isDefault: item.isDefault,

                    })
                    if(item.isDefault===true){
                        this.chosenAddressId = item._id

                    }
                    

                })

                console.log(this.list);
            }).catch(err => {
                console.log(err);
            })

        },

        select(item) {
            console.log(item);
            
            this.$api.getSetDefaultAddress(item.id).then(res => {
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
