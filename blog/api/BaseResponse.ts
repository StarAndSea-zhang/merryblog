export default interface BaseResponse<T = any> {
    code: string;
    data: T;
    msg: string;
}

export interface BaseOptionParam {
    value: string;
    label: string;
}