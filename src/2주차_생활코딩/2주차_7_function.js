// document.write("<div>7장 함수</div>");

// // 매개 변수없는 함수
// function sentense1()
// {
//     console.log("sentense1");
// }

// // 매개 변수있는 함수
// function sentense2(num1,num2)
// {
//     let sum = num1+num2;
//     console.log('sentense2 = ' + sum);
// }

// // return으로 함수의 결과 전달 받기
// function sentense3(num3,num4)
// {
//     let sub = num4-num3;
//     return sub;
// }
// sentense1();
// sentense2(1,2);
// console.log('sentense3 = ' + sentense3(2,5));


// 정의 : 함수란? 
// 불규칙적인 반복은 반복문을 사용할 수 없다!!
// 중복된 동일한 코드, 작업들을 묶어서 하나의 코드로 만드는 것
// 함수는 비원시 자료형이며, 자료형이기 때문에 변수에 담기 가능!

// 입력의 인자와 매개변수 ?
// 인자 ? 함수 호출 시 넣어주는 값들!
// 매개변수 ? 함수 원형에서 인자들을 매개해주는 변수들!

// 출력의 return ?
// 함수의 결과를 사용하기위해 함수 내에서 값을 반환해주는 키워드!

// 함수 작성 법 ?
// 함수에는 함수 선언식과 함수 표현식 존재!!
// 함수 선언식 : function 함수명() {} 
// 매개 변수없는 함수 만드는 방법 : function 함수명( ) {'실행할 코드'}
// 매개 변수없는 함수 호출 방법 : 함수명( );
// 매개 변수있는 함수 만드는 방법 : function 함수명(매개변수1,매개변수2,...);
// 매개 변수있는 함수 호출 방법 : 함수명(인자1,인자2,...);

// 함수 표현식 : 익명 함수, 즉시 실행 함수, 화살표 함수 
// → 변수에 넣어서 사용 가능!!

// 익명 함수란? 말 그대로 함수명이 생략된 함수
// : 생성 법 : let sen1 = function() { ~ 내용 ~ };
// : 호출 법 : sen1();

// 즉시 실행 함수란? 말 그대로 함수가 그 즉시 실행되는 함수
// : 생성 법 : let sen1 = function() { ~ 내용 ~ }();
// : 호출 법 : 즉시 호출

// 화살표 함수란? 함수의 모습이 마치 화살표같아 붙여진 이름의 함수
// : 생성 법 let sen1 = () => { ~ 내용 ~ };
// : 호출 법 : sen1();
// → 인자가 하나 일 경우 () 생략 가능! ex) sen1 = num => {}
// → 실행 코드가 한 줄일 경우 return, {} 생략 가능! ex) sen1 = num => num+num;

// 주의할 점 ?
// 함수에 인자 전달 시 개수와 순서를 맞춰서 전달!
// 지역 변수 : 함수 내부에서 생성된 변수는 밖에서는 접근이 불가능!! (접근 시 에러!)
// 전역 변수, 글로벌 변수 : 함수 외부에서 생성된 변수는 함수 내에서 사용 가능!!
// 함수의 결과 값을 전달할 때 return을 통해 전달 가능!

// ---------------------------------------------------------
// 실습 1 : 함수 작성법에는 무엇이있고, 설명하시오!
// 실습 2 : 실습 1에 대해 각 함수를 작성해보고 차이 설명하기!
// 프로덕트 실습 8 : 프로덕트 코드에서 버튼 이벤트를 함수로 리팩토링하기!

// ---------------------------------------------------------
// 실습 1번 정답 
// 위의 내용 참고!

// 실습 2번 정답
// 1. 함수 선언식만 호이스팅 가능!
// 2. 즉시 실행 함수만 즉시 실행 가능! (다른 함수에(); 붙이면 에러!)
// 3. 화살표 함수만 인자, 실행 코드 수에 따라 문법이 자유로움!