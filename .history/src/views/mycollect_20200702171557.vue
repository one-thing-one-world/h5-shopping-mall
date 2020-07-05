<template>
<div>

    <div class="top df h50 ">

        <div class="goback ccc " @click="goback">
            <van-icon name="arrow-left" />
        </div>

        <div class="ccc fs18 w300 text2">我的收藏</div>

    </div>

    <div>
        <div>
            <div v-for="(item,index) in list" :key="index" class="r1">
                
                <van-card  :price="item.present_price" :title="item.name"  :thumb="item.image_path" />
                
            </div>
        </div>
    </div>
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
            list: []

        }
    },
    methods: {
        goback() {
            this.$router.back()
        },
        getCollectionList() {
            this.$api.getCollectionList().then(res => {
                console.log(res);
                this.list = res.data.list
                console.log(this.list);
            }).catch(
                err => {
                    console.log(err);
                }
            )
        }

    },
    mounted() {
        this.getCollectionList()

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.van-card__title{}
.top {
    border-bottom: 1px solid rgb(180, 176, 176);
}

.text1 {
    width: 40px;
}

.goback {
    width: 30px;
}

// .img_box {
//     width: 60px;
// }

// .img_box img {
//     width: 100%;
//     height: 100%;
// }
</style>
