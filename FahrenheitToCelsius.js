function Fahrenheit_to_Celsius(start, end, step) {
  for (var i = start; i <= end; i += step) {
    var cal = ((i - 32) * 5) / 9;
    console.log(i, Math.trunc(cal));
  }
}

console.log(Fahrenheit_to_Celsius(0, 100, 20));
