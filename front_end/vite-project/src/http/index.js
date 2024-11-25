// axios.js
import axios from 'axios';

// 创建 axios 实例
const instance = axios.create({
  baseURL: 'http://localhost:3000', // 设置默认的API请求URL
  timeout: 10000, // 请求超时时间（毫秒）
  headers: {
    'Content-Type': 'application/json'
  }
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在请求发送之前做一些处理，例如添加 Token
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    // 请求错误处理
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据进行处理
    return response.data;
  },
  (error) => {
    // 响应错误处理
    if (error.response) {
      // 服务器返回的错误
      switch (error.response.status) {
        case 401:
          console.error('未授权，请重新登录');
          // 可以执行退出操作，重定向到登录页
          break;
        case 403:
          console.error('权限不足');
          break;
        case 404:
          console.error('请求资源未找到');
          break;
        case 500:
          console.error('服务器错误');
          break;
        default:
          console.error(error.response.data.message || '未知错误');
      }
    } else if (error.request) {
      // 请求未响应
      console.error('请求未响应，请检查网络');
    } else {
      // 其他错误
      console.error('请求出错：', error.message);
    }
    return Promise.reject(error);
  }
);


// 默认导出 axios 实例
export default instance;
