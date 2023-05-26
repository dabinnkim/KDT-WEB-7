const visitor = require("../model/visitor"); //모델에서 데이터 가져옴

exports.main = (req, res) => {
  res.render("index");
};

exports.getVisitors = (req, res) => {
  //res.render("visitor", { data: visitor.getVisitors() });
  //visitor.getVisitor()는 model에서 가져온 데이터, 모델에서 가져온 데이터는 모델에서 만든 콜백함수를 통해 전달됨
  visitor.getVisitors((result) => {
    console.log(result); //result가 모델에서 callback으로 넘겨준 rows(성공)값
    res.render("visitor", { data: result }); //visitor.ejs에 data 이름으로 데이터 전달
  });
};

//하나씩 쿼리스트링 *쿼리스트링이란? url에서 ? 뒤에오는 값들 key:value 형태롱
exports.CgetVisitor1 = (req, res) => {
  console.log(req.query);
  visitor.getVisitors1(req.query.id, (value) => {
    res.render("visitor", { data: value });
  });
};

//모델의 데이터
exports.postVisitor = (req, res) => {
  console.log(req.body);

  //모델에서 만든 post value가 콜백함수 받아온것
  visitor.postVisitor(req.body, (value) => {
    //데이터를 프론트에 보내줌
    res.send({
      result: true,
      id: value,
      name: req.body.name,
      comment: req.body.comment,
    });
  });
};
