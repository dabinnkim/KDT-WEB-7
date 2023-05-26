const express = require("express");
const controller = require("../controller/visitor");
const router = express.Router();

//GET localhost : 8000/visitor/
router.get("/", controller.main); // /visitor + /

//GET localhost : 8000/visitor/visitors
router.get("/visitors", controller.getVisitors);

//GET localhost:8000/visitor/get?id=N
router.get("/get", controller.CgetVisitor1);

//POST localhost : 8000/visitor/write
router.post("/write", controller.postVisitor);

module.exports = router;
