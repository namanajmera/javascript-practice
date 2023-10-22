function swap(num1, num2) {
  [num1, num2] = [num2, num1];

  return [num1, num2];
}

console.log(swap(2, 5));
