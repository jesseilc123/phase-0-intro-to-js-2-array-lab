// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield",
];

function destructivelyAppendCat(name) {
    return cats.push(name);
};

function destructivelyPrependCat(name) {
    return cats.unshift(name);
};

function destructivelyRemoveLastCat() {
    return cats.pop();
};

function destructivelyRemoveFirstCat() {
    return cats.shift();
};

function appendCat(name) {
    var newCats = cats.slice();
    newCats.push(name);
    return newCats
};

function prependCat(name) {
    var newCats = cats.slice();
    newCats.unshift(name);
    return newCats
};

function removeLastCat() {
    return cats.slice(0, 2);
};

function removeFirstCat() {
    return cats.slice(1);
};
    
beforeEach()
destructivelyAppendCat()
beforeEach()
destructivelyPrependCat()
beforeEach()
destructivelyRemoveLastCat()
beforeEach()
destructivelyRemoveFirstCat()
beforeEach()
appendCat()
beforeEach()
prependCat()
beforeEach()
removeLastCat()
beforeEach()
removeFirstCat()
