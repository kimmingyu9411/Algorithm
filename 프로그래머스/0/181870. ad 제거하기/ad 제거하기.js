function solution(strArr) {
    var answer = [];
    answer=strArr.filter(x=>!x.includes("ad"))
    return answer;
}