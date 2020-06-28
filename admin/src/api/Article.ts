import BaseResponse from '../api/BaseResponse';
import { NetWorkUtil } from '../api/NetworkUtils';

export async function typeList(): Promise<BaseResponse<any>> {
    return (
        await NetWorkUtil.createAPI<any, BaseResponse<any>>(
            '/admin/type/list',
            'GET'
        )
    ).data;
}