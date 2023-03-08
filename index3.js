var name = "홍길동";
console.log(name);

// var 키워드는 변수를 재선언해도 에러가 발생하지 않는다
var name = "이몽룡";
console.log(name);

let num = 1;
// let 키워드는 변수 재선언 불가능
// let num = 2;

// 상수
// 선언과 동시에 초기화 필수
const num2 = 100;
// 할당된 값 변경 불가능(재할당 불가능)
// num2 = 200;