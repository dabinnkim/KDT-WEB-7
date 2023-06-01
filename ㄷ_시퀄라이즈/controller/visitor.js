// const visitor = require("../model/visitor"); //모델에서 데이터 가져옴
//모델즈에서 데이터 가졍모
const models = require("../models");

//get localhost:PORT
exports.index = (req, res) => {
  //views/index.ejs
  res.render("index");
};

//모델에서 받은 db 전체 데이터 뷰로 보내기
exports.getVisitors = (req, res) => {
  //sequlize
  models.visitor.findAll().then((result) => {
    console.log(result);
    res.render("visitor", { data: result });
  });
};

//하나씩 쿼리스트링 *쿼리스트링이란? url에서 ? 뒤에오는 값들 key:value 형태롱
exports.CgetVisitor1 = (req, res) => {
  //sequlize
  models.visitor.findOne({ where: { id: req.query.id } }).then((result) => {
    res.render("visitor", { data: [result] });
  });
};

//하나씩 params
exports.CgetVisitor2 = (req, res) => {
  //model에서 만든 모듈 실행
  console.log(req.params);
  // visitor.getVisitors1(req.params.id, (value) => {
  //   res.send(value); //ejs에 value값만 보냄
  // });
  models.visitor.findOne({ where: { id: req.params.id } }).then((result) => {
    res.send([result]);
  });
};

//등록
exports.postVisitor = async (req, res) => {
  console.log(req.body);

  models.visitor
    .create({ name: req.body.name, comment: req.body.comment })
    .then((result) => {
      console.log(result),
        res.send({
          result: true,
          //전체 Visitor 데이터에서 dataValues의 id값만 가져오는거
          id: result.dataValues.id,
          name: req.body.name,
          comment: req.body.comment,
        });
    });
};

//수정
//get빼고는 req.body??
exports.CpatchVisitor = (req, res) => {
  console.log(req.body);
  //모델에서 만든 모듈 실행
  // visitor.MpatchVisitor(req.body, () => {
  //   res.send({ result: true }); //reulst:true 나 데이터 전송 성공했다 알리는것
  // });
  models.visitor
    .update(
      {
        name: req.body.name,
        comment: req.body.comment,
      },
      {
        where: { id: req.body.id },
      }
    )
    .then(() => {
      res.send({ result: true });
    });
};

//삭제
exports.CdeleteVisitor = (req, res) => {
  // //모델에서 만든 모듈
  // visitor.MdeleteVisitor(req.body.id, (value) => {
  //   res.send({ result: value });
  // });
  models.visitor.destroy({ where: { id: req.body.id } }).then(() => {
    res.send({ result: true });
  });
};
