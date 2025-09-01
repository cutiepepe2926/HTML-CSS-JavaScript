//매개변수 - 함수가 전달받는 변수값
//매개변수는 여러개 일수도 있습니다.
function sayHello(name, age) {
    console.log(`안녕하세요. ${name} 님! 너 몇살이야? ${age}세 입니다`);
}
//구구단수를 매개변수로 전달받아서, 구구단을 출력하는 함수
function gugudan(dan) {
    console.log(`==== ${dan}단 ====`);
    for(let i = 1; i <= 9; i++) {
        console.log(`${dan} x ${i} = ${dan * i}`);
    }
}
sayHello("길동", 20);
//매개변수가 일치하지 않더라도 호출은 됩니다 (undefined). 
//하지만 매개변수는 정확히 맞춰서 전달하는게 기본입니다.
sayHello("철수"); 
gugudan(3);
