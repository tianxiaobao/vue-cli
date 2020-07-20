import axios from 'axios';
import { ApiCfg } from './config';

// axios全局配置
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = ApiCfg.baseUrl;

// http request 拦截器
axios.interceptors.request.use(
    config => config,
    error => Promise.reject(error)
);

// 响应拦截器即异常处理
axios.interceptors.response.use((response) => {
    return response.data;
}, error => Promise.resolve(error));


/**
 * 封装get方法
 * @param url
 * @param params
 * @returns {Promise}
 */

function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, params).then((response) => {
            resolve(response);
        }, (err) => {
            reject(err);
        });
    });
}


/**
 * 封装post请求
 * @param url
 * @param params
 * @returns {Promise}
 */

function post(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then((response) => {
            resolve(response);
        }, (err) => {
            reject(err);
        });
    });
}

/**
 * 封装delete请求
 * @param url
 * @param params
 * @returns {Promise}
 */

function del(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.delete(url, params).then((response) => {
            resolve(response);
        }, (err) => {
            reject(err);
        });
    });
}

/**
 * 封装put请求
 * @param url
 * @param params
 * @returns {Promise}
 */

function put(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, params).then((response) => {
            resolve(response);
        }, (err) => {
            reject(err);
        });
    });
}

export default {
    get,
    post,
    del,
    put
};