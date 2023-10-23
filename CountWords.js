function count_words(str) {
  var arr = str.split(" ");
  return arr.length;
}

var str = "this is a sample string";
console.log(count_words(str));
