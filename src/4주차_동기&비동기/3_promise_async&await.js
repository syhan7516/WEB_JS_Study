document.write("<div>3장 async & await</div>");

// // async 예시
// function nomal()
// {
//     return '일반 함수';
// }

// async function special()
// {
//     return 'async 함수';
// }

// console.log(nomal());
// console.log(special());

// // async의 then 결과 ?
// special().then((res)=>{console.log(res)});

// // await 예시
// // 기존 Promise code
// function delay(ms)
// {
//     return new Promise((resolve)=>{
//         setTimeout(resolve,ms);
//     });
// }

// async function testAwait()
// {
//     return delay(3000).then(()=>{
//         return 'test';
//     });
// }

// testAwait().then((res)=>{
//     console.log(res);
// })

// // await 적용 code -1

// async function testAwait1()
// {
//     await delay(3000);
//     return 'test1';
// }

// testAwait1().then((res)=>{console.log(res)});

// // await 적용 code -2

// async function testAwait2()
// {
//     await delay(3000);
//     return 'test2';
// }

// async function main()
// {
//     const res = await testAwait2();
//     console.log(res);
// }

// main();

// ---------------------------------------------------------------------------

// async & await 사용 이유 ?
// : Promise를 더 쉽고, 가독성있게 작성 !
// : 동기적인 코드를 작성하는 것처럼 비동기적인 코드를 작성 !
// : 동기적인 코드와 똑같이 작용 및 문법적으로 단순 !

// async ?
// : 비동기적인 함수라는 것을 의미
// : async를 붙힌 함수는 자동적으로 Promise를 반환하는 비동기 처리 함수 적용 !
// : Promise를 반환한다면 .then() 사용 가능 ! → 성공 결과로 어떤 결과를 가져올까 ?

// await ?
// : 해당 함수가 끝나는 것을 기다린다는 의미
// : 비동기 함수의 호출 앞에 붙히면 마치 동기적인 함수처럼 작동 !

// async & await 사용법
// async가 적용된 함수 안에서 await을 사용 가능 !
// async function run() { await timer(time) } 

// ---------------------------------------------------------
// 실습 1 : ?

// ---------------------------------------------------------
//  1. 실습 정답