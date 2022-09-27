const express = require("express");
const app = express();

const database = require("./connection.js");

const port = 8888;

app.post("/table", async (req, res) => {
    console.log(`Creating table in exampleSQL.js...`);
    const result = await database.createTable();
    res.send(result);
});

app.use(express.urlencoded({ extended: true }));

app.post("/student", async (req, res) => {
    console.log(`Inserting student in exampleSQL.js...`);
    const result = await database.addStudent({
        name: req.body.name,
        password: req.body.password
    });
    res.send(result);
});

app.get("/student/:id?", async (req, res) => {
    console.log(`Finding student in exampleSQL.js...`);

    if (req.params.id) {
        const result = await database.findStudent(req.params.id);
        res.send(`Student ${result.name}`);
    }
    else {
        res.send(`Please, type an id to find a student.`);
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});