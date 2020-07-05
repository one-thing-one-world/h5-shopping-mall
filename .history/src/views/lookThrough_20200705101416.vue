<template>
<div>

    <div class="top df h50 ">

        <div class="goback ccc " @click="goback">
            <van-icon name="arrow-left" />
        </div>

        <div class="ccc fs18 w300 text2">最近浏览</div>

    </div>

    <div>

        <div v-if="arr">
            <div v-for="(item,index) in arr" :key="index" class="x_box_container">

                <van-card :price="item.orl_price" :title="item.name" :thumb="item.image_path" />

                <div>
                    <div @click="del(item,index)" class="x_box ccc">
                        <van-icon name="cross" />
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>
</template>

<script>
import uniq from 'lodash/uniq'
export default {
    name: '',
    props: {},
    components: {

    },
    data() {
        return {
            getDatas: null,
            arr: []

        }
    },
    methods: {
        getData() {
            this.getDatas = JSON.parse(localStorage.getItem('viewss'))
            console.log(this.getDatas);
            this.getDatas = uniq(this.getDatas)
            this.arr = []
            this.getDatas.map((item, index) => {
                this.$api.getGoodsOne(item).then(res => {
                    this.arr.push(res.goods.goodsOne)
                    console.log(res);
                }).catch(err => {
                    console.log(err);
                })
            })

        },
        goback() {
            this.$router.back()
        },
        del(item,index){
          this.arr = this.arr.filter((item1,index)=>{
              return item1===item
          })
          console.log(this.arr);
        }

    },
    mounted() {
        this.getData()

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.x_box_container {
    padding: 5px 0px;
    position: relative;

    margin-top: 20px;
    border-radius: 5px;

}

.x_box {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 20px;
    height: 20px;
    background: rgb(168, 157, 157);
    color: white;
    border-radius: 50% 50%;

}

.van-card__title {
    line-height: 40px;
    font-size: 16px;
}

.van-card__price-integer {
    margin-left: 5px;
    color: red;
    font-size: 20px;
}

.van-card__price-currency {
    color: red;
    font-size: 20px;
}

.top {
    border-bottom: 1px solid rgb(180, 176, 176);
}

.text1 {
    width: 40px;
}

.goback {
    width: 30px;
}

.text2 {
    letter-spacing: 2px;
}
</style>
