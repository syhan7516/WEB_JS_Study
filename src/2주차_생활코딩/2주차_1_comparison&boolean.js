document.write("<div>1장 비교연산자 & 불리언 </div>");

const ob1 = {
    key1 : 1,
    key2 : 2,
    key3 : 3,
}

const ob2 = {
    key1 : 1,
    key2 : 2,
    key3 : 3,
}


console.log("1===1 : " + (1===1));
console.log("1===2 : " + (1===2));
console.log("1 < 2 : " + (1 < 2));
console.log("1 > 1 : " + (1 > 1));

// Boolean은 2개의 구체적인 데이터를 가지고 있다.
// Boolean의 종류는 true, false
// 보통 비교연사자를 통해 나오는 결과 값이 불리언 형태이다!

// 실습 : 동일한 키와 값을 가진 객체 생성!
// 실습 : 위에서 만든 객체를 비교해보기
// 실습 : 위에서 만든 객체의 값과 객체의 값을 비교해보기
// 실습 : 객체의 값과 그냥 값을 비교해보기