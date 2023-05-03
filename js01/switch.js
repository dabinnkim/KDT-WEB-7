

const value1 = 30;
const value2 = 50;
const code = '+'

function calc(num1,num2,code){

    switch(code){
        case '+':
            calc = num1+num2
            break;
        case '-':
            calc = num1-num2
            break;
        case '/':
            calc = num1/num2
            break;
        case '*':
            calc = num1*num2
            break;
        default:
            alert('잘못된코드임');
            break
    }
    return calc;
}

const result = calc(value1,value2,code)
console.log(result) //80


