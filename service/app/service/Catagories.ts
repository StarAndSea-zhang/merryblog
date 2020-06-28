import { Service } from 'egg';
/**
 * Test Service
 */
export default class Catagories extends Service {
    async list() {
        return await this.ctx.model.Type.findAll();
    }
}
