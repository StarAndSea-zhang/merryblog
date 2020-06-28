module.exports = app => {
    const { STRING, INTEGER} = app.Sequelize;

    const Type = app.model.define('type', {
        name: STRING(12),
        order: INTEGER,
    },{
        timestamps: false
    });

    return Type;
};