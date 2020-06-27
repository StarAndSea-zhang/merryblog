import BaseResponse from '../api/BaseResponse';
import { NetWorkUtil } from '../api/NetworkUtils';

export async function login(data: any): Promise<BaseResponse<any>> {
    return (
        await NetWorkUtil.createFormAPI<any, BaseResponse<any>>(
            '/admin/login',
            'POST',
            data
        )
    ).data;
}