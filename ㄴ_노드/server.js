const http = require('http') 
const fs = require('fs') //파일읽을수있는 모듈 실행

const server = http.createServer(function(req,res){
    // res.writeHead(200)
    // res.write('<h1>Hello world</h1>') //여기에 다 쓰면 힘드니까 html 파일을 전송함
    // res.end('<p>End</p>')

    fs.readFile('./index.html',function(err,data){ //html 파일을 불러온것
        res.writeHead(200)
        res.end(data)
    })
})

server.on('request',function(code){ //요청할때 발생하는 이벤트
    console.log('request 이벤트')
})

server.on('connection', function(code){ //접속할때 발생하는 이벤트
    console.log('connection 이벤트')
})

server.listen(8080, function(){
    console.log('8080포트 서버 실행')
})








