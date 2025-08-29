//이름, 국어, 영어, 수학
let students = [
    ["철수",76,34,23],
    ["정재",30,99,76],
    ["남규",76,87,54],
    ["남수",98,76,45]
];

//1. 학생별 점수의 평균을 구해보세요. (중첩)
for(let i=0; i<students.length;i++){
    let sum = 0;
    let avg = 0;
    for(let j=1; j<students[i].length;j++){
        sum += students[i][j];
    }
    avg = sum/(students[i].length-1);
    console.log(students[i][0]+": 평균 "+avg.toFixed(1));
}

//2. 가장 비싼 상품을 찾아서 출력해주세요.
//결과-> 시계 20000000

let products = [
    ['노트북',1200000],
    ['스마트폰',800000],
    ['태블릿',500000],
    ['헤드폰',300000],
    ['시계',2000000]
];
let name;
let price = 0;
for(let i=0; i<products.length;i++){
    for(let j=0; j<products[i].length; j++){
        if(price<products[i][1]){
            price=products[i][1];
            name=products[i][0];
        }
        else continue;
    }
}

console.log("결과 -> "+name+"  "+price);