function substrings(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      console.log(str.substring(i, j + 1));
    }
  }
}

var str = "abc";
console.log(substrings(str));
