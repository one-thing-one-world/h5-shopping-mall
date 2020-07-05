<template>
<div>

    <div class="top df h50 ">

        <div class="goback ccc " @click="goback">
            <van-icon name="arrow-left" />
        </div>

        <div class="ccc fs18 w300 text2">个人设置</div>

    </div>

    <div>

        <div class="m-l-20">

            <div class="h50 fs18 b1 df a-center">
                github
            </div>
            <div class="h80 b1 df a-center">
                <div>头像</div>
                <div><img src="" alt=""></div>
            </div>
        </div>

        <div class="text_box ">

        

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
            userId:'',
            nickName:'',
            radio:'男',
            userId:'',
            year:''


        }
    },
    methods: {
        goback() {
            this.$router.back()
        },
       getQueryUser(){
            this.$api.getQueryUser().then(res=>{
                console.log(res);
            }).catch(err=>{
                console.log(err);
            })
       }

    },
    mounted() {
        this.getQueryUser()

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.sex{
    margin-left:15px;
    margin-top: 10px;
    margin-bottom:10px;
}
.text_box {
    padding: 10px;

}
.van-cell__title{
    font-size: 18px !important;
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
</style>
