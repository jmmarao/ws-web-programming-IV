const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const bodyParser = require("body-parser");

const porta = 8000;

const app = express();

/*
https://www.csfieldguide.org.nz/en/interactives/rsa-key-generator/

https://github.com/auth0/node-jsonwebtoken
*/


//ToDo: Ajustar o controle do CORS antes do deploy
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Requisição de lista de alunos. DEVE exigir um token válido
app.get("/alunos", (req, res) => {
    console.log("Iniciando o tratamento do GET /alunos");
    res.status(200).json([
        { id: 1, nome: "Danilo" },
        { id: 2, nome: "Bianchi" },
        { id: 3, nome: "Carlao" },
        { id: 4, nome: "Salina" }
    ]);
})

app.listen(porta, () => {
    console.log(`servidor rodando na porta ${porta}`);
})
