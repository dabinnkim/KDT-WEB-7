const express = require("express");
const controller = require("../controller/main"); //컨트롤러의 main 파일 가져오겠다
const router = express.Router();

// '/', '/comment', '/comments' 세가지 경로 만들면 됨

router.get("/", controller.main); // '/'경로로 가면 컨트롤러의 main 함수 실행
router.get("/comments", controller.comments); // '/comments' 경로로 가면 컨트롤러의 comments 함수 실행
router.get("/comment/:page", controller.comment); // '/comment' 경로로 가면 컨트롤러의 comment 함수 실행

module.exports = router;
