// Filter out Strings from an Array
// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

function filterString(val) {
    for (var i = 0; i < val.length; i++) {
        if (typeof(val[i]) === 'string') {
            val.splice(i, 1);
            i--;
        }
    }
    return val;
}

console.log( filterString([1, 2, "a", "b", 3]) );
console.log(filterString( [1, "a", "b", 0, 15] ));
console.log(filterString( [1, 2, "aasf", "1", "123", 123] ));