document.write("<div>1장 Callback</div>");

// // 콜백 함수 이전 1급 객체

// // 변수가 숫자를 가지는 First Class Citizen 경우
// let a = 1
// console.log(`a : ${a}는 First Class Citizen`);


// // 변수가 함수를 가지는 First Class Citizen 경우
// let b = function test() {return 1;};
// console.log(`b : ${b()}는 First Class Citizen`);

// // 변수가 조건을 못가지는 Second Class Citizen 경우
// let c = if(1<2) {return 1;};

// // 함수가 다른 함수를 리턴하는 경우
// function f1(){
//     let f0 = function(){console.log(`f1_var는 f0 함수를 리턴하는 f1 함수`);}
//     return f0;
// };
// let f1_var = f1();
// f1_var();

// // 함수가 다른 함수를 인자로 가지는 경우
// function f2(){
//     console.log(`f2_var 함수 호출은 f2를 입력 → f2호출`)
// }
// function f2_var(f2){
//     f2();
// }
// f2_var(f2);

// ------------------------------------------------------------------------------------

// // 여러 비동기 처리 및 콜백 함수 예 !!) 
// function taskA(a,b,cb)
// {
//     setTimeout(()=>{
//         const res = a+b;
//         cb(res);
//     },2000);
// }

// function taskB(a,cb)
// {
//     setTimeout(()=>{
//         const res = a * 3;
//         cb(res);
//     },3000);
// }

// taskA(3,4,(res)=>{console.log('A 작업 끝 :',res)});
// taskB(5,(res)=>{console.log('B 작업 끝 :',res)});

//  한 번에 작성되는 비동기 처리 및 콜백 함수 예 !!)
// function taskA(a,b,cb)
// {
//     setTimeout(()=>{
//         const res = a+b;
//         cb(res);
//     },2000);
// }

// function taskB(a,cb)
// {
//     setTimeout(()=>{
//         const res = a * 3;
//         cb(res);
//     },3000);
// }

// function taskC(a,cb)
// {
//     setTimeout(()=>{
//         const res = a * 10;
//         cb(res);
//     },4000);
// }

// taskA(3,4,(a_res)=>{
//     console.log('A 작업 :',a_res);
//     taskB(a_res,(b_res)=>{
//         console.log('B 작업 :',b_res);
//         taskC(b_res,(c_res)=>{
//             console.log('C 작업 :',c_res);
//             console.log('끝!');
//         });
//     });
// });

// 프로그래밍 개념에는 First Class Citizen이 존재! (일급 시민, 일급 객체)
// Ex1) 1급 : 변수 = 숫자, 변수 = 함수 (O)
// Ex2) 2급 : 변수 = 조건 (X) 
// Ex3) 함수가 다른 함수의 리턴 값으로 가지기 가능하다면 1급 !
// Ex4) 함수가 다른 함수의 입력 값으로 가지기 가능하다면 1급 !
// Ex4와 같이 어떤 함수의 인자로 함수가 전달되어 함수 내에서 함수 호출이 이루어지는 함수를 Callback 함수!
// 콜백함수는 일회성으로 많이 사용되어 익명 함수, 에로우 함수로 주로 사용!
// Callback함수 사례!! (.filter / .map 등등 )

// 비동기 처리 작업을 할 때 콜백 함수를 줄지어 계속 사용하는 경우가 많음 !
// 콜백 함수를 줄지어 사용하게 될 경우 가독성이 떨어지고, 보기 어려워 콜백 지옥에 빠짐 ! 

// ---------------------------------------------------------------------------------------------------

// Promise ?
// : 콜백 지옥을 해결가능한 자바스크립트 객체
// : 비동기 처리 함수에 콜백을 줄지어 전달할 필요없어 가독성 높히기 가능 !

// 비동기가 가질 수 있는 상태 ?
// : Pending (대기 상태) - 비동기 작업이 진행 중이거나, 작업을 시작할 수없는 문제 발생 상태
// : Fulfilled (성공 상태) - 비동기 작업이 정상적으로 이행, 성공한 상태
// : Rejected (실패 상태) - 비동기 작업이 어떠한 이유로 거부, 실패한 상태 (시간 초과, 서버 응답X)
// : 비동기 작업은 여기 세 가지 상태가 한 번 결정되면 끝 !

// 



// -------------------------------------------------------------------------------------------------


// ---------------------------------------------------------
// 실습 1 : 배운 콜백 함수 개념으로 나만의 필터 함수 만들어 보기!!

// ---------------------------------------------------------
//  1. 실습 정답
//  스터디 떄 공개 !