
//배열의 반복 for문


let arr = [1,2,3,4,5,6,7];

//합계

let sum=0;
for(let i=0; i<7;i++){
    sum+=arr[i];
}
console.log(sum);

console.log("--------------------");
//for ~ in 구문
for(let i in arr){
    console.log(i);
}

