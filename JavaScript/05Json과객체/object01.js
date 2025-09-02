//객체 - {키:값} 형태로 여러값을 저장해놓은 구조.

let person = {name: "순자", age: 20};
console.log( typeof person );

//객체의 값을 확인하기
console.log(  person.name ); // .으로접근
console.log(  person["name"] ); //["키"] 접근

//객체의 값 수정하기 - 동일한 키값 변경
person.age = 30;
person["age"] = 31;
console.log(person);

//객체의 값 추가하기 - 새로운 키를 추가
person.hobby = ["잠자기", "코딩하기"];
console.log(person);

//객체의 값 삭제하기 delete 키워드를 이용
delete person.hobby;
console.log(person);

//객체에는 함수도 저장될 수 있음
//this키워드는 "자기자신" 을 의미함
let people = {
    name: "길동",
    sayHello: function () {
        console.log("저의 이름은" + this.name + "입니다");
    }
}

console.log(people.name);
people.sayHello();

console.log("-----------------------------------------");
//본인 이름의 객체를 생성
//키값: name, age, cm, hello 함수, hobby 배열
