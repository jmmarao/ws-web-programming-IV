// First you need to install express library: npm install -save express

var express = require("express");
var app = express();
const port = 12345;

app.use("/", function (req, res, next) {
    console.log(`Request handled now: ${new Date()}`);
    console.log(`\tComment this function to see static pages...`);
});

app.get("/", function (req, res) {
    res.send(`Welcome!`);
});

// Initialize a server HTML on folder path
app.use("/institutional", express.static("static"));

app.listen(port, function () {
    console.log(`Server running on port ${port}.\n   Click on the following links:\n\thttp://localhost:12345/`);
    console.log(`\thttp://localhost:12345/institutional`);
});