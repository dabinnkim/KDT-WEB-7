const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router 분리
//미들웨어, 라우터 하나의 독립된 기능을 가진 함수
const indexRoute = require("./routes/index"); //라우터 폴더를 가져오면됨(index.js는 생략이 가능)
app.use("/", indexRoute);

//route 폴더의 index로 분리
// app.get("/", function (req, res) {
//   res.render("index");
// });

//404 - get 맨마지막에 있어야함
app.get("*", function (req, res) {
  res.render("404");
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
