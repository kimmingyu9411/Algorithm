function solution(my_string) {
    var answer = [];
    answer=my_string.split("").map((num)=>{if(!isNaN(num)){return Number(num)}}).filter((num)=> num !==undefined).sort()
    return answer;
}