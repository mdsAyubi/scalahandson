//1. Sets

//Workarounds in ES5 for sets and maps

//Sets
let set = Object.create(null);
set.foo = true;
// checking for existence
if (set.foo) {
    // do something
}

//Maps
let map = Object.create(null);
map.foo = "bar";
// retrieving a value
let value = map.foo;
console.log(value);         // "bar"

//Issues with falsy values and string/num as keys

//Sets in ES6
let set = new Set();
set.add(5);
set.add("5");

console.log(set.size);    // 2

// Sets do not coerce values to determine whether they are the same.
// That means a set can contain both the number 5 and the string "5" as two separate items.
// (Internally, the comparison uses the Object.is() method

//Distincy keys
let set = new Set(),
    key1 = {},
    key2 = {};
set.add(key1);
set.add(key2);

console.log(set.size);    // 2

//Duplicates, silently ignored
let set = new Set();
set.add(5);
set.add("5");
set.add(5);     // duplicate - this is ignored

console.log(set.size);    // 2

//Test for existence
let set = new Set();
set.add(5);
set.add("5");

console.log(set.has(5));    // true
console.log(set.has(6));    // false

//Removing values
set.delete(5);
set.clear()

//Foreach works on Set
let set = new Set([1, 2]);

set.forEach(function(value, key, ownerSet) {
    console.log(key + " " + value);
    console.log(ownerSet === set);
});


//Array to Set and then back to Array
let set = new Set([1, 2, 3, 3, 3, 4, 5]),
    array = [...set];

//So, a remove duplicates kind of function would look like

function removeDuplicates(items) {
    return [...new Set(items)];
}

//2. Maps

// has(key) - Determines if the given key exists in the map
// delete(key) - Removes the key and its associated value from the map
// clear() - Removes all keys and values from the map

let map = new Map();
map.set("name", "ABC");
map.set("age", 25);

console.log(map.size);          // 2

console.log(map.has("name"));   // true
console.log(map.get("name"));   // "ABC"

map.delete("name");
map.clear();

//Init with Array

let map = new Map([["name", "ABC"], ["age", 25]]);

console.log(map.has("name"));   // true
console.log(map.get("name"));   // "ABC"
console.log(map.has("age"));    // true
console.log(map.get("age"));    // 25
console.log(map.size);          // 2

//ForEach is available for Maps also

map.forEach(function(value, key, ownerMap) {
    console.log(key + " " + value);
    console.log(ownerMap === map);
});
