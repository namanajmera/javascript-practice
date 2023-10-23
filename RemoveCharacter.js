function remove_character(input, c) {
  return input.replaceAll(c, "");
}

var input = "aabccbaa";
var c = "a";
console.log(remove_character(input, c));
