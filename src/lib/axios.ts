import axios from 'axios';
// import toast from 'react-hot-toaster'

export const baseURL = 'http://127.0.0.1:8000/';

const api = axios.create({
  baseURL: `${baseURL}`,
  headers: {
    Authorization: '',
    'Content-Type': 'application/json',
  },
});

api.defaults.withCredentials = false;

api.interceptors.request.use(function (config) {
  const token = localStorage.getItem('access_token');
  if (config.headers) {
    config.headers.Authorization = token ? `Bearer ${token}` : '';
  }
  return config;
});

export default api;
