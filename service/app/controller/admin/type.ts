import { Controller } from 'egg';

export default class TypeController extends Controller {
    public async getCatagories() {
        const { ctx } = this;
       return ctx.body = await ctx.service.catagories.list();
    }
}