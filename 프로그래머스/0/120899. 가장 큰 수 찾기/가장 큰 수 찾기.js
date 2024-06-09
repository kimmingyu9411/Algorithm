function solution(array) {
    var answer = [];
    answer = [array[0],0];
    for(let i=1; i<array.length; i++){
        if(array[i-1]<array[i]){
           answer=[array[i],i] 
        }
    }
    return answer;
}
