function solution(numbers, k) {
    var answer = 0;
    let indexNum= 0;
    for(let i =0; i<k; i++){
        if(indexNum<numbers.length){
         indexNum+=2
        }else{
         indexNum-=(numbers.length);
         indexNum+=2
        }
    }
    answer=numbers[indexNum-2]
    return answer;
}