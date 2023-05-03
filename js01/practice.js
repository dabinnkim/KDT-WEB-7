const no_1 = 1;
const no_2 = 2;
const no_3 = 3;

// function add() {
//     alert(no_1 + no_2 + no_3);
// }

// function sub() {
//     return alert(no_1 - no_2);
// }

// function divide() {
//     return alert(no_1 / no_2);
// }

// function mul() {
//     return alert(no_1 * no_2);
// }

// add()
// sub()
// divide()
// mul()

const value1 = 30;
const value2 = 50;
const code = '+'

function calc(n1,n2,code){
    if (code==='+'){
        return n1+n2
    }else if(code==='-'){
        return n1-n2
    }else if(code==='*'){
        return n1*n2;
    }else if(code==='/'){
        return n1/n2
    }else{
        alert('잘못된 코드임');
    }
}

const a = calc(value1,value2,code);
const b = calc(value1,value2,code);
console.log(`a:${a}`);
console.log(`b:${b}`);


const a1 = 10;
const b1 = 20;
const c1 = 30;

a1>b1? console.log('참'):console.log('거짓') //거짓
a1<b1? a1>c1? console.log('참1'):console.log('거짓1'):console.log('거짓2') //거짓1
//a1<b1가 참이면 "a>c? console.log('참1'):console.log('거짓1')" 실행


//단축실행
a1<b1 && console.log('참') 


function test(a){
    const obj={
        name :a || "기본이름"
    }
    console.log(obj.name)
}
test('이름') //인자가 있을때(=true일때)
test() //인자가 없을때(=false일때)  (&&일때는 undefined) 실무에서쓰임

// const age = ()=>{
//     if(age>=20){
//         console.log('성인')
//     }else if(age>=17){
//         console.log('고등학생')
//     }else if(age>=14){
//         console.log('중학생')
//     }else if(age>=8){
//         console.log('초등학생')
//     }else if(age>=0){
//         console.log('유아')
//     }
// }


//논리연산자
function solution(age){
    if(age>=0 && age<8){
        console.log('유아')
    }else if(age>=8 && age < 14){
        console.log('초딩')
    }else if(age>=14 && age<17){
        console.log('중딩')
    }else if(age>=17 && age<20){
        console.log('고딩')
    }else{
        console.log('성인')
    }
}


solution(30)


//사용자로부터 데이터를 입력받는 함수
//prompt로 입력받는 데이터는 모두 문자 (필요시 형변환하기)
const pmt = prompt('입력하세요')

if (Number(pmt)%2==0){ 
    console.log('짝수')
}else{
    console.log('홀수')
}

Number(pmt)%2===0? console.log('짝수'):console.log('홀수')

function rectangle(a,b){ //a-가로, b-세로
    console.log(a*b)
}

function triangle(a,b){
    console.log(a*b/2)
}

function cirlce(a){
    console.log(a*a*3.14)
}

rectangle(10,5)
triangle(4,3)
cirlce(5)











