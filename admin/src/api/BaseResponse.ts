export default interface IBaseResponse<T = any> {
    code: string;
    data: T;
    msg: string;
}

export interface IBaseOptionParam {
    value: string;
    label: string;
}