const words = ['dog','cat','rabbit']
let result = words.filter((word)=>word.length > 3); //단어의 길이가 3보다 긴것
console.log(result)

//화살표함수 쓸때 중괄호 쓰면 return 이랑 같이 써야함

let result2 = words.filter((word)=>{return word.length >2})
console.log(result2)

let result3 = words.includes(('a')) //a가 포함된 단어
console.log(result3)

let list =[1,2,3,4,5,6]
let result4 = list.reduce((acc,val)=>{
    return acc + val
},30) //초기값 생략하면 0
console.log(result4)
