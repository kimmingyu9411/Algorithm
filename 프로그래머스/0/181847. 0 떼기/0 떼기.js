function solution(n_str) {
    var answer = '';
    for(let str of n_str){
        console.log(str)
        if(str==="0"){
            n_str=n_str.slice(1)
        }else{
            answer=n_str
            break
        }
    }
    return answer;
}