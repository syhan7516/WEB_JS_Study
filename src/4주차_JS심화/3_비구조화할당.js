document.write("<div>3장 비구조화할당</div>");

// // 비 구조화 할당 예시 (배열)
// // 원래 배열 할당 방법
// let arr = ["one","two","three"];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];
// console.log(one,two,three);

// // (배열의 , 배열의 기본 변수) 비 구조화 방법으로 할당 방법
// let [one1,two1,three1] = arr;
// console.log(one1,two1,three1);

// // 배열 선언 분리 비 구조화 할당 방법
// let [one2,two2,three2] = ['one','two','three'];
// console.log(one2,two2,three2);

// // 선언되지않은 값을 받으려고 한다면 결과는 ?
// let [a,b,c,d] = ['a','b','c'];
// console.log(a,b,c,d);

// // 위의 결과를 방지하기위해 초기 값 지정하기 !
// let [a1,b1,c1,d1 = 'd'] = ['a','b','c'];
// console.log(a1,b1,c1,d1);

// // 비 구조화 방법으로 swap도 가능 !
// let a2 = 10;
// let b2 = 12;
// console.log("swap 전 : ",a2,b2);
// [a2,b2] = [b2,a2];
// console.log("swap 후 : ",a2,b2);

// // 비 구조화 할당 예시 (객체)
// // 원래 배열 할당 방법
// let object = {
//     test1:'test1',
//     test2:'test2',
//     test3:'test3',
// };

// let test1 = object.test1;
// let test2 = object.test2;
// let test3 = object.test3;
// console.log(test1,test2,test3);

// // (객체의) 비 구조화 방법으로 할당 방법
// let object1 = {
//     report1:'report1',
//     report2:'report2',
//     report3:'report3',
// };

// let { report1, report2, report3 } = object1;
// console.log(report1,report2,report3);

// // (객체의) 비 구조화 방법의 변수 이름 강제성 극복 방법
// let object2 = {
//     pract1:'pract1',
//     pract2:'pract2',
//     pract3:'pract3',
// };

// let { pract1: pr1, pract2:pr2, pract3:pr3 } = object2;
// console.log(pr1,pr2,pr3);

// // 선언되지않은 값을 받으려고 한다면 결과는 ?
// let object3 = {
//     abc1:'abc1',
//     abc2:'abc2',
//     abc3:'abc3',
// };

// let { abc1,abc2,abc3,abc4 } = object3;
// console.log(abc1,abc2,abc3,abc4);

// // 위의 결과를 방지하기위해 초기 값 지정하기 !
// let object4 = {
//     abcd1:'abcd1',
//     abcd2:'abcd2',
//     abcd3:'abcd3',
// };

// let { abcd1,abcd2,abcd3,abcd4="abcd4"} = object4;
// console.log(abcd1,abcd2,abcd3,abcd4);
 
// 비 구조화 할당 ?
// : 배열, 객체의 값을 더 빠르고 쉽게 선별하여 할당하는 방법

// 비 구조화 할당 방법
// 배열
// : 예약어 [ 변수1, 변수2, 변수3 ] = 배열; -> 차례로 입력 !
// 객체
// : 예약어 { 키1, 키2, 키3 } = 객체; -> 순서 X, 키 값을 기준으로 !

// ---------------------------------------------------------
// 실습 1 : (배열, 객체) 선언되지않은 값을 받으려하면 무슨 값이 들어갈까?
// 실습 2 : (객체의) 변수 강제성 극복 방법
// 실습 3 : 배열 비 구조화 할당 swap 테크닉해보기

// ---------------------------------------------------------
//  1. 실습 정답