// Required: npm install jsonwebtoken, npm install body-parser and npm install -save express

const jwt = require("jsonwebtoken");
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const port = 8888;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// User login and build a token
app.post("/login", (req, res) => {
    const id = 1;
    const password = 1;
    if (id == password) {
        var privateKey = fs.readFileSync("./privateKey.key", "utf-8");
        var token = jwt.sign({ id }, privateKey, {
            algorithm: "RS256",
            expiresIn: 300
        })

        return res.status(200).json({
            logged: true,
            token: token
        });
    }
    return res.status(401).json({
        logged: false,
        token: null
    });
});

app.get("/listAll", checkToken, (req, res) => {
    console.log(`User id: ${req.userId}`);

    res.status(200).json([
        { id: 1, name: "Thor" },
        { id: 2, name: "Hulk" },
        { id: 3, name: "Iron Man" },
        { id: 4, name: "Scarlet Witch" }
    ])
});

function checkToken(req, res, next) {
    console.log(`Checking token...`);
    const token = req.headers["x-access-token"];
    if (!token) {
        return res.status(401).json(
            { logged: false, msg: "Token not retrieved" }
        );
    }

    const publicKey = fs.readFileSync("./publicKey.key", "utf-8");
    jwt.verify(token, publicKey, { algorithms: ["RS256"] }, function (err, decoded) {
        if (err) {
            console.log(err);
            return res.status(401).json({ logged: false, msg: "Invalid token! Try again..." })
        }
        console.log("Token decrypted");
        console.log(decoded);
        req.userId = decoded.id;
        next();
    });

    next();
}

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});