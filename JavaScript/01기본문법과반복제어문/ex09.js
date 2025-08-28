//랜덤한 점수를 하나 생성 1~100
let point = parseInt( Math.random() * 100 + 1 );
let grade = "불합격";

if(point >= 60) {
    grade = "합격";
} else {
    grade = "불합격";
}

console.log("점수:" + point);
console.log(grade);
console.log("--------let변수의 scope------------");

if(true) {
    let name = "홍길동"; //중괄호 스코프 - 중괄호 안에서 선언된 변수는 중괄호 안에서만 쓸수있음.
}
console.log(name); //name 사라짐