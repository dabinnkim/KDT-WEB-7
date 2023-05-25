const express = require("express");
const controller = require("../controller/visitor"); //컨트롤러의 visitor 파일 가져오기
const router = express.Router(); //Router 함수 사용해서 라우터 객체 생성

// router.get("/"); //컨트롤러에서 만든 모듈 함수, 컨트롤 모듈에서 정의된 함수가 실행됨
router.get("/", controller.main); // '/'경로로 가면 컨트롤의 main함수 실행
router.get("/visitor", controller.getVisitor); //컨트롤의 getVisitor

module.exports = router;
