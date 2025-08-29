//1. 이 배열의 합계와 평균을 출력
let number = [10,20,30,40,50];
let sum = 0;
for(var index in number){
    sum+=number[index];
}
console.log("배열의 합: "+sum);
console.log("배열의 평균: "+(sum/number.length));

//2. 이 배열에서 최대값 최소값 찾아서 출력

let score = [85,92,70,96,91,60];
let max=score[1];
let min=score[5];
let temp=0;
for(var index in score){
    temp = score[index];
    if(max<temp){
        max = temp;
    }
    else continue;
}

console.log("최대값 "+max);

for(var index in score){
    temp = score[index];
    if(min>temp){
        min = temp;
    }
    else continue;
}

console.log("최소값 "+min);

//3. 짝수 필터링
// 이 배열에서 짝수만 필터링하여 evenNum에 저장하세요.
let numbers = [1,2,3,4,5,6,7,8,9,10];
let evenNum = [];
let tempo = 0;
for(var index in numbers){
    tempo = numbers[index];
    if(tempo%2==0){
        evenNum.push(tempo);

    }
    else continue;
}
for(var index in evenNum){
    console.log("evenNum: "+evenNum[index]);
}



//4. 배열의 값을 뒤집어서 reverse 배열에 저장하세요.
let arr = [1,2,3,4,5];
let reverse =[];

for(var index in arr) {
    reverse.push(arr[arr.length-index-1]);
}
for(var index in reverse){
    console.log("역수 배열: "+reverse[index]);
}

//5. target값이 배열에 포함되어 있으면 해당 인덱스를 출력, 없으면 -1을 출력하세요.

let search=['a','b','c','d','e'];
let target ='e';
let result;
for(var index in search) {
    temp = search[index];
    if(temp==target){
        result = index;
    }
    else result = -1;
}
console.log("포함되어있는 인덱스: "+result);

//6. word 배열의 문자열의 길이를 저장하는 wordLength 배열을 만들어주세요
let word =['apple','banana','melon','grape','orange'];
let wordLength = []; //5,6,5,5,6 문자열 길이 확인

for(var index in word){
    temp = word[index].length;
    wordLength.push(temp);
}
for(var index in wordLength){
    console.log("문자열 길이 배열: "+wordLength[index]);
}