// //모듈만들기

// const a = 10;
// const b = 20;

// //1번(전체)
// // function connect() {
// //   return a + b;
// // }

// // module.exports = connect;

// //2번(부분)
// module.exports.add = () => {
//   return a + b;
// };

// //2번의 축약
// exports.add1 = () => {
//   return a + b + b;
// };

// // //es6
// // export default function add1(){
// //   return a+b;
// // }

const visitor = require("../model/visitor"); //모델에 있는 데이터 가져오기

exports.main = (req, res) => {
  res.render("index");
};

//데이터 가공 - 모델안의 가상데이터를 가공해서 뷰의 인덱스로 보냄
exports.getVisitor = (req, res) => {
  console.log(visitor.getVisitor()); //가상데이터 콘솔에 찍어보기
  res.render("visitor", { data: visitor.getVisitor() }); //뷰에 data 이름으로 데이터 전달
};

exports.main = (req, res) => {
  res.render("index");
};
