function solution(my_string, n) {
    var answer = '';
    const a = my_string.length
    for(let i=0; i<a; i++){
        answer+=my_string[i].repeat(n)
    }
    return answer;
}