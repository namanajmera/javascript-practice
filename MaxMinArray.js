function maxMinArray(arr) {
  const n = arr.length;
  if (n === 1) {
    return arr[0] + arr[0];
  }
  var min = 0,
    max = 0;
  if (arr[0] > arr[1]) {
    max = arr[0];
    min = arr[1];
  } else {
    min = arr[0];
    max = arr[1];
  }
  for (var i = 2; i < n; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min + max;
}


console.log(maxMinArray([1, 3, 4, 1]));