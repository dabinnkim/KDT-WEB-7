const user = require("../model/user");

exports.main = (req, res) => {
  res.render("index");
};

//회원가입 렌더링
exports.CgetUser = (req, res) => {
  res.render("signup");
};

exports.CpostUser = (req, res) => {
  console.log(req.body);
  user.MpostUser(req.body, (value) => {
    res.send({
      result: true,
      id: value,
      userid: req.body.userid,
      name: req.body.name,
      pw: req.body.pw,
    });
  });
};

//로그인페이지 렌더링
exports.CgetLogin = (req, res) => {
  res.render("signin");
};

//프로필페이지 렌더링
exports.CpostLogin = (req, res) => {
  user.MpostLogin(req.body, (value) => {
    if (!value) {
      console.log("일치하는 사용자 없삼");
      return;
    }
    res.redirect("/user/profile");
    console.log("로그인 성공이요");

    //일치하는 경우
    // res.render("profile", { user: value });
    // req.user = value; //사용자 정보 value를 req.user에 저장
  });
};

exports.renderProfile = (req, res) => {
  res.render("profile");
};
