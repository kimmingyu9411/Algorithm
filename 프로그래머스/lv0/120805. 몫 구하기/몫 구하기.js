function solution(num1, num2) {
    let result = 0;
    while (num1 >= num2) {
        num1 -= num2;
        result += 1;
    }
    return result;
}
