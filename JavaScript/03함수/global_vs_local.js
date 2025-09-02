//var변수의 scope(범위) 함수입니다. -> 문제가 많음
//let변수의 scope(범위) 중괄호입니다.
if(true) {
    var x = 10; //전역변수 취급
    let y = 20; //지역변수 취급
}

console.log(x);
//console.log(y); //error

let a = "홍길동"; //전역변수 - 모든 함수나 제어문에서 접근이 가능
let some = function() {
    console.log(a); 

    let b = "이순신"; //지역변수 - some함수 안에서만 접근이 가능
}

console.log(b); //error


