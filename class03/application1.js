const express = require("express");
const app = express();
const port = 8888;

app.get("/", function (req, res) {
    console.log(`   GET request on: http://localhost:8888/`);

    res.status(201).send(`Welcome to resquest handle /\n\tThe status has been modified from 200 (default) to 201`);
});

app.get("/sc*", function (req, res) {
    console.log(`   GET request on: http://localhost:8888/sc*`);

    res.send("Request /sc... try access the following links:" + 
    "\n\thttp://localhost:8888/sc1\nhttp://localhost:8888/sc2\nhttp://localhost:8888/scAnyThingHere");
});

// Setting a parameter on the URL, you need to type : before the parameter (on this case :enrollment)
app.get("/student/:enrollment", (req, res) => {
    console.log(`   GET request on: http://localhost:8888/student/:enrollment`);

    res.send(`Student enrollment: ${req.params.enrollment}`);
});

app.get("/info/:classroom/:year", (req, res) => {
    console.log(`   GET request on: http://localhost:8888/info/:classroom/:year`);

    res.send(`The classroom ${req.params.classroom} should finish the subjects until ${req.params.year}`);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});