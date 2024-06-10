function solution(arr1, arr2) {
    var answer = 0;
    if(arr1.length>arr2.length){
        answer=1
    }else if(arr1.length<arr2.length){
        answer=-1
    }else{
        let sumA=arr1.reduce((acc,cur)=>acc +cur,0);
        let sumB=arr2.reduce((acc,cur)=>acc +cur,0);
        
        if(sumA>sumB){
            answer=1
        }else if(sumA<sumB){
            answer=-1
        }else{answer=0}
    }
    
    
    return answer;
}