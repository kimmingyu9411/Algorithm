function solution(my_string) {
    let answer = '';
    let le=my_string.length
    for(let i=1; i<=le; i++){
    answer+=my_string[le-i]
    }
    return answer
}