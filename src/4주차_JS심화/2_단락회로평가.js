document.write("<div>2장 단락회로평가</div>");

// // &&로 단락 회로 평가
// console.log('true && true : ',true && true);
// console.log('false && true : ',false && true);

// // ||로 단락 회로 평가
// console.log('true || true : ',true || true);
// console.log('false || true : ',false || true);

// // 단락 회로 평가 ?
// // : 논리 연산자의 특성을 이용한 문법 ! ( && , || , !)
// // : 왼쪽에서 오른쪽으로 연산을 한다는 논리 연산자의 순서를 이용 !

// // 사용 방법 ?
// // : true && true  -> true -> 모두 true일 때만 결과가 true
// // : false && true -> false -> 앞 쪽이 false면 뒤 쪽은 안봐도 결과는 false
// // : true || true -> true -> 앞 쪽이 true면 뒤 쪽은 안봐도 결과는 true
// // : false || true -> false -> 모두 false일 때만 결과가 false

// // 

// // ---------------------------------------------------------
// // 실습 1 : truthy & falsy를 이용한 단락 회로 평가로 
// //          객체인지 아닌지에 대한 함수 만들기 !
 
// // ---------------------------------------------------------
// //  1. 실습 정답
// // truthy & falsy를 이용한 단락 회로 평가
// // 원래 코드
// const getName = (person) => {
//     if(!person)
//     {
//         return "객체가 아닙니다!";
//     }
//     return person.name;
// }

// let person;
// const name = getName(person);
// console.log(name);

// // 단락 회로 평가 코드
// const getInsta = (likelion) => {
//     const insta = likelion && likelion.insta;
//     return insta || "객체가 아닙니다!";
// }

// let likelion;
// const insta = getInsta(likelion);
// console.log(insta);