// //임시데이터
// exports.getVisitors = () => {
//   return [
//     { id: 1, name: "홍길동", comment: "내가왔다" },
//     { id: 2, name: "이찬혁", comment: "으라차차" },
//   ];
// };

//db연결, mysql의 접속 정보 값들 입력
const mysql = require("mysql");

//(conn = connect)
const conn = mysql.createConnection({
  host: "localhost",
  user: "newuser",
  pw: "1234",
  database: "kdt7", //테이블아니고 *데이터 베이스 이름
});

//방명록 전체 보이기

//전체 보이는 모듈만들음(모듈이 db에서 데이터 가져오는 것)
exports.getVisitors = (callback) => {
  //conn의 정보를 가지고 쿼리를 날린다
  conn.query("SELECT * FROM visitor", (err, rows) => {
    if (err) {
      console.log(err); //err - 실패, rows - 성공
    }
    console.log("visitor.js :", rows); //rows - 쿼리 결과(db에서 가져온 데이터들)
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
    //'${data.name}','${data.comment}' 문자로 넣어야됨!!! 안그럼 숫자만 등록됨
    `INSERT INTO visitor(name,comment) values('${data.name}','${data.comment}')`,
    function (err, rows) {
      if (err) {
        console.log(err);
      }
      console.log("postVisitor:", rows); //insert가 완료되었을때 객체가 옴
      callback(rows.insertId); //그 객체중에 필요한게 inserId라서 콜백함수에 넣어줌
    }
  );
};

//모델 수정시 PATCH 사용 (PUT도 사용하긴함)
//data : 우리가 수정할 데이터
exports.MpatchVisitor = (data, callback) => {
  //name은 문자열처리 해줘야함
  conn.query(
    `UPDATE visitor SET name='${data.name}',comments='${data.comment}' WHERE id=${data.id}`,
    function (err, rows) {
      if (err) {
        console.log(err);
      }
      console.log("patchVisitor:", rows);
      callback(rows);
    }
  );
};

//삭제
exports.MdeleteVisitor = (id, callback) => {
  conn.query(`DELETE FROM visitor WHERE id=${id}`, (err, rows) => {
    if (err) {
      console.log(err);
    }
    callback(true);
  });
};
