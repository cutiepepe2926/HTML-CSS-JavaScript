/*
1. registUser(유저객체) 함수를 하나 생성합니다.
2. 매개변수로 전달된 유저객체의 name값이 2글자 이하이거나, 비어있으면 예외처리를 진행합니다.
3. 유저객체 안에 name값이 정상값이라면, 유저의 이름을 반환하면 됩니다.
*/

let user = {name: "히히히", addr: "서울시"};
function registUser(name_string){
    try {
        if(name_string.length<=2 && name_string.length>0) {
            throw new Error("유저이름이 2글자 이하입니다.");
        }
        if(name_string==0){
            throw new Error("유저이름이 없습니다.")
        }
        console.log(name_string);
    } catch(error){
        console.log(error.message); //에러의 메시지를 볼 수 있습니다.
        return null;
    }
}

registUser(user.name);