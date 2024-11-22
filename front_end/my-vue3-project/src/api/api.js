const baseUrl='http://localhost:3000'

// src/api/axiosInstance.js
import axios from 'axios';

// 创建 Axios 实例
const axiosInstance = axios.create({
    baseURL: baseUrl, // 替换为你的 API 基础 URL
    timeout: 6000, // 请求超时时间
    headers: {
        'Content-Type': 'application/json',
    },
});

// 封装 POST 请求
export const postRequest = async (url, data) => {
    try {
        const response = await axiosInstance.post(url, data);
        return response.data;
    } catch (error) {
        console.error('POST 请求错误:', error);
        throw error;
    }
};

export default axiosInstance;
