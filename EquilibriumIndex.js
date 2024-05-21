function equilibriumIndex(arr, length) {
  var sum = 0,
    leftSum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  for (var i = 0; i < length; i++) {
    sum -= arr[i];
    if (sum === leftSum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
}

console.log(equilibriumIndex([20,9,7,3,5,5], 6))