import { Controller } from 'egg';

export default class ArticleController extends Controller {
    public async getArticles() {
        const { ctx } = this;
        return ctx.body = await ctx.service.article.list();
    }
}