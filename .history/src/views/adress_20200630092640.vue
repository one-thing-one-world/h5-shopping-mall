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
        <van-address-list v-model="chosenAddressId" :list="list" :disabled-list="dli disabled-text="以下地址超出配送范围" default-tag-text="默认" @add="onAdd" @edit="onEdit" @select="select" />
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
            this.$router.push({
                name: "settlement"
            });
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
                        this.$set(item, 'id', index + 1)
                    })

                    console.log(this.list);

                    this.$api
                        .getDefaultAddress()
                        .then(res => {
                            this.defaultAdress = res.defaultAdd;
                            let num = this.defaultAdress._id.charAt(this.defaultAdress._id.length - 1) * 1 - 6
                            console.log(num);

                            this.$set(this.defaultAdress, 'id', "" + num)

                            console.log(this.defaultAdress);
                            this.chosenAddressId = this.defaultAdress.id;
                            console.log(this.chosenAddressId);
                        })
                        .catch(err => {
                            console.log(err);
                        });

                    //   this.contents.map((item, index) => {
                    //     this.list.push({
                    //       id: item._id,
                    //       name: item.name,
                    //       tel: item.tel,
                    //       address: item.addressDetail,
                    //       isDefault: item.isDefault
                    //     });
                    //     if (item.isDefault === true) {
                    //       this.chosenAddressId = item._id;
                    //     }
                    //   });
                })
                .catch(err => {
                    console.log(err);
                });
        },

        select(item) {

            console.log(item._id);
            this.list.map(item1 => {
                item1.isDefault = false;
            });
            console.log(this.list);
            console.log(222);

            // console.log(item);
            this.chosenAddressId = item.id;
            item.isDefault = true;

            this.$api
                .getSetDefaultAddress(item._id)
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                });
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
