function solution(n, t) {
    var answer = 2;
    for(let i=1; i<t; i++){
        answer=answer*2
    }
    answer=answer*n
    return answer;
}