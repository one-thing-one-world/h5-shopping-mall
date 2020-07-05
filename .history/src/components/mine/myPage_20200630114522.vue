<template>
<div>

    <div class="top  h40 ccc">
        <div>会员中心</div>
    </div>

    <div>

        <div class="df r1 j-end">

            <div class="setting ccc r1"><van-icon name="setting" /></div>
        
        </div>
        <div class="ccc b1">
            <div class="pic "><img src="../../assets/shop.png" alt=""></div>
        </div>
        <div></div>
        <div></div>

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

<style scoped lang='scss'>
.pic{

  width:50px;
  height:50px;


}
.pic img{
  width: 100%;
  height: 100%;
}
.top {

    border-bottom: 2px solid rgb(201, 198, 198);
    font-size: 22px;
    letter-spacing: 6px;
    color: rgb(32, 23, 23);
}
.setting{
  
  color:red;
  font-size: 30px;
  margin-top:20px;
  margin-right: 20px;
}
</style>
