var a = 5;
var b = 3;

console.log(a == b); //f
console.log(a != b); //t
console.log(a >= 5); //t
console.log(a < 10); //t
console.log(a <= 3); //f
console.log(a > 5); //f

//js에만 있는 연산자 ===, !==
let x = "5";
let y = 5;

console.log("==" , x == y); //값만 비교
console.log("===" , x === y); //값과 타입을 비교 - 세개짜리 연산자를 사용하는 편이 좋습니다.
console.log("!=" , x != y);
console.log("!==" , x !== y); 

let c;
let d = null;
console.log(c == d); //t
console.log(c === d); //f
