function solution(num_str) {
    var answer = 0;
    answer=num_str.split('').reduce((a,b)=>Number(a)+Number(b))
    return answer;
}