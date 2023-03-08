let myName = "길동";
let email = "gildong@naver.com";
let city = "서울";

console.log(myName);
console.log(email);
console.log(city);

// 인자간 띄어쓰기 발생한다
console.log("내 이름은", myName, "이고 이메일은", email, "입니다.");
// 띄어쓰기 발생하지 않는다
console.log("내 이름은" + myName + "이고 이메일은" + email + "입니다.");
// 문자열 보간법
console.log(`내 이름은 ${myName}이고 이메일은 ${email}입니다.`);

let gildong = `내 이름은 ${myName}이고 이메일은 ${email}입니다.`;
console.log(gildong);

let number = 123;
let opacity = 0.7;
console.log(number);
console.log(opacity);

// NaN means "Not a Number"
console.log("apple" - 10); // NaN

let checked = true;
let unchecked = false;

console.log(checked);
console.log(unchecked);

let undef;
console.log(undef); // undefined

let nullable = null;
console.log(nullable); // null

let fruits = ["orange", "pineapple", "grapes", "apple"];
let fruits2 = new Array("orange", "pineapple", "grapes", "apple");

console.log(fruits[0], fruits[1]);

let data = [1, "allie", false, null, undefined];

console.log(data[4]);

let korean = [
["가", "나", "다"],
["라", "마", "바"],
["사", "아", "자"]
]

console.log(korean[0][0]);
console.log(korean[2][2]);

let letters = [
['사', '스', '자', '크'],
['진', '안', '리', '이'],
['가', '수', '림', '나'],
['아', '으', '차', '운'],
];

console.log(letters[3][0]);
console.log(letters[1][3]);
console.log(letters[0][1]);
console.log(letters[0][3]);
console.log(letters[2][2]);

let cat = {
name: "나비",
age: 1,
isCute: true,
meow: function () {
    return "냐옹~";
}
}
console.log(cat);
console.log(cat.name);
console.log(cat.age);
console.log(cat.meow());
console.log(cat["isCute"]);

let kiyomin = {
name: "구교민",
gender: "male",
email: "moeday1010@gmail.com"
}

console.log(`이름: ${kiyomin.name}, 성별: ${kiyomin.gender}, 이메일: ${kiyomin.email}`);

let num = 100;
let str = "str";

console.log(`"${typeof num}" isn't a "${typeof str}" data type.`);
console.log(`typeof 연산을 array or null에 사용하면, "${typeof null}" 결과를 얻을 수 있습니다."`);

// 사용자 입력을 위한 알림창
let mathScore = prompt("수학 점수를 입력하세요.");
let engScore = prompt("영어 점수를 입력하세요.");
let avg = (mathScore + engScore) / 2;

/* typeof 사용 */
let und;
console.log(typeof '문자');
console.log(typeof 123);
console.log(typeof true);
console.log(typeof cat);
console.log(typeof nums);
console.log(typeof NaN);
console.log(typeof null);
console.log(typeof und);
console.log(`${typeof 1} isn't ${typeof '1'} data type`);
console.log(
  'typeof 를 array 이나 null 에 사용하면' +
    typeof {} +
    '결과를 얻을 수 있습니다.'
);

// 형변환
// let mathScore = prompt('수학 점수를 입력하세요'); //80
// let engScore = prompt('영어 점수를 입력하세요'); //90
//
// let avg = (mathScore + engScore) / 2;
// console.log(avg);
// 1. -> 문자 String()
let str1 = true;
let str2 = 123;
let str3 = null;
console.log(typeof String(str1));
console.log(typeof String(str2));
console.log(typeof String(str3));
console.log(typeof str1);
console.log(typeof str1.toString());
//2. ? ->숫자 Number()
let n1 = true;
let n2 = false;
let n3 = '123.9';
console.log(typeof n1);
console.log(typeof n2);
console.log(typeof n3);
console.log(typeof Number(n1)); //1
console.log(typeof Number(n2)); //0
console.log(typeof Number(n3)); //123.9
console.log(Number(n1));
console.log(Number(n2));
console.log(Number(n3));
console.log(parseInt(n3));