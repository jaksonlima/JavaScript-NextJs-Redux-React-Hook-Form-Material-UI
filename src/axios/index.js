import axios from 'axios'

axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

const instance = axios.create({ timeout: 5000 });

export default instance;