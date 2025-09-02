//예외처리 - 예외(에러) 가 발생했을때, 
//프로그램을 흐름을 정상으로 처리하는 과정
try {
    let str = '{name: "홍길동"}';
    let obj = JSON.parse(str); //에러! - 중단
    console.log(obj);

} catch (error) {
    //예외가 발생했을 때 처리할 문장
    console.log(error, "JSON타입이 아닙니다");
} finally { //옵션 - 에러가 발생하던, 발생하지 않던 무조건 실행될 문장이 들어갑니다.
    console.log("무조건 실행되는 문장");
}

console.log("프로그램 정상 종료!!!");