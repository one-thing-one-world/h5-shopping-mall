<template>
<div>
    <div class="top  h40 ccc">
        <div>购物车</div>
    </div>
    <div>

        <div>
            <img class="pic" src="../../assets/order.gif">
        </div>

        <div class="text1 ccc">
            <div>登陆后才能查看订单</div>
        </div>
        <div class="text2  ccc">
            <div class="text22 ccc">请先登录</div>
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

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.top {

    border-bottom: 2px solid rgb(201, 198, 198);
}

.pic {

    width: 374px;

}
.text1{
    
}
.text2{
    margin-top:
}
.text22{

    width:100px;
    height:40px;
    
    background:rgb(62, 173, 62);
    border-radius: 20px;
    letter-spacing:3px;
    color: white;
    

}
</style>
