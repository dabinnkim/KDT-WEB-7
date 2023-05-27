const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//localhost:8000/user
//user가 라우터
const userRouter = require("./routes/user");
app.use("/user", userRouter);

app.get("*", function (req, res) {
  res.render("404");
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
