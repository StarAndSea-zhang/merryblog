import {Controller} from 'egg';
import ResponseFactory from "../../entiy/ResponseFactory";
import {IArticle} from "../../model/article";

export default class ArticleController extends Controller {

    //文章列表
    public async getArticles() {
        const {ctx} = this;
        try {
            const data = await ctx.service.article.list();
            return ctx.body = ResponseFactory.createResponse<Array<IArticle>>('200', (data as Array<IArticle>), '添加文章成功');
        } catch (e) {
            return ctx.body = ResponseFactory.createResponse<object>('500', {}, e.toString());
        }
    }

    //添加文章
    public async createArticle() {
        const {ctx} = this;
        const temp = this.ctx.request.body;
        try {
            const data = await ctx.service.article.create(temp)
            if (data)
                return ctx.body = ResponseFactory.createResponse<IArticle>('200', (data as IArticle), '添加文章成功');
            return ctx.body = ResponseFactory.createResponse<boolean>('500', data);

        } catch (e) {
            return ctx.body = ResponseFactory.createResponse<object>('500', {}, e.toString());
        }
    }

    //更新文章
    public async updateArticle() {
        const {ctx} = this;
        const temp = this.ctx.request.body;
        try {
            const data = await ctx.service.article.update(temp)
            if (data)
                return ctx.body = ResponseFactory.createResponse<IArticle>('200', (data as IArticle), '更新文章成功');
            return ctx.body = ResponseFactory.createResponse<boolean>('500', data);

        } catch (e) {
            return ctx.body = ResponseFactory.createResponse<object>('500', {}, e.toString());
        }
    }
}