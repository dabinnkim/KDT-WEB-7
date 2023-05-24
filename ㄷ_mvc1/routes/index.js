const express = require("express");
const controller = require("../controller/visitor"); //경로에 있는 controller 모듈을 가져옴
const router = express.Router(); //Router 함수 사용해서 라우터 객체 생성

// router.get("/"); //컨트롤러에서 만든 모듈 함수, 컨트롤 모듈에서 정의된 함수가 실행됨
router.get("/", controller.main); //컨트롤의 main
router.get("/visitor", controller.getVisitor); //컨트롤의 getVisitor

module.exports = router;
