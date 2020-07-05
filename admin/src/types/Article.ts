export interface IArticle {
    id?:number;
    title: string,
    introduce: string,
    content:string,
    createTime?:string,
    typeId: number,
    type?: string,
    isDraft:number
}