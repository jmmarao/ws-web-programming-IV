const database = require("./db.js");
const StudentClassroom = require("./model/studentClassroom.js");
const Classroom = require("./model/classroom.js");

(async () => {
    await database.sync();

    const classroom = await Classroom.create({
        name: "2022-2"
    });

    // Creating a student
    const student1 = await StudentClassroom.create({
        name: "Jones",
        ra: "123"
    })
})();