function solution(start, end_num) {
    var answer = [];
    while (end_num<=start){
       answer.push(start);
        start--;
        if(end_num>start){
            break
        }
          
     
    }
    return answer;
}