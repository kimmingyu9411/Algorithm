function solution(my_string) {
    var answer = 0;
    for(let i=0; i<my_string.length; i++){
        if(!isNaN(my_string[i])){
           let str=my_string[i];
           let num=Number(str);
            answer+=num
        }
    }
    return answer;
}