//db연결하기
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "newuser",
  pw: "1234",
  database: "kdt7",
});

//회원가입 아이디, 이름, 패스워드 등록
exports.MpostUser = (data, callback) => {
  conn.query(
    `INSERT INTO user(userid, name, pw) values('${data.userid}','${data.name}','${data.pw}')`,
    function (err, rows) {
      if (err) {
        console.log(err);
      }
      console.log("MpostUser :", rows);
      callback(rows.insertId);
    }
  );
};

//모델에서 데이터 조회
exports.MpostLogin = (data, callback) => {
  conn.query(
    `SELECT * FROM user WHERE userid='${data.userid}' and pw=${data.pw}`,
    (err, rows) => {
      if (err) {
        callback(null);
        return;
      }

      if (rows.length === 0) {
        callback(null);
        return;
      }

      callback(rows[0]); //일치한경우 유저 정보를 콜백으로 컨트롤러에 전달
    }
  );
};
