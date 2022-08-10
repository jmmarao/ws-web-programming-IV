const express = require("express");
const app = express();
const port = 8888;

app.use("/student", require("./student/studentIndex"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});