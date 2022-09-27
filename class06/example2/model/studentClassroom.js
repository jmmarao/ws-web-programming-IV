const Sequelize = require("sequelize");
const database = require("../db.js");
const StudentRoom = require("./classroom.js");

const StudentClassroom = database.define("student_classroom", {
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

StudentClassroom.belongsTo(Classroom, {
    constraint: true,
    foreignKey: "idClassroom"
});

Classroom.hasMany(StudentClassroom, {
    foreignKey: "idClassroom"
});

module.exports = Student;