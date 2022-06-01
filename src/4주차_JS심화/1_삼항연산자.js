document.write("<div>1장 삼항연산자</div>");

// // 예1) 주어진 숫자가 양수인지 음수인지 판단하는 조건식
// // 원래 조건식 
// let test1 = 3;
// if(test1 >= 0)
// {
//     console.log("양수");
// }
// else{
//     console.log("음수");
// }
// // 삼항 연산자 적용  
// let test2 = 3;
// test2 >= 3 ? console.log("참") : console.log("거짓");

// // 예2) 배열이 비었는지 확인하는 조건식
// // 원래 조건식
// let test3 = [];
// if(test3.length === 0)
// {
//     console.log("빈 배열입니다!");
// }
// else
// {
//     console.log("안 빈 배열입니다!");
// }
// // 삼항 연산자 적용
// let test4 = [1];
// test4.length === 0 ? console.log("빈 배열입니다!") : console.log("안 빈 배열입니다!");

// // 활용 1) 값을 참, 거짓일 때 구분해서 반환
// let test5 = [1,2];
// const test5_result = test5.length === 0 ? "빈 배열!" : "안 빈 배열!";
// console.log(test5_result);

// // 활용 2) 함수를 참, 거짓일 때 구분해서 반환

// // 활용 3) truthy & falsy로 주어진 값이 null ? , undefined ? 인지 판단
// let test6;
// const test6_result = test6 ? true : false;
// console.log(test6_result);

// // 삼항연산자 ?
// // : 삼항의 연산으로 이루어진 식!

// // 사용 이유 ?
// // : 조건문을 파격적으로 줄여주는 효과! (5줄 → 1줄)

// // 사용 방법 ?
// // : 조건식 ? 참 결과 : 거짓 결과;

// // ---------------------------------------------------------
// // 실습 1 : 학점 계산 프로그램를 삼항 연산자로 만들기 !
// // 90점 이상 A+ , 50점 이상 B+ , 둘 다 아니면 F , 점수는 자신이 설정 !

// // ---------------------------------------------------------
// //  1. 실습 정답
// let score = 90;
// score >= 90 ? console.log("A+") : score >= 50 ? console.log("B+") : console.log("F");