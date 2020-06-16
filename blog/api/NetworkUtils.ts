
import axios, {
    AxiosInstance,
    AxiosPromise,
    AxiosRequestConfig,
    AxiosResponse,
} from 'axios';

axios.defaults.withCredentials = true;
declare type Methods =
    | 'get'
    | 'GET'
    | 'delete'
    | 'DELETE'
    | 'head'
    | 'HEAD'
    | 'options'
    | 'OPTIONS'
    | 'post'
    | 'POST'
    | 'put'
    | 'PUT'
    | 'patch'
    | 'PATCH';

/**
 * transformRequest 函数数组
 */
interface Config {
    data?: any;
    params?: any;
    url?: string;
    headers?: any;
    responseType?: string;
    transformRequest?: Array<any>;
}

class NetWorkUtils {
    private instance: AxiosInstance | null = null;

    constructor(url: string) {
        if (this.instance === null) {
            this.instance = axios.create({
                baseURL: url,
                timeout: 5000, // request timeout
            });
            this.initInterceptors();
        }
    }

    /**
     * 初始化请求响应的拦截器
     * 请求头header携带sessionId
     */
    private initInterceptors(): void {
        this.instance!.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                return config;
            },
            error => {
                Promise.reject(error);
            }
        );

        /**
         * 响应拦截,若响应码返回401,清除原有存储的sessionId
         */
        this.instance!.interceptors.response.use(
            (response: AxiosResponse) => {
                // console.log(response)
                return response;
            },
            error => {
                return error;
            }
        );
    }
    /**
     * 发送请求媒体类型(MIME)为json格式的数据
     * @param {string} url 请求连接
     * @param {string} method HTTP方式
     * @param {any} data 数据
     * @returns {Promise} 返回的异步
     */
    createAPI<T, R>(url: string, method: Methods, data?: T): AxiosPromise<R> {
        const config: Config = {};
        if (method === 'get' || method === 'GET') {
            config.params = data;
        } else {
            config.data = data;
        }
        return this.instance!(Object.assign(config, { method, url }));
    }

    /**
     * 发送请求媒体类型(MIME)为form表单格式的请求
     * @param url 请求的链接
     * @param method HTTP方法,GET,POST等
     * @param data 参数
     * @param responseType 响应类型
     */
    createFormAPI<T, R>(
        url: string,
        method: Methods,
        data?: T,
        responseType?: string
    ): AxiosPromise<R> {
        if (!responseType) {
            responseType = 'json';
        }
        const config: Config = {
            data: data,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            responseType,
            transformRequest: [],
        };
        config.transformRequest = [
            function(data: { [x: string]: string | number | boolean }) {
                let ret = '';
                for (const key in data) {
                    ret += `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}&`;
                }
                return ret;
            },
        ];
        return this.instance!(Object.assign(config, { method, url }));
    }
}

/**
 * 直接导入实例保证NetWorkUtil单例
 */
export const NetWorkUtil = new NetWorkUtils('http://127.0.0.1:7001/');
