const express = require("express");
const controller = require("../controller/visitor");
const router = express.Router();

//GET localhost:8000/visitor/
router.get("/", controller.main); // /visitor + /

//GET localhost:8000/visitor/visitors
router.get("/visitors", controller.getVisitors);

//GET localhost:8000/visitor/get?id=N
router.get("/get", controller.CgetVisitor1);

//GET localhost:8000/visitor/:id
router.get("/:id", controller.CgetVisitor2); //콘솔창에 { id: '3' } 형식으로 출력

//POST localhost:8000/visitor/write
router.post("/write", controller.postVisitor);

//PATCH localhost:8000/visitor/edit
router.patch("/edit", controller.CpatchVisitor);

//DELTE localhost:8000/visitor/delete
router.delete("/delete", controller.CdeleteVisitor);

module.exports = router;
