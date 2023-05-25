const user = require("../model/user"); //user데이터 가져오기

//user 함수 실행시 뷰의 user.ejs 렌더링 + userInfo 이름으로 데이터 전달
exports.user = (req, res) => {
  res.render("user", { userInfo: user.userInfo() });
};
