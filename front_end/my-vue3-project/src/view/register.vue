<template>
  <div>
    <h2>注册</h2>
    <form @submit.prevent="handleRegister">
      <div>
        <label for="username">用户名:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">密码:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">注册</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const username = ref('');
    const password = ref('');

    const handleRegister = () => {
      console.log('注册信息:', { username: username.value, password: password.value });
      // 在这里添加注册逻辑，例如 API 请求
    };

    return {
      username,
      password,
      handleRegister,
    };
  },
};
</script>

<style scoped>
/* 添加一些简单的样式 */
form {
  max-width: 300px;
  margin: 0 auto;
}

div {
  margin-bottom: 10px;
}

button {
  padding: 5px 10px;
}
</style>
