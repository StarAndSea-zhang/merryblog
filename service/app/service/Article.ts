import { Service } from 'egg';
import {IArticle} from "../model/article";
import {timeFormat} from "../utils/Filter";
/**
 * Test Service
 */
export default class Article extends Service {

    readonly TURE = 1;
    readonly FLASE = 0;

    async findTypeById(id:number):Promise<Error | string>{
        try {
            const typeObject = await this.ctx.model.Type.findAll(
                {
                    where: {
                        id
                    },
                }
            );
            return typeObject[0].dataValues.name;
        }catch (e) {
            throw new Error(e)
        }
    }

    async list() {
        try{
            return await this.ctx.model.Article.findAll();
            // 跳过5个实例,然后获取5个实例
            // Project.findAll({ offset: 5, limit: 5 });
        } catch (err) {
            throw new Error(err);
        }
    }

    /**
     *
     * @param temp
     */
    async create(temp:IArticle):Promise<Error | IArticle>{
        try{
            const time = timeFormat(new Date(),'yyyy-MM-dd hh:mm:ss');
            const typeObject = await this.ctx.model.Type.findAll(
                {
                    where: {
                        id: temp.typeId
                    },
                }
            );
            const typeName = typeObject[0].dataValues.name;
            if (temp.id) {
                const article = await this.ctx.model.Article.findByPk(temp.id);
                const result = await article.update({
                    title: temp.title,
                    content: temp.content,
                    introduce: temp.introduce,
                    typeId:temp.typeId,
                    type:typeName,
                    createTime:time,
                    updateTime:time,
                    isDraft:temp.isDraft
                });
                return result;
            }else{
                const result = await this.ctx.model.Article.create({
                    title: temp.title,
                    content: temp.content,
                    introduce: temp.introduce,
                    typeId:temp.typeId,
                    type:typeName,
                    createTime:time,
                    isDraft:temp.isDraft
                });
                return result;
            }

        }catch(err) {
             throw new Error(err);
        }
    }


    /**
     *
     * @param temp
     */
    async update(temp:IArticle):Promise<Error | IArticle>{
        try{
            const time = timeFormat(new Date(),'yyyy-MM-dd hh:mm:ss');
            const typeName = this.findTypeById(temp.typeId);
            const result = await this.ctx.model.Article.update({
                title: temp.title,
                content: temp.content,
                introduce: temp.introduce,
                typeId:temp.typeId,
                type:typeName,
                updateTime:time,
                isDraft:temp.isDraft
            });
            return result;
        }catch(err) {
            throw new Error(err);
        }
    }
}
