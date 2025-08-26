//자동형변환 -> 연산시에 자동으로 타입이 변하게 됩니다.

let num = 10 + 3.14;
console.log(num);

let text = "10" + 3.14 + 5;
console.log(text); //문자열은 가장 강한 타입 - 문자열에 더해지면 모두 문자가 됩니다

let text2 = 3.14 + 5 + "10";
console.log(text2);

let num2 = "5" * 3; //빼기, 곱하기, 나누기 시에는 숫자로 변경됩니다.
console.log(num2);

//명시적 형변환 -> 강제로 타입을 바꾸는 과정
//parseInt, parseFloat
let result = parseInt("5") + 1;

console.log(result); //6
console.log( parseInt("바꿀수 없는 값이 들어가면?") ); //NaN - 바꿀수 없는 바꾼경우

console.log( parseFloat("3.14") ); //실수값으로 변환시에는 paseFloat

console.log( 5 + "" ); //숫자 -> 문자열 - 빈 문자열을 더하면 됩니다

