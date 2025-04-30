const port = 8000;
const baseURL = `http://localhost:${port}`;
const foods = ["Paella", "Arroç al forn", "Arroç al senyoret"];
let randomNumber;
let numbersArray = [];

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Funca!");
});

//Ejercicio 1
app.get("/foods", (req, res) => {
  randomNumber = Math.floor(Math.random() * 3);
  res.send(`The food for today's lunch is ${foods[randomNumber]}`);
});

//Ejercicio 2
app.post("/number", (req, res) => {
  const newNumber = req.body.number;
  numbersArray.push(newNumber);

  const MAX = Math.max(...numbersArray);
  const MIN = Math.min(...numbersArray);

  res.send(`Min: ${MIN}   Max: ${MAX}`);
});

//Ejercicio 3
app.put("/users", (res, req) => {
  const userId = req.params.id;
  const sql = `DELETE FROM users WHERE id=${userID}`;
  db.query(sql, (error, result) => {
    if (error) throw error;
    res.send(`User ${userId} deleted from the db.`);
  });
});

// Método erroneo, al ser un params hay que añadirle un :{nombre del parametro} a la dirección y variable userId mal escrita

app.delete("/users/:id", (res, req) => {
  const userId = req.params.id;
  const sql = `DELETE FROM users WHERE (id) = ${userId}`;
  db.query(sql, (error, result) => {
    if (error) throw error;
    res.send(`User ${userId} deleted from the db.`);
  });
});

app.listen(port, () => {
  console.log(`Listen on ${baseURL}`);
});
