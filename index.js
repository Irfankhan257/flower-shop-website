const express = require("express");
const app = express();
const Form = require("./mongodb");
const pug = require("pug");

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/images"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index.pug");
});

app.post("/", async (req, res) => {
  const Data = {
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
    comment: req.body.comment,
  };

  await Form.insertMany([Data]);

  res.render("index.pug");
});
app.listen(4000, () => {
  console.log("Server Live at http://localhost:4000/");
});
