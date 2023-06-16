function solution(rsp) {
    var answer = '';
    let rspW={2:0,0:5,5:2};
    for(let i=0; i<rsp.length; i++){
        answer+=rspW[rsp[i]]
    }
    
    return answer;
}