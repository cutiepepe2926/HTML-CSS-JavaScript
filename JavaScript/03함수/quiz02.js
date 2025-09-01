/*
문제 4: 배열 뒤집기 (레벨 3)
- 매개변수: arr
- 반환값: 배열 (뒤집힌 새 배열)
- 배열을 받아서 순서를 뒤집은 새 배열을 반환하는 함수 reverseArray를 만들어보세요.
- reverse() 메서드는 사용하지 마세요.
- 예시: reverseArray([1, 2, 3, 4]) → [4, 3, 2, 1]
*/
let arr=[1,2,3,4];

function reverseArray(arr) {
    let newarr=[];
    for(let i=1;i<=arr.length;i++){
        newarr.push(arr[arr.length-i]);
    }
    return newarr;
}
console.log("reverseArray(["+arr+"]) -> (["+reverseArray(arr)+"])");

/*
문제 5: 배열 평균 구하기 (레벨 3)
- 매개변수: arr
- 반환값: number (평균값, 소수점 둘째 자리까지 반올림)
- 숫자 배열을 받아서 모든 요소의 평균을 구하는 함수 getAverage를 만들어보세요.
- 소수점 둘째 자리까지 반올림하세요.
- 예시: getAverage([1, 2, 3, 4, 5]) → 3.0
*/
let arr2=[1,2,3,4,5];

function getAverage(arr2){
    let result = 0;
    for(var value of arr2){
        result += value;
    }
    //return Math.round((result/arr2.length).toFixed(3))
    return Math.round((result/arr2.length)).toFixed(1);
}
console.log("getAverage(["+arr2+"]) -> "+getAverage(arr2));
/*
문제 6: 배열에서 특정 값 찾기 (레벨 3)
- 매개변수: arr, value
- 반환값: boolean (true/false)
- 배열과 찾을 값을 받아서 해당 값이 배열에 있는지 확인하는 함수 contains를 만들어보세요.
- 있으면 true, 없으면 false를 반환하세요.
- indexOf() 메서드는 사용하지 마세요.
- 예시: contains([1, 2, 3, 4, 5], 3) → true
*/
let arr3=[1,2,3,4,5];

function contains(arr3,value) {
    let result = false;
    for(let i=0; i<arr3.length;i++){
        if(value==arr3[i]){
            result = true;
            return result;
        }
    }
    return false;
}

console.log("contains(["+arr3+"]) -> "+contains(arr3, 3));
