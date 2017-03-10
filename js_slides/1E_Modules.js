//0. What is module
//Modules are JavaScript files that are loaded in a different mode

//1. Exporting

  // export data
  export var color = "red";
  export let name = "Nicholas";
  export const magicNumber = 7;

  // export function
  export function sum(num1, num2) {
      return num1 + num1;
  }

  // export class
  export class Rectangle {
      constructor(length, width) {
          this.length = length;
          this.width = width;
      }
  }

  // this function is private to the module
  function subtract(num1, num2) {
      return num1 - num2;
  }

  // define a function...
  function multiply(num1, num2) {
      return num1 * num2;
  }

  // ...and then export it later
  export { multiply };

//2. Importing
  import { identifier1, identifier2 } from "./example.js";

  // import just one
  import { sum } from "./example.js";
  console.log(sum(1, 2));     // 3
  sum = 1;        // error, can't redefine

  // import multiple bindings
  import { sum, multiply, magicNumber } from "./example.js";
  console.log(sum(1, magicNumber));   // 8
  console.log(multiply(1, 2));        // 2


  // import everything
  import * as example from "./example.js";
  console.log(example.sum(1,example.magicNumber));          // 8
  console.log(example.multiply(1, 2));    // 2

  //Syntax limitations
  if (flag) {
      export flag;    // syntax error
  }

  function tryImport() {
      import flag from "./example.js";    // syntax error
  }

  //Renaming exports
  function sum(num1, num2) {
      return num1 + num2;
  }

  export { sum as add };

  //Importing and Renaming
  import { add as sum } from "./example.js";
  console.log(typeof add);            // "undefined"
  console.log(sum(1, 2));             // 3

//3. Default values in exports
  export default function(num1, num2) {
      return num1 + num2;
  }

  //This module exports a function as its default value.
  //The function doesn’t require a name because the module itself represents the function.

  //Couple of more ways to export
  function sum(num1, num2) {
      return num1 + num2;
  }

  export default sum;

  //Or,
  function sum(num1, num2) {
      return num1 + num2;
  }

  export { sum as default };

//4. Importing default values

  // import the default
  //The local name sum is used to represent whatever default function the module exports
  import sum from "./example.js";
  console.log(sum(1, 2));     // 3


  //here, sum is the default export and color is non-default
  import sum, { color } from "./example.js";
  console.log(sum(1, 2));     // 3
  console.log(color);         // "red"

  //Renaming while importing is also possible
  // equivalent to previous example
  import { default as sum, color } from "example";
  console.log(sum(1, 2));     // 3
  console.log(color);         // "red"

  //Reexorts are also possible
  import { sum } from "./example.js";
  export { sum }


//5. Importng without bindings
  //Some modules may not export anything, and instead, only make modifications to objects in the global scope.
  //mostly used for making polyfills and shims

  import "./example.js";


//6. Modules in browsers
  //<!-- load a module JavaScript file -->
  //<script type="module" src="module.js"></script>
  <!-- include a module inline -->
  //<script type="module">
  //  import { sum } from "./example.js";
  //  let result = sum(1, 2);
  //</script>
