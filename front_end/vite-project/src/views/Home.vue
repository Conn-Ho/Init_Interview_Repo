<template>
    <div>
        <router-link :to="{ path: '/login' }" class="toLogin">登录</router-link>
        <router-link :to="{ path: '/register' }" class="toRegister">注册</router-link>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
/* 通用样式 */
.toLogin,
.toRegister {
    display: inline-block;
    padding: 10px 20px;
    margin: 5px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    border-radius: 25px;
    transition: background-color 0.3s, box-shadow 0.3s;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* 登录按钮样式 */
.toLogin {
    background-color: #3498db;
    /* 蓝色背景 */
}

.toLogin:hover {
    background-color: #2980b9;
    /* 悬停变深色 */
}

/* 注册按钮样式 */
.toRegister {
    background-color: #e74c3c;
    /* 红色背景 */
}

.toRegister:hover {
    background-color: #c0392b;
    /* 悬停变深色 */
}
</style>