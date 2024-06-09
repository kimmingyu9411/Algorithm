function solution(sides) {
    var answer = 0;
    let max=Math.max(...sides);
    let min=sides.filter(function(num) {return num !== max});
    
    if(min.length<2){
        answer=1
    }else if(min[0]+min[1]>max){
         answer=1
    }else{
        answer=2
    }
       
    return answer;
}