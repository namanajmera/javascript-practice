function nonDecreasingArray(arr, length) {
  var changed = false;
  for (var i = 0; i < length - 1; i++) {
    if (arr[i] <= arr[i + 1]) {
      continue;
    }
    if (changed) {
      return false;
    }
    if (i == 0 || arr[i + 1] >= arr[i - 1]) {
      arr[i] = arr[i + 1];
    } else {
      arr[i + 1] = arr[i];
    }
    changed = true;
  }
  return true;
}

console.log(nonDecreasingArray([8, 4, 2], 3));
