function solution(numbers) {
    var answer = 0;
    let number=numbers.sort((a,b)=>b-a)
    if(numbers[0]*numbers[1]>numbers[numbers.length-1]*numbers[numbers.length-2]){
        answer=numbers[0]*numbers[1]
    }else{  answer=numbers[numbers.length-1]*numbers[numbers.length-2]}
    return answer;
}