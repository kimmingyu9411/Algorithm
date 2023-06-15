function solution(my_string, letter) {
    var answer = '';
    const a=my_string.length
    for(let i=0; i<a;i++)
        if(letter!==my_string[i]){
            answer+=my_string[i]
        }
return answer
}