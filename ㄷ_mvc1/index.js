const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router 분리
//미들웨어, 라우터 하나의 독립된 기능을 가진 함수
const indexRoute = require("./routes/index"); // index.js는 생략 가능해서 routes(폴더이름)만 써도됨
app.use("/", indexRoute);
//라우트의 index파일 안에 경로가 두개 있어도 하나만 만들어도 됨

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
