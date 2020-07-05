import {Service} from 'egg';

/**
 * Test Service
 */
export default class Catagories extends Service {
    async list() {
        try {
            return await this.ctx.model.Type.findAll();
        } catch (err) {
            throw new Error(err);
        }
    }
}
