const express = require("express");
const app = express();
const PORT = 8000;
const path = require("path");

//multer 설정
const multer = require("multer");
const upload = multer({
  // 파일 저장 경로 ( 설정이 없으면 기본 저장만 되므로 설정까지 같이 하는 작업 필요)
  dest: "uploads/",
});

//요게 업로드 설정하는 작업
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    //파일이름 넣어주기
    filename(req, file, done) {
      const ext = path.extname(file.originalname); //파일의 확장자만 가져옴 ex)jpg,pdf등
      done(null, path.basename(file.originalname, ext) + Date.now() + ext); //파일의 원래 이름만 가져오기 위해 위에서 구한 확장자명을 지우고 날짜를 넣고 다시 확장자를 붙임
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, //파일 사이즈
});

//템플릿
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//폴더에서 파일가져올수있음
app.use("/views", express.static(__dirname + "/views"));
app.use("/uploads", express.static(__dirname + "/uploads"));
//맨앞에 경로가 붙으면 로컬호스트/경로/파일이름?

app.get("/", function (req, res) {
  res.render("index");
});

//single : 싱글파일 업로드
app.post("/upload", uploadDetail.single("fileName"), function (req, res) {
  //위의 upload때문에 upload.single 해준것
  res.send("싱글 파일업로드");
});

//array : 파일 여러개 업로드
app.post("/upload/array", uploadDetail.array("fileName"), function (req, res) {
  res.send("멀티파일 업로드");
});

//fields : 파일 여러개 따로 업로드
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "fileName1" }, { name: "fileName2" }]),
  function (req, res) {
    res.send("각각 멀티파일 업로드");
  }
);

//동적파일 업로드
app.post("/dynamic", uploadDetail.single("dynamicUpload"), function (req, res) {
  console.log(req.file);
  res.send(req.file);
});

//과제
app.get("/practice", function (req, res) {
  res.render("practice");
});
// /join으로 들어갔을때 result 렌더링
app.post("/join", uploadDetail.single("fileName"), function (req, res) {
  // res.send(req.body);
  console.log(req.file);
  res.render("result", {
    userInfo: {
      id: req.body.userid,
      pw: req.body.userpw,
      name: req.body.username,
      age: req.body.userage,
      file: req.file.filename,
    },
  });
});

app.listen(PORT, () => {
  console.log(`로컬호스트 ${PORT}`);
});
