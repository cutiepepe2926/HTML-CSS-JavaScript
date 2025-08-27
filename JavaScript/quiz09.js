for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
        console.log(i+" x "+j+" = "+i*j);        
    }
}


for(let i=7;i<101;i++){
    if(i%7==0){
        console.log("7의 배수 : "+i);
    }
}

let sum=0;

for(let i=1;i<51;i++){
    if(i%2==1){
        sum+=i;
    }
}

console.log("홀수의 합 : "+sum);

let sum_b=0;
for(let i=1;i<101;i++){
    if(100%i==0){
        sum_b+=i;
    }
}
console.log("100의 약수의 합 : "+sum_b);