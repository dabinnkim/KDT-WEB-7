const { escapeXML } = require("ejs");
const express = require("express");
const app = express();
const PORT = 8000;

//템플릿
app.set("view engine", "ejs");
app.use(express.static(__dirname + "views"));

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//pages
app.get("/", function (req, res) {
  res.render("index"); //index 파일 렌더링
});

app.get("/practice29", function (req, res) {
  res.render("practice29");
});

app.get("/practice30", function (req, res) {
  res.render("practice30");
});

//ajax get
app.get("/ajax", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

//axois get
app.get("/axios", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.get("/fetch", function (req, res) {
  console.log(req.query); //ejs의 data
  res.send(req.query);
});

//실습 29
app.get("/axios2", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

//ajax post
app.post("/ajax", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

//axios post
app.post("/axios", function (req, res) {
  res.send(req.body);
});

app.post("/axios3", function (req, res) {
  console.log(req.body);
  res.send(req.body);

  // const data = {
  //   result: true,
  //   code: 0,
  //   msg: "응답",
  // };

  if (req.body.id === id && req.body.pw === pw) {
    res.send({ result: true, userInfo: req.body, msg: "성공하였습니다." }); //성공값을 프론트엔드에 주는 것
  } else {
    res.send({ result: false, msg: "로그인 실패" });
  }
});

app.post("/fetch", function (req, res) {
  res.send(req.body);
});

//port 생성
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
