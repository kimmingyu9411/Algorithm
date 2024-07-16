function solution(myString, pat) {
    var answer = 0;
    let lowerMyString = myString.toLowerCase();
    let lowerPat = pat.toLowerCase();
    
    if (lowerMyString.includes(lowerPat)) {
        return 1;
    } else {
        return 0;
    }
    return answer;
}
