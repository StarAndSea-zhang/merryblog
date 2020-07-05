import {Controller} from 'egg';
import ResponseFactory from "../../entiy/ResponseFactory";
import {UserInfo} from "../../entiy/UserInfo";

export default class TypeController extends Controller {
    public async getCatagories() {
        const {ctx} = this;
        try {
            const data = await ctx.service.catagories.list();
            return ctx.body = ResponseFactory.createResponse<UserInfo>('200', data, '获取文章类型成功');
        } catch (e) {
            return ctx.body = ResponseFactory.createResponse<object>('500', {}, e.toString());
        }
    }
}