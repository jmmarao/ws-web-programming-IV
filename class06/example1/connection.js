// Required: npm install mysql2, npm install express

const database = require("mysql2/promise");

async function connect() {

    // get info to insert into a environment variable (or .env)
    const connection = await database.createConnection({
        host: "sql10.freemysqlhosting.net",
        port: 3306,
        database: "sql10519389",
        user: "sql10519389",
        password: "MwJU146mWa"
    });
    return connection;
}

async function createTable() {
    console.log(`Creating students table...`);

    const activeConnection = await connect();
    const sql = "CREATE TABLE IF NOT EXISTS STUDENTS_JONES" +
        " (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), password VARCHAR(100));";

    return await activeConnection.query(sql);
}

async function addStudent(student) {
    console.log(`Inserting student ${student.name} into database...`);
    const activeConnection = await connect();
    const sql = "INSERT INTO STUDENTS_JONES (name, password) VALUES (?, ?);"
    const parameters = [student.name, student.password];
    return await activeConnection.query(sql, parameters);
}

async function findStudent(id) {
    console.log(`Finding student id #${id} in database...`);
    const activeConnection = await connect();
    const [result] = await activeConnection
       // .query(
        //    "SELECT * FROM STUDENTS_JONES where id = ?;",
         //   { id }
        //);

        .query(
            "SELECT * FROM STUDENTS_JONES;",
            { id }
        );
    return result;
}

/*
(async function() {
    //console.log("calling function")
    createTable();
})();
*/

module.exports = {createTable, addStudent, findStudent};