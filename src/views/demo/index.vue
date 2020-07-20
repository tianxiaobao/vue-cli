<template>
    <div class="demo">
        <p>头像：<img :src="demoImg"></p>
        <p>姓名：{{ userInfo.name }}</p>
        <p>年龄：{{ userInfo.age }}</p>
    </div>
</template>

<script>
import "@/style/demo.scss";
import demoImg from '@/assets/img/demo.png';
import { getUserInfo } from "@/api";
export default {
    data() {
        return {
            userInfo: {},
            demoImg: demoImg
        };
    },
    created() {
        getUserInfo().then(res => {
            this.userInfo = res.data;
        });
    }
};
</script>