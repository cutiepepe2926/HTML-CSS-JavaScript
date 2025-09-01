//매개변수로 배열을 받고, 배열을 반환하는 함수 
/*
배열의 값 중에서 홀수만 필터링해서, 새로운 배열을 반환하는 함수
매개변수 -> [1,2,3,4,5];
반환 -> [1,3,5];
*/
function getNum(arr) {
    //배열을 반복해서, 홀수인경우는 새로운 배열에 추가
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 1 ) { //홀수판별
            newArr.push( arr[i] );
        }
    }
    return newArr;
}
//let myArr = [1,3,4,5,6,7,8];
let result = getNum([1,3,4,5,6,7,8]);
console.log(result);

