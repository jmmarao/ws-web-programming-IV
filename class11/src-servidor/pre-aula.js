const express = require("express");

const porta = 8000;

const app = express();

app.use("/", (req, res, next) =>{
    console.log("Aqui eu teria toda a parte de log...");
    next();
})

app.get("/", (req, res) =>{

    console.log("Iniciando o tratamento no get /");
    //res.status(200).send("Exemplo do dia 30-05");
    res.status(200).json({id: 1, data: "30-05-22"});

});

app.post("/", (req, res) =>{

    console.log("Iniciando o tratamento no POST /");
    //res.status(200).send("Exemplo do dia 30-05");
    res.status(200).json({id: 2, data: "30-05-22"});

});



app.listen(porta, ()=>{
    console.log(`servidor rodando na porta ${porta}`);
})
