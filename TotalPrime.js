function prime(s, e) {
  var count = 0;
  for (let j = s; j <= e; j++) {
    var isPrime = true;
    for (let i = 2; i < j; i++) {
      if (j % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      count++;
    }
  }
  return count;
}

console.log(prime(2, 10));
console.log(prime(2, 5));
