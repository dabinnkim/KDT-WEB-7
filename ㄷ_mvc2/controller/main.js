const comment = require("../model/comment"); //모델에 있는 커멘트 데이터 가져옴

//main은 index.ejs
exports.main = (req, res) => {
  res.render("index");
};

//commets 함수 실행시 comments.ejs 파일 렌더링 + 데이터 전송
exports.comments = (req, res) => {
  res.render("comments", { commentInfos: comment.commentInfos() });
};

//comment 함수 실행시 comment.ejs 파일 렌더링 + 데이터 전송
exports.comment = (req, res) => {
  const commentId = req.params.page; //url의 파라미터값을 가져옴, 라우트에서 /:page 이부분이 들어오는 것
  const comments = comment.commentInfos(); //모델에서 가져온 가상데이터

  if (commentId < 1 || commentId > comments.length) {
    res.render("404");
  }

  if (isNaN(commentId)) {
    res.render("404");
  }

  res.render("comment", { commentInfo: comments[commentId - 1] }); //배열의 인덱스는 0부터 시작하므로 -1 해줌
};
