const user = require("../model/user");

exports.main = (req, res) => {
  //index.ejs
  res.render("index");
};

//회원가입 렌더링
exports.CgetUser = (req, res) => {
  res.render("signup");
};

//로그인
exports.CpostUser = (req, res) => {
  console.log(req.body); //post로 날리는 값은 req.body로
  user.MpostUser(req.body, (value) => {
    res.send(value);
  });
};

//로그인페이지 렌더링
exports.CgetLogin = (req, res) => {
  res.render("signin");
};

//로그인했을때
exports.CpostLogin = (req, res) => {
  user.MpostLogin(req.body, (value) => {
    if (!value) {
      console.log("일치하는 사용자 없삼"); //로그인 실패시 다시 signin 렌더링하고싶은데 profile로 됨
      return;
    }
    console.log("로그인 성공이요");

    // res.redirect("/user/profile");
    // res.send({
    //   result: true,
    //   id: value,
    //   userid: req.body.userid,
    //   name: req.body.name,
    //   pw: req.body.pw,
    // });

    //일치하는 경우
    res.render("profile", { user: value }); //user 보내줬는데 안보내짐
  });
};

exports.Cpost_profile = (req, res) => {
  user.Mpost_profile(req.body, (value) => {
    console.log(value);
  });
};

//회원수정
exports.Cedit_profile = (req, res) => {
  user.Mpost_profile(req.body);
};

//회원삭제
exports.Cdel_profile = (req, res) => {
  user.Mdel_profile(req.body, () => {
    res.send({ result: true });
  });
};
