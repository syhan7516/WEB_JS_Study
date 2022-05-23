document.write("<div>2장 then & catch</div>");

// // 동기
// for(let num1 = 1; num1 <= 5; num1++){
//     console.log(num1);
// }

// // 비동기
// for(let num1 = 1; num1 <= 5; num1++){
//     if(num1 === 2){
//         setTimeout(()=>{console.log(2);},4000);
//         continue;
//     }
//     console.log(num1);
// }

// // fetch 예시
// let fh1 = fetch("https://naver.com");
// fh.then((result)=>{console.log(result)});
// fh.catch((error)=>{console.log(error)});

// // fetch 표준 사용법
// fetch("https://google.com")
// .then((result)=>{console.log(result)})
// .catch((error)=>{console.log(error)});

// Synchronous , Asynchronous (동기, 비동기)

// Synchronous ? : 앞의 명령이 끝나고, 차례로 명령이 실행이되는 방식을 동기 !
// → 어떻게 작업들이 실행될 것임을 파악하기 쉬움 !!

// Asynchronous ? : 독립적으로 자신만의 시간을 가지면서 병렬적으로 실행되는 방식을 비동기 !
// → 훨씬 빠른 속도로 전체 작업 실행 가능 !!
// → 원래의 작은 그대로 진행되고, 비동기 작업은 병렬적으로 진행되면서 작업이 끝나면 원래 작업과 합류 !!
// → 어떤 작업이 언제 끝날지 예측하기 어렵거나, 주가 되는 작업이 아닐 때 ! ex) 통신 작업 fetch('url')

// 어떤 함수의 리턴 값이 Promise 형태이면 비동기일 확률이 높음!
// Promise 형태는 .then()과 .catch() 두 가지 메소드 사용 가능 !
// then, catch 둘 다 콜백 함수를 받으며, then은 성공 결과! / catch은 실패 결과! 

// Promise 사용 이유 !
// 비동기적인 작업을 할 때 콜백 함수가 자주 사용되고, 콜백 안 콜백 안 콜백...으로...
// 즉, 콜백 Hell → 콜백 지옥을 자주 경험 ! (→ 코드가 복잡하고, 보기 어려움 !)
// 비동기 작업 시 성공 ? 실패 ? 했는지 표준화 방식으로 처리하기 위해 사용되며, 콜백 Hell로 부터 벗어나게 함!

// Promise 사용 방법 !
// 1. Nested Promise : then 안에 then 안에 then ...
// 2. promise chaining : then 안에서 promise를 리턴하면서 then과 then을 연결

// ---------------------------------------------------------
// 실습 1 : fetch()는 무엇을 리턴하는지 확인해보기 !
// 실습 2 : fetch 결과에 대한 Promise의 값을 확인해보기 !
// 실습 3 : setTimeout()으로 비동기식 코드 짜보기 !
// 실습 4 : Promise 사용법 두 가지를 사용해보고, 장단점 설명해보기 !

// ---------------------------------------------------------
//  1. 실습 정답

//  2. 실습 정답

//  3. 실습 정답

//  4. 실습 정답