function censor(string) {
    let result = "";
    words = string.split(" ");
    for (i = 0; i < words.length; i++) {
      var len = words[i].length;
      if (len > 4) {
        result = result + "*".repeat(len) + " ";
      } else {
        result = result + words[i] + " ";
      }
    }
    return result;
  }

console.log(censor("The code is fourty"));
console.log(censor("Two plus three is five"));
console.log(censor("aaaa aaaaa 1234 12345"));
  