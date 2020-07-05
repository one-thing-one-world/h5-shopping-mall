<template>
<div>

    <div class="top  h40 ccc">
        <div>会员中心</div>
    </div>

    <div>

        <div class="df r1 j-end">

            <div class="setting ccc r1">
                <van-icon name="setting" />
            </div>

        </div>
        <div class="ccc b1">
            <div class="pic r1"><img src="../../assets/ssw.jpg" alt=""></div>
        </div>
        <div>

            <div v-if="">
                欢迎您:{{this.users}}
            </div>
            <div>
                退出登录
            </div>

        </div>
        <div>
            <div>您还没有登录</div>
            <div>登录</div>
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
        this.users = localStorage.getItem('users')
    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.pic {

    width: 50px;
    height: 50px;
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
