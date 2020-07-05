import {Service} from 'egg';

const crypto = require('crypto');
const DEFAULT_PWD = '123456'
/**
 * Test Service
 */
export default class User extends Service {

    async validateUser(username: string, password: string) {
        try {
            const data = await this.ctx.model.User.findAll();
            const pwd = this.getMd5Data(password);
            for (const item of data) {
                // console.log('加密',item.dataValues.username)
                if (item.dataValues.username === username && item.dataValues.password === pwd)
                    return true;
            }
            return false;
        } catch (e) {
            return false;
        }

    }

    getMd5Data(data: string) {
        //返回加密的密文16进制
        return crypto.createHash('md5').update(data).digest('hex');
    }

    // 新增人员
    async createUser(username: string) {
        const {ctx} = this;
        const password = this.getMd5Data(DEFAULT_PWD);
        await ctx.model.User.create({username, password});
    }

    async getUserById(id) {
        const {ctx} = this;
        let userInfo = {};
        try {
            userInfo = await ctx.model.User.findAll({
                where: {
                    id,
                },
                // 查询操作的时候，加入这个参数可以直接拿到对象类型的查询结果，否则还需要通过方法调用解析
                raw: true,
            });
        } catch (err) {
            ctx.logger.error(err);
        }
        return userInfo;
    }
}
