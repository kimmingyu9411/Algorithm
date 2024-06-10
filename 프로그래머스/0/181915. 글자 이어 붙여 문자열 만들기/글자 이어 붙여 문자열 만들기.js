function solution(my_string, index_list) {
    var answer = '';
    answer=index_list.map(index=>my_string[index]).join('')
    return answer;
}