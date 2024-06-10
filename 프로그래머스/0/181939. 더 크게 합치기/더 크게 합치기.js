function solution(a, b) {
    var answer = 0;
    let strA=a.toString();
    let strB=b.toString();
    answer=strA+strB>strB+strA ? strA+strB : strB+strA
    return Number(answer);
}