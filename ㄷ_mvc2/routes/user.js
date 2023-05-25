const express = require("express");
const controller = require("../controller/user"); //컨트롤러에서 user 함수 가져옴
const router = express.Router();

router.get("/", controller.user); // 여기서 왜 / 이고 인덱스에서 /user인지 모르겠음

module.exports = router;
