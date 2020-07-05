<template>
<div>
    <div class="top">商品分内</div>
    <div class="df">

        <div class="left" v-if="somedata.length>0">
            <div class="left_text " v-for="(item,index) in somedata" :key="index">
                <div> {{item.mallCategoryName}}</div>
            </div>
        </div>

        <div class="container " ref="container">
            
              <div class="box">
              
                <div class="right_content" v-if="somedata.length>0">

                    <div v-for="(item,index) in somedata[aIndex].bxMallSubDto" :key="index">
                        <div class="right_item">{{item.mallSubName}}
                            <div class = underline></div>
                        </div>

                    </div>

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
        new BScroll(this.$refs.container, {
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
    border-bottom: 1px solid gray;
}

.left {
    width: 75px;
    height: 564px;
   
    background: #F0F0EE;

}

.left_text {
    margin-top: 5px;
    margin-bottom: 5px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
   
    width: 300px;
    height: 30px;
    display:flex;
    overflow: hidden;
   
 

}
.box{
    
  
}

.right_item {
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    font-size: 16px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    height: 30px;
    border: 1px solid red;
   

}
.right_content{
    width: 300px;
    
    display: flex;
}
</style>
