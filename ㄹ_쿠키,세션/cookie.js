const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config(); //환경변수 관리하는 모듈
const app = express();
const PORT = 8000;

// dotenv.config();
app.use(cookieParser());

const cookieOption = {
  maxAge: 60 * 1000, //1분
  httpOnly: true,
  signed: true,
};

//템플릿
app.set("view engine", "ejs");
app.use("/view", express.static(__dirname + "/views"));

app.get("/", (req, res) => {
  res.cookie("codingon", "kdt7", cookieOption);
  res.render("index");
});

app.get("/getCookie", (req, res) => {
  console.log(req.signedCookies);
  res.send(req.cookies);
});

//쿠키제거
app.get("/clearCookie", (req, res) => {
  //res.clearCookie(키,값,옵션)
  //키,값,옵션이 생성한것과 동일해야함, maxAge는 일치할 필요 업음
  res.clearCookie("codingon", "kdt7", cookieOption);
  res.send({ result: "clear" });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
