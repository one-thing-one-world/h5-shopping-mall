<template>
<div>
    <div class="top df h50">
        <div class="ccc text1">
            <div @click="goback">
                <van-icon name="arrow-left" />
            </div>
        </div>

        <div class="ccc w300 text2">地址列表</div>
    </div>

    <div>
        <div v-if="list.length<=0" class="noGood ccc">暂无收货地址~~</div>

        <div v-else></div>
    </div>

    <div>
        <van-address-list v-model="chosenAddressId" :list="list" default-tag-text="默认" @add="onAdd" @edit="onEdit" @select="select" />
    </div>
</div>
</template>

<script>
import {
    Toast
} from "vant";
export default {
    name: "",
    props: {},
    components: {},
    data() {
        return {
            chosenAddressId: "",

            list: [],

            contents: [],
            defaultAdress: []
        };
    },
    methods: {
        goback() {
             this.$router.back()
        },
        onAdd() {
            this.$router.push({
                name: "adressEdit"
            });
        },
        onEdit(item) {
            this.$router.push({
                name: "adressEdit",
                params: {
                    oneList: JSON.stringify(item)
                }
            });
            console.log(item);
        },

        getAddress() {
            this.$api
                .getAddress()
                .then(res => {
                    this.list = res.address;
                    this.list.map((item, index) => {
                        this.$set(item, 'id', (index + 1).toString())
                        console.log(item);
                        if (item.isDefault) {
                            this.chosenAddressId = item.id
                        }
                    })

                    

                })
                .catch(err => {
                    console.log(err);
                });
        },

        select(item) {
            this.$router.push({name:'settlement',query:{
                item:JSON.stringify(item)
            }})
            localStorage.setItem('item',item)
            this.$router

            // console.log(item._id);
            // this.list.map(item1 => {
            //     item1.isDefault = false;
            // });
            

            
            // this.chosenAddressId = item.id;
            // item.isDefault = true;

            // this.$api
            //     .getSetDefaultAddress(item._id)
            //     .then(res => {
            //         console.log(res);
            //     })
            //     .catch(err => {
            //         console.log(err);
            //     });
        }
    },
    mounted() {
        // this.fn()
        this.getAddress();
    },
    watch: {},
    computed: {}
};
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
