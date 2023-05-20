const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/axios", function (req, res) {
  console.log(req.query); //콘솔창 출력
  res.send(req.query); //화면에 출력
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
//
