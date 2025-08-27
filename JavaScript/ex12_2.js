//반복문 안에서 조건식
//x까지의 수 중에서 짝수들의 합계

// let x = 100;
// let i = 1;
// let sum = 0; //합계를 누적할 변수
// while( i <= 100) {
//     if(i % 2 === 0) { //조건
//         sum += i;
//     }
//     i++;
// }

let i = 2;
let sum = 0;
while( i <= 100) {
    sum += i;
    i+=2;
}

console.log(`1~100까지 수 중에서 짝수의 합 ${sum}`);