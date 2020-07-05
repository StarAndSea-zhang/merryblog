import {Controller} from 'egg';
import ResponseFactory from '../../entiy/ResponseFactory'
import BaseResponse from "../../entiy/BaseResponse";
import {UserInfo} from "../../entiy/UserInfo";

export default class AuthController extends Controller {
    public async index() {
        const {ctx} = this;
        ctx.body = await ctx.service.test.sayHi('egg');
    }

    //判断用户名密码是否正确
    async checkLogin() {
        const {ctx, app} = this;
        // const data = ctx.query;
        // console.log('type',typeof ctx.query)

        const data = ctx.request.body;
        // 判断该用户是否存在并且密码是否正确
        const getUser = await ctx.service.user.validateUser(data.username, data.password);
        if (getUser) {
            //后续改为以下
            const token = app.jwt.sign({username: data.username}, app.config.jwt.secret);
            return (ctx.body as BaseResponse<UserInfo>) = ResponseFactory.createResponse<UserInfo>('200', {token}, '登陆成功');
        } else {
            return (ctx.body as BaseResponse<UserInfo>) = ResponseFactory.createResponse<UserInfo>('401', {})
        }
    }
}