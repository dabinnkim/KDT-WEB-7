//child2 기준으로 요소 찾기
function findParent(){
    console.log($('.child2').parent())  //부모찾기   
}

function findParents(){
    console.log($('.child2').parents())  //조상찾기   
}

function findNext(){
    console.log($('.child2').next()) //다음형제 찾기
}

function findPrev(){
    console.log($('.child').prev())//이전형제 찾기
}

//parent 기준 요소 찾기
function findChildren(){
    console.log($('.parent').children()) //모든 자식 찾기
}

//class 제어
function addClass(){
    $('.origin-class').addClass('add-class')
}

function addClassJs(){
    let origin = document.querySelector('.origin-class')
    origin.classList.add('add-class')
}

function removeClass(){
    $('.origin-class').removeClass('origin-class')
}

function removeClassJs(){
    let origin = document.querySelector('.origin-class')
    origin.classList.remove('origin-class')
}

//class 유무 확인
function hasClass(){
    console.log($('.origin-class').hasClass('origin-class'))
}

function hasClassJs(){
    let origin = document.querySelector('.origin-class')
    console.log(origin.classList.contains('origin-class')) //있으면 true
}

//토글키
function toggleClass(){
    $('.origin-class').toggleClass('add-class')
}

function toggleClassJs(){
    let toggle = document.querySelector('.origin-class')
    toggle.classList.toggle('add-class')
}