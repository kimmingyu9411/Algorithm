function solution(numbers, direction) {
    if (direction == 'right') {
        var removedElement = numbers.pop();
        numbers.unshift(removedElement);
    } else {
        var removedElement = numbers.shift();
        numbers.push(removedElement);
    }
    return numbers;
}