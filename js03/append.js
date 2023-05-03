function htmlJs(){
    let green = document.querySelector('.green')
    green.innerHTML = '<h1>하이요???</h1>'
}

function htmlJquery(){
    $('.green').html('<h1>하이요</h1>')
}





function appendJs(){
    let ul = document.querySelector('.colors')
    let li = document.createElement('li') //li태그 생성시켜줌
    li.innerHTML = '마지막 자식'
    ul.append(li)
}

function appendJquery(){
    $('.colors').append('<li>jquery 마지막 자식 추가</li>')
}





function prependJs(){
    let ul = document.querySelector('.colors')
    let li = document.createElement('li') //li태그 생성시켜줌
    li.innerHTML = '첫번째 자식'
    ul.prepend(li)
}

function prependJquery(){
    $('.colors').prepend('<li>첫번째 자식 추가</li>')
}





function beforeJs(){
    let green = document.querySelector('.green') //그린기준으로 앞에 추가
    let li = document.createElement('li')
    li.textContent = '이전 형제'
    green.before(li)
}

function beforeJquery(){
    $('.green').before('<li>이전 형제 추가</li>')
}





function afterJs(){
    let navy = document.querySelector('.navy')
    let li = document.createElement('li')
    li.textContent = '다음 형제'
    navy.after(li)
}

function afterJquery(){
    $('.navy').after('<li>다음 형제 추가</li>')
}





function removeJs(){ //장바구니 기능 구현 가능
    let li2 = document.querySelector('#li2')
    li2.remove()
}

function removeJquery(){
    $('#li2').remove()
}





function emptyJs(){
    let ul =document.querySelector('.nums')
    ul.innerHTML='' //자기자신만남고 자식 다 삭제
}

function emptyJquery(){
    $('.num').empty()
}
