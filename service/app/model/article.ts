module.exports = app => {
    const { STRING, INTEGER, DATE,TEXT} = app.Sequelize;

    const Article = app.model.define('article', {
        title: STRING(20),
        introduce: STRING(20),
        content:TEXT,
        createTime:DATE,
        typeId: INTEGER,
        type: STRING(12),
    },{
        timestamps: false
    });

    return Article;
};