const express = require("express");
const app = express();

const morgan = require("morgan");
const cors = require("cors");

const entriesRouter = require("./src/router/entriesRouter");
app.use(
  cors({
    origin: "*",
  })
);

app.use(morgan("dev"));

app.use(express.json());

app.use(entriesRouter);

app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 - Not Found");
});

app.listen(3000, () => console.log("Servidor escuchando en puerto 3000"));
