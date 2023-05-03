//split 활용해서 url에서 원하는 값 추출하기

const arr =[1,2,3,4]
const str = 'hello world'
const url = 'http://www.naver.com?id=rlaekqls&name';
const split1 = url.split('id=') //id=기준으로 분리해서 배열로 만들음
console.log(split1)
console.log(split1[1].split('&'))//분리한 배열에서 인덱스1을 &기준으로 또 분리

const arr2 = [5,4,6,1,4,'hi','abc']
console.log(arr2.splice(2,5)) //인덱스 2부터 5개
// console.log(arr2.slice(2,5)) //인덱스 2부터 4 = 6,1,4
