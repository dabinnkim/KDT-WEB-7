const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const PORT = 8000;

const cookieOption = {
  maxAge: 30000,
};

//쿠키를 사용하겠다~
app.use(cookieParser());

//세션
app.use(
  session({
    secret: "secret key", //secret : 세션 식별을 위한 비밀 키를 지정하는 옵션
  })
);

//템플릿
app.set("view engine", "ejs");
app.use("/view", express.static(__dirname + "/views"));

//router
app.get("/", (req, res) => {
  //쿠키요청
  res.cookie("apple", "kdt7", cookieOption); //쿠키이름, 쿠키값
  res.cookie("samsung", "web", cookieOption);

  //세션요청
  req.session.user = {
    userid: "abc",
    name: "홍길동",
  };

  res.render("index", { data1: req.cookies.apple, data2: req.cookies.samsung });
});

//세션확인용
app.get("/get", (req, res) => {
  console.log(req.session.user);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
