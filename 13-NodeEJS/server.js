const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res){
    const items = [
        {
            title: "D",
            message: "Desenvolver aplicações/serviços de forma fácil"
        },
        {
            title: "E",
            messagem: "EJS usa JavaScrip para renderizar HTML"
        },
        {
            title: "M",
            messagem: "Muito fácil de usar"
        },
        {
            title: "A",
            messagem: "Amorzinho"
        },
        {
            title: "I",
            messagem: "install ejs"
        },
        {
            title: "S",
            messagem: "Sintaxe simples"
        },
    ];
    res.render("pages/index", {
        qualitys: items,
    });
})

app.get("/sobre", function (req, res){
    res.render("pages/about");
})

app.listen(8080);
console.log("Rodando");