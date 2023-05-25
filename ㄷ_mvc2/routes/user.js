const express = require("express");
const controller = require("../controller/user"); //컨트롤러에서 user 함수 가져옴
const router = express.Router();

router.get("/", controller.user);
// 위의 경로에서 왜 / ? index.js에서 /user인지 모르겠음
//=> index.j의 /user + 여기의 경로 / 가 합쳐지는 것!

module.exports = router;
