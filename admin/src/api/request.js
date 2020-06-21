import axios from 'axios/index';

axios.defaults.withCredentials = true;
const instance = axios.create({
    baseURL: "api",
    timeout: 40000 // request timeout
});

// 拦截请求,进度条展示
instance.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.error(error);
        Promise.reject(error);
    }
);

// 拦截响应
instance.interceptors.response.use(
    response => {
        // hideLoading();
        // if (response.data && response.data.code == ConstantField.RQ_NOT_LOGIN) {
        //     localStorage.clear();
        //     router.push('/login');
        // }
        switch (response.config.responseType) {
            case 'blob':
                return response;
                break;
            default:
                return response.data;
                break;
        }
    },

    error => {
        console.error('err' + error);
        // hideLoading();
        return Promise.reject(error);
    }
);

/**
 *
 * @param {String} url 请求地址
 * @param {Function} method 请求方式 post get delete ……
 * @param {*} data 请求地址直接带参数
 */
export const createAPI = (url, method, data) => {
    let config = {};
    if (method === 'get') {
        config.params = data;
    } else {
        config.data = data;
    }
    return instance({
        url,
        method,
        ...config
    });
};

/**
 *
 * @param {String} url 请求地址
 * @param {Function} method 请求方式 post get delete
 * @param {*} data 表单参数
 */
export const createFormAPI = (url, method, data, responseType) => {
    let config = {};
    config.data = data;
    config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };
    if (!responseType) {
        responseType = 'json';
    }
    config.responseType = responseType;
    config.transformRequest = [
        function (data) {
            let ret = '';
            for (let key in data) {
                ret +=
                    encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) + '&';
            }
            return ret;
        }
    ];
    return instance({
        url,
        method,
        ...config
    });
};
