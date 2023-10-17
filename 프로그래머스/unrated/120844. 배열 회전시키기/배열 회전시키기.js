function solution(numbers, direction) {
    if (direction == 'right') {
        var pop_number = numbers.pop();
        numbers.unshift(pop_number);
    } else {
        var shift_number = numbers.shift();
        numbers.push(shift_number);
    }
    return numbers;
}