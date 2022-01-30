// Question 1

//Return Something to Me!
function addSomething(text) {
    return "something " + text;
}

//Answer 1
console.log(addSomething("is better than nothing"));
console.log(addSomething("Bob Jane"));
console.log(addSomething("something"));

//Question 2

//Word without First Character
function firstWord(letter) {
    return letter.substr(1);
}

//Answer 2
console.log(firstWord("apple"));
console.log(firstWord("cherry"));
console.log(firstWord("plum"));