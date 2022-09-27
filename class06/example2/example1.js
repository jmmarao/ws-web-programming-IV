const database = require("./db.js");
const Student = require("./model/student.js");

(async () => {
    await database.sync();

    // Creating a student
    const student1 = await Student.create({
        name: "Jones",
        ra: "123"
    })
    console.log(`Student data: ${student1.name}`);

    // Finding a student
    const student2 = await Student.findByPk(1);
    console.log(student2.name);

    const student3 = await Student.findOne({
        where: { ra: "123" }
    });
    console.log(`Id student ${student3.id}`);
})();