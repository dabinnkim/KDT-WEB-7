const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;

require("dotenv").config();

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    name: "my-session", //세션ID를 식별하기 위한 쿠키의 이름
  })
);
/*
secret - 안전하게 쿠키를 전송하기 위한 쿠키 서명값(세션을 발급할때 서용되는 키)
resave - 세션에 수정사항 생기지 않더라도 매 요청마다 세션을 다시 저장할 것인지 나타냄
saveUninitalized -세션에 저장할 내역이 없더라도 처음부터 세션을 생성할지 설정
cookie - 세션 쿠키에 대한 설정
secure - 같은 true하면 https에서만 세션을 주고받음
*/

app.set("view engine", "ejs");
app.use("/view", express.static(__dirname + "/views"));

//세션 데이터 설정
//'/'경로로 get 요청이 발생했을때 req.session 객체 사용하여 세션에 홍길동 저장
app.get("/", (req, res) => {
  req.session.name = "홍길동";
  res.send({ result: true });
});

//세션 데이터 확인
// /getSession 경로로 get 요청 발생했을때 클라이언트에게 세션에 저장된 이름 제공
app.get("/getSession", (req, res) => {
  res.send({ name: req.session.name });
});

app.get("/clearSession", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }
    res.redirect("/getSession");
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
