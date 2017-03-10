//1. Default Parameters

  //Few ways of doing default Parameters

  function makeRequest(url, timeout, callback) {
      timeout = timeout || 2000;
      callback = callback || function() {};
      // the rest of the function
  }

  //OR like this, to be safer
  function makeRequest(url, timeout, callback) {
      timeout = (typeof timeout !== "undefined") ? timeout : 2000;
      callback = (typeof callback !== "undefined") ? callback : function() {};
      // the rest of the function
  }

  //ES6 makes this easier now
  function makeRequest(url, timeout = 2000, callback = function() {}) {
      // the rest of the function
  }

  //The arguments object is detached from the default Parameters
  function mixArgs(first, second = "b") {
      console.log(arguments.length);
      console.log(first === arguments[0]);
      console.log(second === arguments[1]);
      first = "c";
      second = "d"
      console.log(first === arguments[0]);
      console.log(second === arguments[1]);
  }

  mixArgs("a");

  //this will output
  //1
  // true
  // false
  // false
  // false

//2. Unnamed and Rest Parameers(...)
  function pick(object, ...keys) {
      let result = {};
      for (let i = 0, len = keys.length; i < len; i++) {
          result[keys[i]] = object[keys[i]];
      }
      return result;
  }

  //Restrictions on rest Parameters
  // 1. There can only be one
  // 2. It should be last
  // 3. Can't be used as object setter since object setter is supposed to take only one value.

//3. Function constructor
  //String is code!!!

  var add = new Function("first", "second", "return first + second");
  console.log(add(1, 1));     // 2

  //Now, we can add defaul params and rest params in Function constructor

  //Default params example
  var add = new Function("first", "second = first",
          "return first + second");
  console.log(add(1, 1));     // 2
  console.log(add(1));        // 2

  var pickFirst = new Function("...args", "return args[0]");
  console.log(pickFirst(1, 2));   // 1

//4. Spread Operator
  //The spread operator allows you to specify an array that should be split and have its items passed in as separate arguments to a function.

  let values = [25, 50, 75, 100]
  // equivalent to
  // console.log(Math.max(25, 50, 75, 100));
  console.log(Math.max(...values));           // 100

  //Can also be mixed and matched with other values
  let values = [-25, -50, -75, -100]
  console.log(Math.max(...values, 0));        // 0

//5. Arrow functions
  //Few properties of arrow functions
  //No this, super, arguments, and new.target bindings
  //Cannot be called with new
  //No prototype
  //Can’t change this
  //No arguments object
  //No duplicate named parameters

  //Syntax

  var reflect = value => value;

  // effectively equivalent to:

  var reflect = function(value) {
      return value;
  };

  var sum = (num1, num2) => num1 + num2;

  //IIFE
  let person = ((name) => {

    return {
        getName: function() {
            return name;
        }
    };

  })("Nicholas");

  console.log(person.getName());

  //For click handlers
  var PageHandler = {

    id: "123456",

    init: function() {
        document.addEventListener("click",
                event => this.doSomething(event.type), false);
    },

    doSomething: function(type) {
        console.log("Handling " + type  + " for " + this.id);
    }
  };

  //Array usage
  var result = values.sort((a, b) => a - b);

  //Arrow functions are appropriate to use anywhere you’re currently using an anonymous function expression, such as with callbacks.
