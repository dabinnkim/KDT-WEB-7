//변수 규칙
//1. 숫자로 시작할 수 없다
//2. 특수문자 $, _만 가능
//3. 예약어 사용 금지 ex)if, else 등
//4. 낙타표기법으로 의미있게 지어야함 ex)helloWorld
//5.

//for문
for(var i = 0; i < 10; i=i+2){
    console.log(2*i)
}

for(var i =0; i<=10; i++){
    if(i%2===0){
        console.log(i)
    }
}

//1~10 더하기
let sum=0; //i넣는 상자
for(var i=1; i<=10; i++){
    sum+=i
}

console.log('1~10 더하기 => '+sum)


//while문

var i  =1 ;
while(i<10){
    const result = i*3
    console.log('10이하의 3의 배수' + result);
    if(result===9){
        break;
    }
    i++
}

var i = 1
while(i<10){
    const result = i*3
    console.log(`3 * ${i} = ${i*3}`)
    i++
}

//10이하의 2의 배수

var i = 1
while(i<=10){
    if(i%2===0){
        console.log('10이하의 2의 배수'+i)
    }
    i++
}

//구구단 만들기
for(let i = 2; i<=9; i++){
    console.log(i+'단')
    for(let j=1; j<=9; j++){
        console.log(`${i}*${j}=${i*j}`)
    }
}

//1~100 정수 중 2 또는 3의 배수
let sum1=0 //합계 넣을 변수상자

for(let i=1; i<100; i++){
    if(i%2==0 || i%3==0){ //2또는 3의 배수
        sum1+=i
    }
}
console.log('2또는 3의 배수 합계 =  '+sum1)

//만약 n/2의 나머지가 0이면 n이하의 2의 배수를 더하고
//n/3의 나머지가 0이면 n이하의 3의 배수를 더한다
//n=21일때 3,6,9,12,18,21을 더해야됨


const answer = Math.floor(Math.random()*10)+1 //1~10까지 랜덤정수 구하기
console.log("랜덤값 = " + answer)

function startGame(){
    while(true){ //while에 true 지정하면 무한루프
        guessValue = prompt('UP and DOWN 게임을 시작합니다')
        if(guessValue==='q' || guessValue==='포기'){
            alert('포기하셨음')
            break
        }else if(guessValue==answer){
            alert(`${guessValue}!!정답입니다.`)
            break
        }else if(guessValue>answer){
            alert('Down')
        }else if(guessValue<answer){
            alert('Up')
        }
    }
}

//object 객체
var cat = {
    name : '나비',
    age : 1,
    mew : function(){
        return '냐옹'
    }
}

console.log(cat.name)
console.log(cat.mew())

//객체 필요한값 넣기, 추가할때
cat['gender']='boy'//대괄호안에 변수이름 지어줌
console.log(cat.gender)
console.log(cat)

//배열
var arr=[1,2,3,4]
var arr1=new Array(1,2,3,'하이','와우') //배열만들기
arr1.pop()
// arr1.shift()
console.log(arr1)

console.log("4의 인덱스 : "+arr.indexOf(4))
console.log('arr1의길이 : '+arr1.length)
arr.unshift('앞에추가')
console.log(arr)
// console.log(arr1[5].name)//배열 안의 객체 불러오기

let arr2 = [{name:'토끼',age:1},{name:'고양이'}]

for(var i =0; i<arr2.length; i++){
    console.log(arr2[i].name); //배열 안의 객체의 name만 추출
}

//객체는 in
const dog={
    name:'강아지',
    age:2,
    gender:'boy'
}

for(var i in dog){
    console.log(i) //key값
    console.log(dog[i]) //value값
    console.log(dog.name)
}

//배열은 of
let arr3=[1,2,3,'서울','광주']
for(var i of arr3){ 
    console.log(i)
}

const data = new Date();
console.log(data.getFullYear())
console.log(data.getMonth()+1) //** Month는 0부터 시작해서 +1
console.log(`${data.getFullYear()}년 ${data.getMonth()+1}월 ${data.getDate()}일`)
console.log(data.getDay())
console.log(data.getMinutes())
console.log(data.toLocaleString())//그지역의 날짜값

console.log(Math.min(10,20,30,40,50))
console.log(Math.max(10,20,30,"str"))
//Math.floor 내림
console.log("랜덤값 : "+Math.floor(Math.random()*10)+1)
//Math.ceil 올림
//Math.round 반올림

//아이스크림 찾기













