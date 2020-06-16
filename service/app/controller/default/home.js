'use strict';

const Controller = require('egg/index').Controller;

class HomeController extends Controller {
    // async index() {
    //     const { ctx } = this;
    //     const result = await this.app.mysql.get('article',{});
    //     console.log(result)
    //     ctx.body = result;
    // }

    async list(){
        const { ctx } = this;
        ctx.body = '<h1>list</h1>'
    }

    async lastest(){
        let sql = 'select article.id as id ,'+
            'article.title as title ,'+
            'article.introduce as introduce ,'+
            'article.createTime as createTime '+
            'from article left join type on article.typeId = type.id'
       const results = await this.app.mysql.query(sql)
        this.ctx.body = {code:'200',data:results}
    }
}

module.exports = HomeController;
