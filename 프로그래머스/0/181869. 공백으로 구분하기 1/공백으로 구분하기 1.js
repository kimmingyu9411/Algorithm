function solution(my_string) {
    var answer = [];
    let arr=[]
    my_string=my_string.split('');
    for(let i=0; i<my_string.length; i++){
        if(my_string[i]===' '){
            answer.push(arr.join(''));
            arr=[]
        }else{
            arr.push(my_string[i])
        }
    }
    if(arr.length>0){
        answer.push(arr.join(''))
    }
    return answer;
}