import { Service } from 'egg';
/**
 * Test Service
 */
export default class Article extends Service {
    async list() {
        return await this.ctx.model.Article.findAll();
    }
}
