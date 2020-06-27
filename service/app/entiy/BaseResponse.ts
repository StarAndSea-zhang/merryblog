export default interface BaseResponse<T> {
    code:string;
    msg:string;
    data:T;
}
