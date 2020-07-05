module.exports = app => {
    const { STRING, INTEGER, DATE,TEXT,BOOLEAN} = app.Sequelize;

    const Article = app.model.define('article', {
        title: {
            type:STRING(20),
            allowNull: false
        },
        introduce: {
            type:STRING(20),
            allowNull: false},
        content:{
            type:TEXT,
            allowNull: false
        },
        isDraft:{
            type:BOOLEAN,
            allowNull: false
        },
        createTime:{
            type:DATE,
            allowNull: true
        },
        updateTime:{
            type:DATE,
            allowNull: true
        },
        typeId: {
            type:INTEGER,
            allowNull:false
        },
        type: {
            type:STRING(12),
            allowNull:true
        },
    },{
        timestamps: false
    });

    return Article;
};

export interface IArticle {
    id:number;
    title: string,
    introduce: string,
    content:string,
    createTime:string,
    typeId: number,
    type: string,
    isDraft:boolean
}