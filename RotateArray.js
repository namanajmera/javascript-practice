function rotate(arr, k) {
  while (k !== 0) {
    arr.push(arr.shift());
    k--;
  }
  return arr;
}

var arr = [7, 5, 2, 11, 2, 43, 1, 1];
var k = 2;

console.log(rotate(arr, k));
