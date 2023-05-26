// //임시데이터
// exports.getVisitors = () => {
//   return [
//     { id: 1, name: "홍길동", comment: "내가왔다" },
//     { id: 2, name: "이찬혁", comment: "으라차차" },
//   ];
// };

const mysql = require("mysql");
//db연결, mysql의 접속 정보 값들 입력
//(conn = connect)
const conn = mysql.createConnection({
  host: "localhost",
  user: "newuser",
  pw: "1234",
  database: "kdt7", //테이블아니고 *데이터 베이스
});

//방명록 전체 보이기
//전체 보이는 모듈만들음(모듈이 db에서 데이터 가져오는 것)
exports.getVisitors = (callback) => {
  //conn의 정보를 가지고 쿼리를 날린다
  //rows - 쿼리 결과
  conn.query("SELECT * FROM visitor", (err, rows) => {
    if (err) {
      console.log(err); //err - 실패, rows - 성공
    }
    console.log("visitor.js :", rows);
    callback(rows); //콜백은 쿼리 실행 결과를 전달하기 위해 사용, 컨트롤러의 visitor에 전달해줌
  });
};

//방명록 하나 조회
//GET /visitor/visitor/get?id=index
exports.getVisitors1 = (id, callback) => {
  conn.query(`select * from visitor where id=${id}`, (err, rows) => {
    if (err) {
      console.log(err);
    }
    console.log("getVisitors1", rows);
    callback(rows);
  });
};

//방명록 등록
exports.postVisitor = (data, callback) => {
  conn.query(
    //쿼리문 실행
    `INSERT INTO visitor(name,comment) values(${data.name}`,
    `${data.comment})`,
    function (err, rows) {
      if (err) {
        console.log(err);
      }
      console.log("postVisitor:", rows); //insert가 완료되었을때 객체가 옴
      callback(rows.insertId); //그 객체중에 필요한게 inserId라서 콜백함수에 넣어줌
    }
  );
};
