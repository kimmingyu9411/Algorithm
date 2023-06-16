function solution(balls, share) {
    var answer = 0;
    let ball=1
    let she=1
    for(let i=0;i<share;i++){
      ball*=(balls-i)  
    }
    for(let i=0;i<share;i++){
        she*=(share-i)
    }
    answer=ball/she
    return answer;
}