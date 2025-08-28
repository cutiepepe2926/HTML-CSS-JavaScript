//반복문의 중첩 활용
/*
반복의 회전은 바깥회전에 따라서 안쪽회전이 바뀔 수 있음.
바깥반복문 - 행
안쪽반복문 - 별출력
*
**
***
****
*****
*/
let star = 5;

let result1 = "";
for(let i = 1; i <= star; i++) {
    for(let j = 1; j <= i; j++) {
        result1 += "*";
    }
    //요기서 줄바꿈문자열
    result1 += "\n";
}
console.log(result1);
console.log(`-----------------------------------------------`);
/*
***** 1일때 5
****  2일때 4
***   3일때 3
**    4일때 2
*     5일때 1
*/
let result2 = ""; //출력의 합
for(let i = 1; i <= star; i++) { //행
    for(let j = 1; j <= star+1-i; j++) { //출력
        result2 += "*";
    }
    result2 += "\n";
}
console.log(result2);

