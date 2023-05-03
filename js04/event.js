console.log(document)


//제이쿼리
$(document).ready(function(){
    console.log('ready-문서의 DOM()이 완성되면 실행하는 이벤트')
})

$(function(){
    console.log('방법2')
})

//자바스크립트
document.addEventListener('DOMContentLoaded',function(){
    console.log('DOMContentLoaded-문서의 DOM이 완성되면 실행')
})





//마우스 이벤트
//이 요소를 클릭하면 콜백함수를 실행해라~

//this 안됨 - this는 자기자신만
$('.hello').click((e)=>{
    $('.hello').css('color','red');
})

$('.num').click(function(){ 
    // $('.num').css('color','blue');
    $(this).css({'color':'pink','font-weight':'bold'})
})


$('.num').on('click',function(){ 
    $(this).css('color','yellow')
})

$('.numbers').mouseover(function(){
    $('.numbers').css('background-color','green')
    // $(this).css('background-color','yellow')
})

$('.numbers').on('mouseover',function(){
    $(this).css('background-color','skyblue')
})

//인자에 함수가 두개!!오는 hover ex)메뉴만들때 많이 씀
$('.hover').hover(function(){
    $(this).css('color','red')
},function(){
    $(this).css('color','blue')
})

// $('.menu').hover(function(){
//     $('.sub1').css('display','block')
// },function(){
//     $('.sub1').css('display','none')
// })

//이거안됨
$('.menu').mouseenter(function(){
    $('.sub1').toggleClass('block')
})

//스크롤
$(window).scroll(function(){
    console.log('scroll')
})

//////////////////////////////////////////////////////////

//키보드
$('.input-key').keydown(function(e){ //키다운-키보드 누르는 이벤트
    console.log(e.code) //이벤트객체중에 code 선택
    if(e.code=='ArrowUp'){
        console.log('up')
    }else if(e.code=='ArrowRight'){
        console.log('ArrowRight')
    }else if(e.code=='ArrowLeft'){
        console.log('ArrowLeft')
    }else if(e.code=='ArrowDown'){
        console.log('ArrowDown')
    }else{
        console.log('others')
    }
})


//on사용하기
$('.input-key').on('keydown',function(e){
    console.log(e.code)
})


//폼태그
$('#todo-form').submit(function(e){
    e.preventDefault(); //제출버튼 눌렀을때 새로고침 안되게
    const todo=$('input[name=todo]').val() //name을 todo로 갖는 input 문자처리해줘야함
    console.log(todo)
    $('.todos').append(`<li>${todo}</li>`)
    $('input[name=todo]').val('')
})

















