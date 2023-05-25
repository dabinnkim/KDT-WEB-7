//가상데이터
//DB에서 가져올 때 select * from comment
exports.commentInfos = () => {
  return [
    {
      id: 1,
      userId: "helloworld",
      date: "2023-05-23",
      comments: "안녕하세요",
    },
    {
      id: 2,
      userId: "happy",
      date: "2023-05-23",
      comments: "반가워요",
    },
    {
      id: 3,
      userId: "lucky",
      date: "2023-05-20",
      comments: "좋은아침 입니다?",
    },
    {
      id: 4,
      userId: "codingon",
      date: "2023-05-15",
      comments: "첫 댓글입니다",
    },
  ];
};
