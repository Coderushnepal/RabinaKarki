function keysAndValues(obj) {
    let keys = Object.keys(obj);
    keys = keys.sort();
    let values = Object.values(obj);
    let arr = [keys, values];
    return arr;
}

console.log( keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }) );
console.log( keysAndValues({ b: 1, a: 2, c: 3 }) );
console.log( keysAndValues({ key1: true, key3: false, key2: undefined}) );