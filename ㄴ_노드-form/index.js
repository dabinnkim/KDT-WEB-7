const express = require("express");
const app = express();
const PORT = 8000;

//미들웨어
app.set("view engine", "ejs"); //npm i express ejs 명령어로 동시에 두개 설치 가능, 뷰엔진 가져오기
app.use(express.static(__dirname + "views")); //뷰라는 폴더에 있는걸 사용한다

//body-parser : post 전송할때 필요
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//로컬호스트 : 80000일때 뷰에 있는 index파일에 접속하자
app.get("/", function (req, res) {
  res.render("index"); //뷰에있는 index 파일 렌더해줌
});

//get 요청
app.get("/getForm", function (req, res) {
  console.log(req.query); //req.query : GET요청 폼에서 가져온 데이터
  //   res.send("get 요청 성공");
  res.render("result", {
    //결과페이지 렌더링
    title: "GET 폼 요청 결과 확인하기",
    userInfo: {
      id: req.query.id, //결과페이지에 넘길 데이터
      pw: req.query.password,
    },
  });
});

//post 요청
app.post("/postForm", function (req, res) {
  console.log(req.body); //req.body : POST요청 클라이언트가 전송한 본문(body)의 데이터
  //   res.send("post 요청 성공");
  res.render("result", {
    title: "POST 요청 폼 결과 확인하기",
    userInfo: {
      id: req.body.id,
      pw: req.body.password,
    },
  });
});

///////////////////////////////////////////////
//과제26
//경로 먼저 만들고
app.get("/practice26", function (req, res) {
  res.render("practice26");
});

app.get("/practiceForm26", function (req, res) {
  //제출버튼 누르면 응답
  //   res.send("get 요청 성공");
  console.log(req.query);
  res.render("practiceResult26", {
    title: "실습26 GET 요청 폼 결과 확인하기",
    userInfo: {
      id: req.query.id,
      sex: req.query.sex,
      date: req.query.date,
      like: req.query.like, //req.query.뒤에 name 와야함, name의 밸류값들이 출력됨
    },
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});

//과제27
app.get("/practice27", function (req, res) {
  res.render("practice27");
});

app.post("/practiceForm27", function (req, res) {
  console.log(req.body);
  res.render("practiceResult27", {
    //결과창에 전송할 데이터들
    title: "실습27 POST 요청 폼 결과 확인하기",
    userInfo: {
      id: req.body.id,
      sex: req.body.sex,
      date: req.body.date,
      like: req.body.like,
      color: req.body.color,
      number: req.body.number,
    },
  });
});
