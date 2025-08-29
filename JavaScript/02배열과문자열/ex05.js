let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]];

console.log(matrix[0]); //[ 1, 2, 3 ]
console.log(matrix[0][0]); //1
console.log(matrix[1][0]); //4
console.log(matrix[2][2]); //9

//2차원 배열의 순회
console.log("==========================================");
for(let i=0; i<matrix.length;i++){
    for(let j=0; j<matrix[i].length; j++){
        console.log(matrix[i][j]);
    }
}

console.log("==========================================");

//이름, 국어, 영어, 수학
let students = [
    ["철수",76,34,23],
    ["정재",30,99,76],
    ["남규",76,87,54],
    ["남수",98,76,45]
];

let kor = 0;
let eng = 0;
let math = 0;


for(let i=0; i<students.length;i++){
    kor += students[i][1];
    eng += students[i][2];
    math += students[i][3];
}

console.log('과목 별 성적 \n kor합계: '+kor/students.length+'\n eng합계: '+eng/students.length+'\n math합계: '+math/students.length);
