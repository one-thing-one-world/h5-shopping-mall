<template>
<div>

    <div class="top  h40 ccc">
        <div>会员中心</div>
    </div>

    <div class="box">

        <div class="df r1 j-end">

            <div class="setting ccc r1">
                <van-icon name="setting" />
            </div>

        </div>
        <div class="ccc b1">
            <div class="pic r1"><img src="../../assets/ssw.jpg" alt=""></div>
        </div>
        <div class="b1" v-if="users">

            <div  class="r1 username ccc">
                欢迎您:{{users}}
            </div>
            <div class="r1 ccc">

                <div ><span class="text1">退出登录</span></div>
                
            </div>

        </div>

        <div class="b1" v-if="users">

            <div  class="r1 username ccc">
                您还没有登录
            </div>
            <div class="r1 ccc">

                <div ><van-button   type="primary"><span class="btn">请登录</span></van-button></div>
                
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
            users: ''
        }
    },
    methods: {

    },
    mounted() {
        this.users = localStorage.getItem('users')
    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.box{
  background: #F4267C;
  color: white;
  letter-spacing: 2px;
}
.btn{
  letter-spacing: 2px;
  height: 26px;
}
.username{
  height: 50px;
  font-size: 22px;
  
}
.pic {

    width: 70px;
    height: 70px;
    border-radius: 50% 50%;
    overflow: hidden;

}

.pic img {
    width: 100%;
    height: 100%;
}

.top {

    border-bottom: 2px solid rgb(201, 198, 198);
    font-size: 22px;
    letter-spacing: 6px;
    color: rgb(32, 23, 23);
}

.setting {

    color: white;
    font-size: 30px;
    margin-top: 20px;
    margin-right: 20px;
}
</style>
