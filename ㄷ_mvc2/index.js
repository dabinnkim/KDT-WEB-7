const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//comment 안에 경로 3개 있음
const indexRouter = require("./routes/comment");
app.use("/", indexRouter);

//localhost:8000/user
const userRouter = require("./routes/user"); //라우트에서 경로 가져옴
app.use("/user", userRouter);

//주소 잘못 들어갔을 때 404 - get 맨마지막에 있어야함
app.get("*", function (req, res) {
  res.render("404");
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
