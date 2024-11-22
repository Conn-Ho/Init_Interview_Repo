<template>
  <div>
    <h2>登录</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">用户名:</label>
        <input type="username" v-model="username" required />
      </div>
      <div>
        <label for="password">密码:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">登录</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import {login} from "@/api/auth.js";

export default {
  name:'login',
  setup() {
    const username = ref('');
    const password = ref('');
    let usernameError=ref('')
    let passwordError=ref('')

    // 验证用户名
    const validateUsername = () => {
      if (!username.value) {
        usernameError.value = '用户名不能为空';
      } else if (username.value.length < 3) {
        usernameError.value = '用户名长度不能小于3个字符';
      } else if (username.value.length > 20) {
        usernameError.value = '用户名长度不能超过20个字符';
      } else {
        usernameError.value = '';
      }
    };

    // 验证密码
    const validatePassword = () => {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      if (!password.value) {
        passwordError.value = '密码不能为空';
      } else if (!passwordRegex.test(password.value)) {
        passwordError.value = '密码必须包含至少8个字符，包括大小写字母和数字';
      } else {
        passwordError.value = '';
      }
    };
    const handleLogin = () => {
      validatePassword()
      validateUsername()
      if(passwordError.value!==''||usernameError.value!=='')
      login({"username":username.value,"password":password.value}).then(r=>{
        console.log('response',r)
      })
      console.log('登录信息:', { username: username.value, password: password.value });
      // 在这里添加登录逻辑，例如 API 请求
    };

    return {
      username,
      password,
      handleLogin,
    };
  },
};
</script>
