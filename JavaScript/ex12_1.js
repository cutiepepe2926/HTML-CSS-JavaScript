
let i = 1; //시작값
let sum = 0; //값을 누적할 변수는 반복문 밖에 선언

while(i <= 10) { //i를 이용해서 반복문의 조건식을 만듬

    //console.log(i);
    sum += i; //sum = sum + i;

    i++; //언젠가는 조건식 false가 되도록 처리
}

console.log("1~10까지 합은:", sum);

