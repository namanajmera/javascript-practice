function sum(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    if (i % 2 == 0) sum += i;
  }
  return sum;
}

console.log(sum(20));
