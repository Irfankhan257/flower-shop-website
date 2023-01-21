const express = require("express");
const app = express();
const Form = require("./mongodb");
const hbs = require("hbs");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index.hbs");
});

app.post("/", async (req, res) => {
  const Data = {
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
    comment: req.body.comment,
  };

  await Form.insertMany([Data]);

  res.render("index.hbs");
});
app.listen(3000, () => {
  console.log("Server Live at http://localhost:3000/");
});
