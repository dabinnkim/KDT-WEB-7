const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const visitorRouter = require("./routes");

app.use("/visitor", visitorRouter);

//주소 잘못 들어갔을 때 404 - get 맨마지막에 있어야함
app.get("*", function (req, res) {
  res.render("404");
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
