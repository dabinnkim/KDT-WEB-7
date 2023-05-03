function submitJavaScript(){
    document.getElementById('div1').innerHTML="자바스크립트"
}

function submitJquery(){
    $("#div1").html("제이쿼리")
}

function getValue(){
    let value=$('input').val(); //입력값 받아오기 *자바스크립트랑 차이점 확인하기
    console.log(value)
}

function setValue(){
    $('input').val('비번입력해라')
}


function changeJs(){
    let span = document.querySelector('#change')
    span.style = 'font-size:20px; color:red;'
}

function changeJquery(){
    $('#change').css({'font-size':'40px','color':'blue'}) //오브젝트형태
}

function getJquery(){
   console.log($('#change').css('color')) //현재 color
}

function changeAttJs(){
    let a = document.querySelector('#move')
    a.setAttribute('href','https://www.google.com')
}

function changeAttJquery(){
    $('#move').attr('href','https://www.google.com')
}




function changeTextJs(){   
    let p=document.querySelector('#text')
    p.textContent = '<h1>js체인지</h1>'//태그는 안들어감

}

function changeTextJquery(){
    $('#text').text('jquery체인지')
}

function changeHtmlJs(){
    let html = document.querySelector('#html')
    html.innerHTML = '<h1>자바스크립트</h1>' //innerHTML은 태그가 들어감 textcontent와 차이점
}

function changeHtmlJquery(){
    $('#html').html('<h1>Jquery</h1>') //innderHTML 같은기능
}





