// document.write("<div>1장 Callback</div>");

// // 프로그래밍 개념에는 First Class Citizen이 존재! (일급 시민, 일급 객체)

// // Ex1) 1급 : 변수 = 숫자, 변수 = 함수 (O)
// let a = 1
// console.log(`a : ${a}는 First Class Citizen`);

// let b = function test() {return 1;};
// console.log(`b : ${b()}는 First Class Citizen`);

// // Ex2) 2급 : 변수 = 조건 (X) 
// // let c = if(1<2) {return 1;};

// // Ex3) 함수가 다른 함수의 리턴 값으로 가지기 가능하다면 1급 !

// function f1(){
//     let f0 = function(){console.log(`f1_var는 f0 함수를 리턴하는 f1 함수`);}
//     return f0;
// };
// let f1_var = f1();
// f1_var();

// // Ex4) 함수가 다른 함수의 입력 값으로 가지기 가능하다면 1급 !
// function f2(){
//     console.log(`f2_var 함수 호출은 f2를 입력 → f2호출`)
// }
// function f2_var(f2){
//     f2();
// }
// f2_var(f2);

// Ex4와 같이 어떤 함수의 인자로 함수가 전달되어 함수 내에서 함수 호출이 이루어지는 함수를 Callback 함수!
// 콜백함수는 일회성으로 많이 사용되어 익명 함수, 에로우 함수로 주로 사용!
// Callback함수 사례!! (.filter / .map 등등 )

// ---------------------------------------------------------
// 실습 1 : 배운 콜백 함수 개념으로 나만의 필터 함수 만들어 보기!!

// ---------------------------------------------------------
//  1. 실습 정답
//  스터디 떄 공개 !