//JSON => 자바스크립트 오브젝트 표기법 (문자열)
//네트워크상에서 데이터를 교환할때, 사용하는 표준문법

let obj = {name: "홍길동", age: 20}; //Object
let json = '{"name": "홍길동", "age": 20 }'; //JSON

//오브젝트 => JSON형변환 - JSON.stringify()
let result = JSON.stringify(obj);
console.log(result);

//JSON => 오브젝트 형변환 - JSON.parse()
let result2 = JSON.parse(result);
console.log(result2);

//JSON데이터는 키, 모든문자열값이 ""로 묶여 있어야 합니다.
let result3 = JSON.parse('{addr: "서울"}'); //에러!
console.log(result3);
