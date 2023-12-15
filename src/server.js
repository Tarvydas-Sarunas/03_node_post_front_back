const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { after } = require("node:test");

const app = express();

const { port } = require("./config");

// Database
const postsArr = [
  {
    id: 1,
    title: "Post 1",
    content: "Body of post 1",
    date: "2020-01-01",
  },
  {
    id: 2,
    title: "Post 2",
    content: "Body of post 2",
    date: "2020-01-02",
  },
  {
    id: 3,
    title: "Post 3",
    content: "Body of post 3",
    date: "2020-01-03",
  },
  {
    id: 4,
    title: "Post 4",
    content: "Body of post 4",
    date: "2020-01-04",
  },
];

// Meddleware
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
  res.json({ msg: "home route" });
});

// GET - /posts - grazins visus postus
app.get("/posts", (req, res) => {
  res.json(postsArr);
});
/// GET - posts/dates - grazins visas postu datas masyve
app.get("/posts/dates", (req, res) => {
  const datesArr = postsArr.map((arrObj) => arrObj.date);
  res.json(datesArr);
});
// GET - /posts?id=5 - grazins post su id 5
app.get("/posts", (req, res) => {
  const userId = req.query.id; // visada stringas
  const found = users.find((userObj) => userObj.id === +userId);
  res.json(found);
});

// app Listen
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
