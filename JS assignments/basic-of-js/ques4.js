function identicalFilter(arr) {
    let identical = [];
    let k = 0;
    for (i = 0; i < arr.length; i++) {
      let repeat = new Set(arr[i]);
      if (repeat.size === 1) {
        identical[k++] = arr[i];
      }
    }
    return identical;
  }
  
  console.log(identicalFilter(["88", "999", "22", "545", "133"]));
  console.log(identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]));
  