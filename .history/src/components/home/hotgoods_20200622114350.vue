<template>
<div>
    <div class="df h30 a-center j-center top">
        <div class="h30 df a-center"> 热销商品</div>
    </div>

    <div class="one_item_box">

        <div class="one_item " v-for="(item,index) in hotgoodss" :key="index">
            <div>

                <img class="w184" :src="item.image" alt="">

            </div>
            <div class="name_text">
                {{item.name}}
            </div>
            <div class="df a-center j-center">
                <div>
                    <span>￥{{item.mallPrice}}</span><span>￥{{item.price}}</span>
                </div>
            </div>

        </div>

    </div>

</div>
</template>

<script>
export default {
    name: '',
    props: {
        hotgoodss: {
            type: Array
        }
    },
    components: {

    },
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {
        console.log(this.hotgoodss);

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.name_text {
    width:00px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    
}

.one_item_box {
    display: flex;
    flex-wrap: wrap;
}

.one_item {
    width: 49.73%;
    height: 250px;
    border-right: 1px solid rgb(145, 141, 141);
    border-top: 1px solid rgb(145, 141, 141);

}

.one_item:nth-child(2n) {

    border-right: 1px solid white !important;

}

.floor_text {
    width: 18px;
    height: 18px;
    font-size: 14px;
    border-radius: 10px !important;
    background: red;
    color: white;
    margin-right: 5px;

}

.top {
    color: red !important;
    background: #F0F0EE;
    padding: 5px 0px;
}
</style>
