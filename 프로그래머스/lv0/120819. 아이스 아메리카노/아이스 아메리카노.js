function solution(money) {
    var answer = [];
    const a=Math.floor(money/5500)
    const b=money%5500
    answer=[a,b]
    return answer;
}