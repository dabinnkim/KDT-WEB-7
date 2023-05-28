const visitor = require("../model/visitor"); //모델에서 데이터 가져옴

exports.main = (req, res) => {
  res.render("index");
};

//모델에서 받은 db 전체 데이터 뷰로 보내기
exports.getVisitors = (req, res) => {
  //visitor.getVisitor()는 model에서 가져온 데이터, 모델에서 가져온 데이터는 모델에서 만든 콜백함수를 통해 전달됨
  visitor.getVisitors((result) => {
    console.log(result); //result가 모델에서 callback으로 넘겨준 rows(성공)값
    res.render("visitor", { data: result }); //visitor.ejs에 data 이름으로 데이터 전달
  });
};

//하나씩 쿼리스트링 *쿼리스트링이란? url에서 ? 뒤에오는 값들 key:value 형태롱
exports.CgetVisitor1 = (req, res) => {
  console.log(req.query); //req.query가 사용자가 입력한 쿼리스트링 데이터를 가져옴
  visitor.getVisitors1(req.query.id, (value) => {
    res.render("visitor", { data: value }); //ejs가 보내는 방식
    //응답.send() : 클라이언트에 응답 데이터를 보낼때 사용 .send(),render() 보통 둘중 하나만씀
    // res.send(value); //데이터를 보내는 방식?
  });
};

//하나씩 params
exports.CgetVisitor2 = (req, res) => {
  //model에서 만든 모듈 실행
  console.log(req.params);
  visitor.getVisitors1(req.params.id, (value) => {
    res.send(value);
  });
};

//모델의 데이터
exports.postVisitor = (req, res) => {
  console.log(req.body);
  //모델에서 만든 post value의 콜백함수 받아온것
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

//수정
//get빼고는 req.body??
exports.CpatchVisitor = (req, res) => {
  console.log(req.body);
  //모델에서 만든 모듈 실행
  visitor.MpatchVisitor(req.body, () => {
    res.send({ result: true }); //reulst:true 나 데이터 전송 성공했다 알리는것
  });
};

//삭제
exports.CdeleteVisitor = (req, res) => {
  //모델에서 만든 모듈
  visitor.MdeleteVisitor(req.body.id, (value) => {
    res.send({ result: value });
  });
};
