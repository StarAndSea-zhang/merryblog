import { Controller } from 'egg';

export default class HomeController extends Controller {
    public async index() {
        const { ctx } = this;
        ctx.body = await ctx.service.test.sayHi('egg');
    }

    async list(){
        const type = await this.ctx.model.Type.findAll();
        this.ctx.body = type;
    }

    async lastest(){
        //  let sql = 'select article.id as id ,'+
        //      'article.title as title ,'+
        //      'article.introduce as introduce ,'+
        //      'article.createTime as createTime '+
        //      'from article left join type on article.typeId = type.id'
        // const results = await this.app.mysql.query(sql)
        const article = await this.ctx.model.Article.findAll();

        this.ctx.body  = {code:'200',data:article}
    }
}