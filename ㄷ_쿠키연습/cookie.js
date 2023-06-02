const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const PORT = 8000;

app.use(cookieParser());

const cookieOption = {
  maxAge: 60 * 1000,
};

//템플릿
app.set("view engine", "ejs");
app.use("/view", express.static(__dirname + "/views"));

app.get("/", (req, res) => {
  res.render("index", { data: req.cookies.popup }); //req객체의 cookies 속성에서 popup이라는 이름의 쿠키
});

//axios의 post
app.post("/setCookie", (req, res) => {
  res.cookie("popup", "hide", cookieOption);
  res.send({ result: true });
});

app.get("/clearCookie", (req, res) => {
  //res.clearCookie(키,값,옵션)
  //키,값,옵션이 생성한것과 동일해야함, maxAge는 일치할 필요 업음
  res.clearCookie("popup", "hide", cookieOption);
  res.send({ result: "clear" });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
