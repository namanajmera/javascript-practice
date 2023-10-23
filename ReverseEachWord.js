function reverse(input) {
  let arr = input.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("").reverse().join("");
  }
  return arr.join(" ");
}

var str = "Welcome to Coding Ninjas";
console.log(reverse(str));
