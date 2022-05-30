document.write("<div>3장 async & await</div>");

// async & await 사용 이유 ?
// 동기적인 코드를 작성하는 것처럼 비동기적인 코드를 작성 !
// → 동기적인 코드와 똑같이 작용 및 문법적으로 단순 !

// async ?
// 비동기적인 함수라는 것을 의미

// await ?
// 해당 함수가 끝나는 것을 기다린다는 의미

// async & await 사용법
// async가 적용된 함수 안에서 await을 사용 가능 !
// async function run() { await timer(time) } 

// ---------------------------------------------------------
// 실습 1 : 

// ---------------------------------------------------------
//  1. 실습 정답

let number = 1;

switch(number)
{
    case 1:
        console.log(1);
        break;
}
