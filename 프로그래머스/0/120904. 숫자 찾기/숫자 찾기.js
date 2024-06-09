function solution(num, k) {
    var answer = 0;
    let str=num.toString();
    for(let i=0; i<str.length; i++){
        if(str[i]==k){
            answer=i+1
            break
        }else{answer=-1}
    }
    return answer;
}