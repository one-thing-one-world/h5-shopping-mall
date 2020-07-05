<template>
<div>
    <div class="top">商品分内</div>
    <div class="df">

        <div class="left" v-if="somedata.length>0">
            <div class="left_text" v-for="(item,index) in somedata" :key="index">
                <div> {{item.mallCategoryName}}</div>
            </div>
        </div>

        <div class="right b1" ref="right">
            
                <div class="right_content" v-if="somedata.length>0">

                    <div v-for="(item,index) in somedata[aIndex].bxMallSubDto" :key="index">
                        <div class="right_item r1">{{item.mallSubName}}</div>
                    </div>

                </div>

            
        </div>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: '',
    props: {

    },
    components: {

    },
    data() {
        return {
            list: [],
            somedata: [],
            aIndex: ''

        }
    },
    methods: {

    },
    mounted() {

        this.somedata = JSON.parse(localStorage.getItem('somedata'))
        this.aIndex = localStorage.getItem('oneIndex')
        console.log(this.aIndex);
        console.log(this.somedata);
        // console.log(this.somedata[0].bxMallSubDto);
        new BScroll(this.$refs.containe, {
        scrollX: true,
        click: true
      })

    },
    watch: {

    },
    computed: {

        oneIndex() {
            return this.$store.state.oneIndex
        }

    }
}
</script>

<style lang="scss" scoped>
.top {
    width: 375px;
    height: 40px;

    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.left {
    width: 75px;
    height: 564px;

}

.left_text {
    margin-top: 5px;
    margin-bottom: 5px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.right {
    width: 300px;
    height: 30px;
    overflow: hidden;

}

.right_item {
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    font-size: 16px;
    padding-left: 10px;
    padding-right: 10px;
    height: 30px;
    margin-top: 5px;

}
.right_content{
    width: 400px;
    border:1px solid green;
    display: flex;
}
</style>
