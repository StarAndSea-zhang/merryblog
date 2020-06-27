import BaseResponse from "./BaseResponse";

export default class ResponseFactory{

   public static createResponse<T>(code:string,msg:string,data:T):BaseResponse<T>{
       return {code,msg,data};
   }
}