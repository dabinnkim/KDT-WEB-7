const express = require('express');
const app = express();
const PORT = 8000; //고정된 상수값은 변수값 대문자로 주는게 관례
app.set('view engine','ejs')
//localhost:8000/static/image.png
// app.use('/static', express.static('public')) //public폴더 안에 있는 이미지파일, css파일 등을 가져옴
// app.use(express.static(__dirname+'/public'))

app.use(express.static(__dirname+'views')) //상대경로


app.get('/',function(req,res){ //메인페이지는 경로 '/'
    // res.send('hello express') //서버에서 페이지로 글자를 응답하겠다~
    res.render('test.ejs') //서버에서 페이지로 test.ejs를 응답하겠다~
})

app.listen(PORT, function(){ //서버실행되는 포트가 열리는 것
    console.log(`${PORT}가 열렸습니다. localhost:${PORT}`)
})

