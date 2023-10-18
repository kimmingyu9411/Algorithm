function solution(numbers) {
    var answer = 0;
    for (let i = 1; i < numbers.length; i++) {
    let currentElement = numbers[i];
    let j = i - 1;
    while (j >= 0 && numbers[j] > currentElement) {
      numbers[j + 1] = numbers[j];
      j--;
    }

    numbers[j + 1] = currentElement;
  }
    answer=numbers[numbers.length-1]*numbers[numbers.length-2]
    return answer;
}