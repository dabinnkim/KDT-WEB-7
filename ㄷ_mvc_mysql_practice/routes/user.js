const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

//컨트롤러의 main 함수 실행
router.get("/", controller.main);

//컨트롤러의 CpostUser 함수 실행시켜 signup 페이지를 렌더링
//localhost:8000/user/signup
router.get("/signup", controller.CgetUser);

//localhost:8000/user/signin
router.get("/signin", controller.CgetLogin);

//localhost:8000/user/profile
router.get("/profile", controller.renderProfile);

//localhost:8000/user/login
router.post("/login", controller.CpostLogin);

//localhost:8000/user/write
router.post("/write", controller.CpostUser);

module.exports = router; //이거 빼먹음 제발 꼭 넣기!!
