const port = 8000;
const baseURL = `http://localhost:${port}`;
const foods = ["Paella", "Arroç al forn", "Arroç al senyoret"];
let randomNumber;

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(`<a href="/foods">El ejercicio 1 está en /foods</a>
    <br>
    <a href="/foods">El ejercicio 2 está en /minmax</a>
    `);
});

//Ejercicio 1
app.get("/foods", (req, res) => {
  randomNumber = Math.floor(Math.random() * 3);
  res.send(`The food for today's lunch is ${foods[randomNumber]}</a>`);
});

//Ejercicio 2

app.listen(port, () => {
  console.log(`Listen on ${baseURL}`);
});
