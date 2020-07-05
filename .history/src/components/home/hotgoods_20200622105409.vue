<template>
<div>
    <div class="df   h30 a-center j-center top">
         <div class="h30 df a-center"> 热销商品</div>
    </div>
    
    <div>
    
        <div h>
        
        </div>

    </div>

</div>
</template>

<script>
export default {
    name: '',
    props: {
        hotgoodss:{
            type:Array
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
