const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { after } = require("node:test");

const app = express();

const { port } = require("./config");

// Meddleware
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
  res.json({ msg: "home route" });
});

// app Listen

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
