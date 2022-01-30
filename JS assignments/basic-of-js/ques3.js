function toArray(obj) {
    let keys = Object.keys(obj);
    let len = keys.length;
    let arr = [];
    for (let i = 0; i < len; i++) {
      arr.push([keys[i], obj[keys[i]]]);
    }
    return arr;
  }
  
  console.log(toArray({ a: 1, b: 2 }));
  console.log(toArray({ shrimp: 15, tots: 12 }));
  console.log(toArray({}));