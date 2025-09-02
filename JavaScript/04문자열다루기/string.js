//문자열 다루기 함수

let str = "hello world javascript";

console.log(`문자열 길이: ${str.length}`);
//문자열 한글자 자르기 
let s1 = str.charAt(3);
console.log(`index 3번째 문자열: ${s1}`);
console.log(`index 5번째 문자열: ${ str.charAt(5) }`);

//특정 문자 기준으로 문자열 자르기
let s2 = str.split("");
console.log(s2);
let s3 = str.split(" ");
console.log(s3);

//특정 문자의 위치 자르기 
let s4 = str.substring(6, 11);
console.log(`6~11사이의 문자열: ${s4}`); //6이상~11미만 추출

let s5 = str.substring(10);
console.log(`10미만 문자열 절삭: ${s5}`); //10미만 절삭

//특정 위치로 문자열 찾기
console.log("l이 처음으로 발견된 위치:" +  str.indexOf("l") );
//hello world javascript
console.log("5번째 인덱스 이후에 발견된 o의 위치:" +  str.indexOf("o", 5) );
console.log("마지막부터 a찾기:" +  str.lastIndexOf("a") );
console.log("포함되어있으면 true:" + str.includes("java") );
console.log("hell로 시작 하면 true:" + str.startsWith("hell") );
console.log("'헑!' 으로 끝나면 true:" + str.endsWith("헑!") );

//문자열 변환 - ****원본문자는 변함 없음****
console.log( "=".repeat(20) ); //문자열 20회 반복
console.log( str.replace("l", "헐") ); //첫번째로 발견되는 l => 헐 으로 변환
console.log( str.replaceAll("l", "헑") ); //모든 l => 헑 으로 변환
console.log( " hello    ".trim() ); //양측 공백 제거

let text = "Hello";
console.log( text.toUpperCase() ); //전부 대문자
console.log( text.toLowerCase() ); //전부 소문자



