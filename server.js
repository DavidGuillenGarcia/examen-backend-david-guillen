const port = 8000;
const baseURL = `http://localhost:${port}`;
const foods = ["Paella", "Arroç al forn", "Arroç al senyoret"];
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
  let randomNumber = Math.floor(Math.random() * foods.length);
  let newFood = {
    food: foods[randomNumber],
  };
  res.send(JSON.stringify(newFood));
});

//Ejercicio 2
app.post("/minmax", (req, res) => {
  const newNumber = req.body.number;
  if (!isNaN(newNumber)) {
    numbersArray.push(newNumber);

    const MAX = Math.max(...numbersArray);
    const MIN = Math.min(...numbersArray);
    const minmax = {
      min: MIN,
      max: MAX,
    };

    res.send(JSON.stringify(minmax));
  } else {
    res.send(`${newNumber} is not a number`);
  }
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
    if (result.affectedRows > 0) {
      res.status(200).send(`User ${userId} deleted from the db.`);
    } else {
      res.status(404).send(`User ${userId} not found`);
    }
  });
});

app.listen(port, () => {
  console.log(`Listen on ${baseURL}`);
});
