document.write("<div>4장 스프레드</div>");

// 스프레트 연산자 할당 객체 예시
const bibimbab = {
    base1 : 'rice',
    base2 : 'vegetable',
}

const bulgogiBibimbab = {
    base1 : 'rice',
    base2 : 'vegetable',
    plus : 'bulgogi',
}

const rawbeefBibimbab = {
    base1 : 'rice',
    base2 : 'vegetable',
    plus : 'rawbeefBibimbab',
}

const chamchiBibimbab = {
    ...bibimbab,
    plus : 'chamchi'
}

console.log(chamchiBibimbab);

// 스프레트 연산자 할당 배열 예시
const beef_water_Food = ['보쌈','찌개','수육'];
const beef_fire_Food = ['제육','갈비','바베큐'];
let all_beef_Food = [...beef_water_Food, ...beef_fire_Food];
console.log(all_beef_Food);

all_beef_Food = [...beef_water_Food, ...beef_fire_Food, '물고기'];
console.log(all_beef_Food);

// 스프레드 연산자 ?
// : 중복되는 값을 편리하게 불러오기 가능 !
// : 스프레드는 펼치다 ! 의 의미 !

// 스프레드 연산자 사용법 ?
// : 기본의 틀을 작성 후 중복되는 곳에 '...변수명' 을 작성 !

// ---------------------------------------------------------
// 실습 1 : ?

// ---------------------------------------------------------
//  1. 실습 정답