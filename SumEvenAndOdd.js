function even_odd_sum(num) {
  let evenSum = 0;
  let oddSum = 0;
  while (num > 0) {
    var extract = num % 10;
    if (extract % 2 == 0) {
      evenSum += extract;
    } else {
      oddSum += extract;
    }
    num = Math.floor(num / 10);
  }
  return [evenSum, oddSum];
}

console.log(even_odd_sum(123456));
