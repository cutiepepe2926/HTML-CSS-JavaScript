//배열에서 사용하는 다양한 함수

//배열의 선언을 new Array() - 추천방식은 아님
// let arr = new Array(3); //크기가 3이면서, 비어있는 배열을 생성
// console.log(arr);
// let arr2 = new Array(1,2,3); // [1,2,3]
// console.log(arr2);

let arr = [1,2,3,4,5];

arr.push(6); //맨마지막에 6을 추가
console.log(arr);

let item1 = arr.pop(); //맨마지막 값을 빼서, 돌려줌
console.log("pop으로 나온값:" + item1);
console.log(arr);

arr.unshift(100); //배열에 앞에서 추가
console.log(arr);

let item2 = arr.shift(); //배열에서 앞에서 제거
console.log('앞에서 제거된값:', item2);
console.log(arr);

//arr.splice(1,2); //첫번째 인덱스에서, 2개를 제거
//arr.splice(1,1); //첫번째 인덱스에서, 1개를 제거
arr.splice(1, 0, 'a', 'b'); //값을 3개 이상주면, 추가해줍니다
console.log(arr);

//탐색관련 함수
let item3 = arr.indexOf(4); //4가 있는 위치를 나한테 반환
console.log('4가 있는 위치:', item3); //만약 찾는값이 없으면 -1 을 반환

if( arr.indexOf('a') != -1 ) {
    console.log('a는 존재합니다');
}

if( arr.includes('a') ) { //a가 있다면 true, 없으면 false
    console.log('a는 존재합니다');
}

