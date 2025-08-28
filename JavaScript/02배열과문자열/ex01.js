/* 
배열 - 여러값을 저장할 수 있는 상자
배열은 순서를 가집니다. 배열의 순서는 0부터 시작합니다.
*/
let arr = [1,2,3,4,5]; //크기가 5이면서, 각 상자들의 값을 초기화
console.log(arr);
console.log("배열의 첫번째값:" , arr[0]);
console.log("배열의 마지막값:" , arr[4]);

//배열의 요소 값의 변경
arr[0] = 100;
arr[2] = 30;

console.log(arr);
//배열의 길이를 확인하는 명령문 배열명.length
console.log("배열의길이", arr.length )

console.log("-------------------------------------------")
//문자열을 저장하는 배열
let arr2 = ["바나나", "사과", "수박"];
console.log(arr2);
//JS에서는 배열에 서로 다른 데이터타입을 저장 할 수도있습니다.
let arr3 = [1,2,3, "홍길동", true, 0];
console.log(arr3);