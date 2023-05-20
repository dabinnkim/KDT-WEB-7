let [a=4, b=4, c=5] = [1,2]

console.log(a)
console.log(b)
console.log(c)//객체로부터 받은 값이 언디파인일때만 기본값이 사용되는 것!!

console.log('-------------------------')


//바꿔치기
let a1 =1;
let b1 =2;

[a1,b1]=[b1,a1]

console.log(a1)
console.log(b1)

console.log('-------------------------')

let user = {
    name:'다빈',
    age : 18,
};

let {name='지은', age, gender='male'} = user;
console.log(gender)

console.log('-------------------------')




//배열 구조 분해
//특징 : 구조 분해 당시 순서가 중요!
const lists = ['apple','grape']
let [item1, item2, item3='peach'] = lists
console.log(item1, item2, item3)

function test(){
    return ['one','two','three']
}
const [one, two, three, four] = ['one','two','three']
//let four
console.log(one, two, three, four) //four은 순서상 언디파인


let aa = 10;
let bb = 20;

[aa,bb] = [bb, aa] // 값 바꾸기
console.log(aa,bb)


//객체 구조 분해
//특징 : 키값이 중요!

const obj = {
    key1 : 'one',
    key2 : 'two'
}

const {key2, key1, key3='three', obj3= 'four'} = obj;
console.log(key1, key2, key3, obj3)


//할당할 값 함수에 넣기 - 실무에서 많이 쓰임
function test2(){
    return {result:true, statusCode:200, a:10, b:20}
}

const {result, statusCode, a:a2, b:b2} = test2()
console.log('실무에서 많이 쓰임' + result, statusCode, a2)

console.log('------------------------------')

//spread 연산자로 쉽게 복제 가능
const i = [10,20,30]
const j = [40,50]

const concat = i.concat(j)
console.log(concat)

const spread = [...i, ...j]
console.log(spread)



function spreadFunc(a,b,c){
    console.log(a+b+c)
}

// spreadFunc(i[0],i[1],i[2]) //원래 쓰는 법
spreadFunc(...i) //i는 할당이 맞아서 3개가 더해짐
spreadFunc(...j) //j는 할당이 맞지않아서 NaN

//rest 파라미터
function restFunc(a, ...rest){ //rest는 보통 rest라고 이름 적어놓음
    console.log(rest)
    console.log('요거는 따로 a로 뻄' + a)
}

restFunc(...i) //a에 10이 들어가고 그나머지에 rest에 다 들어간것 a뒤에 b를 넣으면 나머지 30만 출력됨



function 함수2(...a){
    console.log(a)
}

함수2(1,2,3,4,5) //[ 1, 2, 3, 4, 5 ]



