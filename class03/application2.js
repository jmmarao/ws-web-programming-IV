const express = require("express");
const app = express();
const port = 8888;

app.get("/user/:id", function (req, res, next) {
    console.log(`   Id parameter ${req.params.id} was requested at ${Date.now()}`);

    if (req.params.id == "jones") {
        next("route");
    }

    next();
},
    function (req, res, next) {
        console.log(`   Second handle function...`);
        next();
    }
);

app.get("/user/:id", function (req, res, next) {
    res.send(`Hello ${req.params.id}`);
});

app.listen(port, () => {
    console.log(`   Server running on port ${port}`);
});