module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const Type = app.model.define('type', {
        name: STRING(12),
        order: INTEGER,
    },{
        timestamps: false
    });

    // User.findByLogin = async function(login) {
    //     return await this.findOne({
    //         where: {
    //             login: login
    //         }
    //     });
    // }

    // don't use arraw function
    // Type.prototype.logSignin = async function() {
    //     return await this.update({ last_sign_in_at: new Date() });
    // }

    return Type;
};