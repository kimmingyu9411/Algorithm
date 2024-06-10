function solution(my_string, is_suffix) {
    var answer = 0;
    if(my_string.slice(-is_suffix.length)===is_suffix){
        answer=1
    }
    return answer;
}