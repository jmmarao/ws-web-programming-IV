// Required: npm install sequelize

const Sequelize = require("sequelize");

const sequelize = new Sequelize("sql10519389", "sql10519389", "MwJU146mWa", {
    host: "sql10.freemysqlhosting.net",
    dialect: "mysql",
    port: 3306,
    logging: true
});

(async function () {
    try {
        await sequelize.authenticate();
        console.log(`Connected successfully`);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
})();

module.exports = sequelize;