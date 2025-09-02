// 1. palindrome 매개변수로 String 값을 받아, 회문 여부를 검사하는 함수입니다.
// 2. 회문: 똑바로 읽으나 거꾸로 읽으나 똑같은 단어나 문장.
// 3. ex) 다시 합창 합시다, 다 같은 것은 같다, 아 좋다 좋아 등
// 4. 문장은 공백을 포함하여 받을 수 있습니다.
// 5. 회문이라면 true, 아니라면 false 를 리턴합니다.

let test = "다시 합창 합시다";
function palindrome(text){
    let text_arr = text.replaceAll(" ","").split(" ");
    let text_total = "";
    for(let i=0;i<text_arr.length;i++){
        text_total += text_arr[i];
    }
    //console.log(text_total);
    let result ="";
    for(let j=0;j<text_total.length+1;j++){
        result += text_total.charAt(text_total.length-j);
    }
    //console.log(text_total.length);
    //console.log(result);

    if(text_total==result){
        return true;
    }
    else return false;
}
console.log(palindrome(test));