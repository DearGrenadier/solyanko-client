import config from 'config.json';
import axios from 'axios';

const request = axios.create({
  baseURL: config.API_END_POINT,
  withCredentials: true,
  headers: JSON.parse(localStorage.getItem('auth'))
});

request.interceptors.response.use(response => {
  const { headers } = response;
  localStorage.setItem('auth', JSON.stringify({
    'access-token': headers['access-token'],
    'token-type': headers['token-type'],
    expiry: headers.expiry,
    uid: headers.uid,
    client: headers.client
  }));
  return response;
}, error => {
  // Do something with response error
  return Promise.reject(error);
});

request.interceptors.request.use(config => {
  // Do something before request is sent
  config.headers = { ...config.headers, ...JSON.parse(localStorage.getItem('auth')) };
  return config;
}, error => {
  // Do something with request error
  return Promise.reject(error);
});

export default request;
