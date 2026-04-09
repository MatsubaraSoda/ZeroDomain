import axios from 'axios';

/**
 * 全局 Axios 实例：业务请求统一从这里 import { http }。
 * 在 .env 中配置 VITE_API_BASE_URL（可选）。
 */
export const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? '',
  timeout: 30_000,
  headers: {
    'Content-Type': 'application/json',
  },
});
