function solution(a, b) {
    var answer = 0;
    if(a%2!==0&&b%2!==0){
       return answer=a*a+b*b
    }else if(a%2!==0||b%2!==0){
    return answer=2*(a+b)
    }else if(a-b<0){
        return answer=-1*(a-b)
    }else{
         return answer=a-b
    }
    
}