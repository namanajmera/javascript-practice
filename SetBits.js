function set_bits(n) {
  var str = "";
  while (n > 0) {
    var val = n % 2;
    str += val;
    n = parseInt(n / 2);
  }
  var count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "1") {
      count++;
    }
  }
  return count;
}

console.log(set_bits(13));
