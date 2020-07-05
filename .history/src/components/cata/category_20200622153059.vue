<template>
<div>
    <div class="top">商品分内</div>
    <div class="df">

        <div class="left">
            <div  v-for="(item,index) in listCategory" :key="index">
                    {{item.mallCategoryName}}
            </div>
        </div>
        <div class="right">
            
                
                <div>
                    d
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

        }
    },
    methods: {

    },
    mounted() {
        
        
console.log(this.listCategory);

    },
    watch: {

    },
    computed: {
        listCategory() {
            return this.$store.state.listCategory
        }
        
       

    }
}
</script>

<style lang="scss" scoped>
.top {
    width: 375px;
    height: 40px;
    border: 1px solid red;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.left {
    width: 100px;
    height: 564px;
    border: 1px solid red;
}

.right {
    width: 275px;
    height: 564px;
    border: 1px solid red;
}
</style>
