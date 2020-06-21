import { NetWorkUtil } from './NetworkUtils';
import BaseResponse from './BaseResponse';
/**
 * 获取首页轮播图
 * @returns {
 *  title:string; 背景图标题
 *  dataUrl:string; 背景图链接
 *  linkUrl:string; 背景图跳转游戏URL
 * }
 */
export async function login(data: any): Promise<BaseResponse<any>> {
    return (
        await NetWorkUtil.createAPI<any, BaseResponse<any>>(
            '/admin/login',
            'POST',
            data
        )
    ).data;
}