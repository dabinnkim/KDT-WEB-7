function star2(최대행번호){
    for(let 행번호 = 0; 행번호 < 최대행번호; 행번호++){ //행갯수
      let a = '';
      for(let 빈칸 = 0; 빈칸 < 행번호; 빈칸++){
        a+=' ';
        // console.log(`빈칸 ${빈칸}; ${빈칸} < ${행번호};`)
      // 빈칸 1 < 1
      }
      for(let 별 = 최대행번호; 별 > 행번호; 별--){
        a+='*';
        // console.log(`별 ${별}; ${별} > ${행번호};`)
      // 별 1 > 1
      }
      console.log(a)
    }
  }
  
  star2(5)

function star3(num){
  for(let i =0; i<num; i++){ //행갯수
    let a = '';
    for(let j=num; j>i; j--)
    a+='*'
    console.log(a)
  }
}

star3(5)


function star4(num){
  for(let i =0; i<=num; i++){ //행갯수 5개
    let a ='';
    for(let 빈칸=num; 빈칸>i; 빈칸--){ //빈칸갯수 4개부터 시작
      a+=' '
    }
    for(let j=1; j<=i; j++){//별갯수 1개부터 시작
      a+='*'
    }
    console.log(a)
  }
}

star4(5)