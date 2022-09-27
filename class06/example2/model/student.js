const Sequelize = require("sequelize");
const database = require("../db.js");

const Student = database.define("student", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    },
    ra: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    }
});

module.exports = Student;