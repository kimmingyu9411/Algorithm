function solution(arr, n) {
    var answer = [];
    if(arr.length%2===0){
        answer=arr.map((num,index)=>index%2!==0? num+n : num)
    }
    if(arr.length%2!==0){
        answer=arr.map((num,index)=>index%2===0? num+n : num)
    }
    return answer;
}