// Question 1
// Convert list of names into array of object.
console.log('\n\n Question 1  \n');

var names = [
    "Neeta Sapkota",
    "neha Shiwakoti",
    "Srijana Khatiwada",
    "Smrity Dhakal",
    "Sami Chakradhar",
    "Kirtee Maharjan",
    "Trija Thebe",
    "Sindhu Aryal",
    "Kusum Ranjitkar",
    "Elisha Bista",
    "Rachana Kafle",
    "Barsha Maharjan",
    "Pooja Gurung",
    "Bisikha Subedi",
    "Kritika Baral",
    "Srijana Thulung",
]

var objectArr = [];

names.forEach(function(value, index) {

    objects = {
        id: index+1,
        firstName: value.split(' ')[0],
        lastName: value.split(' ')[1],
    }

    objectArr.push(objects);
});

console.log(objectArr);


// Question 2
// Given the result of the above problem, create a function which takes a character and prints the count of first names which starts with that letter and which donot start with given letter.
console.log('\n\n   Question 2   \n');

function finding (char) {
    var findArr = objectArr.filter(function(value) {
        return (value.firstName[0].toUpperCase() == char.toUpperCase());
    });

    console.log('The number of names starting from ' + char + ' is: ' + findArr.length);
    console.log('The number of names not starting from ' + char + ' is: ' + (objectArr.length - findArr.length));
}

finding('s');
finding('a');


// Question 3
// Convert the array of the result in Question 1 in following format.
console.log('\n\n     Question 3   \n');

var newObject = {};

objectArr.forEach(function(val, index) {
    delete val.id;
    var key = index + 1;
    newObject[key] = val;
});

console.log(newObject);