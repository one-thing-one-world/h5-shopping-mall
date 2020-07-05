<template>
<div>
    <div v-if="!users">
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
                <div @click="goToLogin" class="text22 ccc">请先登录</div>
            </div>
        </div>
    </div>
    <div v-else-if="users">
        <div class="top  h40 ccc">
            <div>购物车</div>
        </div>
        <div>
            <img class="pic" src="../../assets/shop.png">
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
        goToLogin() {
            this.$router.push({
                name: 'login'
            })

        }

    },
    mounted() {
        this.users = localStorage.getItem('users')
        console.log(this.users);
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
    font-size: 22px;
    letter-spacing: 6px;
    color: rgb(32, 23, 23);
}

.pic {

    width: 374px ;

}

.text1 {
    font-size: 22px;
    color: rgb(31, 25, 25);

}

.text2 {
    margin-top: 50px;
}

.text22 {

    width: 120px;
    height: 40px;

    background: rgb(62, 173, 62);
    border-radius: 20px;
    letter-spacing: 3px;
    color: white;

}
</style>
