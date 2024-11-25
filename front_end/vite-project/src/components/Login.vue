<template>
    <div>
        <div class="login-container">
            <div class="login-box">
                <h2 class="login-title">登录</h2>
                <div class="user-input">
                    <div class="input-group">
                        <label for="username">用户名</label>
                        <input type="text" id="username" v-model="formData.username" placeholder="请输入用户名" />
                    </div>
                    <div class="input-group">
                        <label for="password">密码</label>
                        <input type="password" id="password" v-model="formData.password" placeholder="请输入密码" />
                    </div>
                    <button class="login-button" @click="submit">登录</button>
                </div>

                <div class="register-link">
                    <span>还没有账号？</span>
                    <router-link :to="{ path: '/register' }">注册</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import { userLogin } from '../http/request.js'
const formData = reactive({
    username: 'ming',
    password: '123456'
})
const submit = async () => {
    const res = await userLogin('/auth/login')
    console.log(res);
}
</script>

<style lang="scss" scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.login-box {
    background-color: #ffffff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
    box-sizing: border-box;
}

/* 标题样式 */
.login-title {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
    font-size: 24px;
    font-weight: bold;
}

/* 输入框样式 */
.input-group {
    margin-bottom: 20px;
}

.input-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #555;
}

.input-group input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}

/* 登录按钮样式 */
.login-button {
    width: 100%;
    padding: 12px;
    background-color: #3498db;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 10px;
}

.login-button:hover {
    background-color: #2980b9;
}

/* 注册链接样式 */
.register-link {
    margin-top: 15px;
    text-align: center;
    color: #555;
}

.register-link a {
    color: #3498db;
    text-decoration: none;
    font-weight: bold;
}

.register-link a:hover {
    text-decoration: underline;
}
</style>