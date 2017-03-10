
//ES5 Variable Declaration: Hoisted
function getValue(condition) {
    if (condition) {
        var value = "blue";
        // other code
        return value;
    } else {
        // value exists here with a value of undefined
        return null;
    }
    // value exists here with a value of undefined
}

//ES6 Variable declaration with let or const
function getValueWithLet(condition) {
    if (condition) {
        let value = "blue";
        // other code
        return value;
    } else {
        // value doesn't exist here
        return null;
    }
    // value doesn't exist here
}

//const variables: just constants -- not immutable
const person = {
    name: "Nicholas"
};
// works
person.name = "Greg";

// throws an error
// person = {
//     name: "Greg"
// };

//What does it mean for the loops
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// i is not accessible here - throws an error but if we change the loop variable to var, it will be accessible
//console.log(i);


//Another caveat with functions in loops
var funcs = [];
for (var i = 0; i < 10; i++) {
    funcs.push(function() { console.log(i); });
}
funcs.forEach(function(func) {
    func();     // outputs the number "10" ten times
});

//The above issue can be solved with the help of IIFE
var funcs = [];
for (var i = 0; i < 10; i++) {
    funcs.push((function(value) {
        return function() {
            console.log(value);
        }
    }(i)));
}
funcs.forEach(function(func) {
    func();     // outputs 0, then 1, then 2, up to 9
});

//OR, simply use let
var funcs = [];
for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    });
}
funcs.forEach(function(func) {
    func();     // outputs 0, then 1, then 2, up to 9
})

//Lastly, global scope
//If you instead use let or const in the global scope,
//a new binding is created in the global scope but no property is added to the global object.
//That also means you cannot overwrite a global variable using let or const, you can only shadow it.

//In short, as an standard prefer const if possible. Use let only for variables which are mutable. Use eslint rule prefer-const which will fail the build
//If you use a variable which could be const but isn't
//http://eslint.org/docs/rules/prefer-const
