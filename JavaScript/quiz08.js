//100까지의 수중에서 3의 배수이면서 4의 배수인수를출력

let a = 100;

let sum = 0;

for(let i=1;i<101;i++){
    if(i%3==0){
        if(i%4==0){
            console.log("3의 배수이면서 4의 배수인 수 "+i);
        }
        else {
            continue;
        }
    }
    else {
        continue;
    }
}

let medicine=0;
//524의 약수의 개수를 구하라
for(let i=1;i<525;i++){
    if(524%i==0){
        medicine+=1;
    }
    else {
        continue;
    }
}
console.log("524의 약수의 개수 : "+medicine);
//100까지의 수중에서 9의 배수의 합계
for(let i=1; i<101;i++){
    if(i%9==0){
        sum+=i;
        console.log("9의 배수의 합계 "+sum);
    }
    else {
        continue;
    }
}
