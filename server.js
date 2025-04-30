const port = 8000;
const baseURL = `http://localhost:${port}`;

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("It works");
});

app.listen(port, () => {
  console.log(`Listen on ${baseURL}`);
});
