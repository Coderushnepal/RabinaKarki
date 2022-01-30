// pattern

function pattern(n) {
    let output = "";
    for (i = 0; i < n; i++) {
        for (j = i; j < n; j++) {
            output = output.concat("* ");
        }
        output = output.concat("\n");
    }
    return output;
}

console.log(pattern(5));