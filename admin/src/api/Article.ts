import BaseResponse from '../api/BaseResponse';
import { NetWorkUtil } from '../api/NetworkUtils';
import {IArticle} from "../types/Article";

export async function typeList(): Promise<BaseResponse<any>> {
    return (
        await NetWorkUtil.createAPI<any, BaseResponse<any>>(
            '/admin/type/list',
            'GET'
        )
    ).data;
}

export async function articleList(): Promise<BaseResponse<any>> {
    return (
        await NetWorkUtil.createAPI<any, BaseResponse<any>>(
            '/admin/article/list',
            'GET'
        )
    ).data;
}

export async function articleCreate(data:IArticle): Promise<BaseResponse<any>> {
    return (
        await NetWorkUtil.createFormAPI<IArticle, BaseResponse<any>>(
            '/admin/article',
            'PUT',
            data
        )
    ).data;
}
export async function articleUpdate(data:IArticle): Promise<BaseResponse<any>> {
    return (
        await NetWorkUtil.createFormAPI<IArticle, BaseResponse<any>>(
            '/admin/article',
            'POST',
            data
        )
    ).data;
}

