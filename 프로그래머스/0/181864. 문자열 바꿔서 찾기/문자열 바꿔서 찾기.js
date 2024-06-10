function solution(myString, pat) {
    var answer = 0;
    answer=+myString.split('').map(x=>x==='A' ? 'B': 'A').join('').includes(pat)
    return answer;
}