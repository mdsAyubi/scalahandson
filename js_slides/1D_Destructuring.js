//1. Destructuring Ojects

  //Old way of doing things
  let options = {
          repeat: true,
          save: false
      };

  // extract data from the object
  let repeat = options.repeat,
      save = options.save;

  //ES6 way
  let node = {type: "Identifier", name: "foo"};
  let { type, name } = node;
  console.log(type);      // "Identifier"
  console.log(name);      // "foo"

  //Used alone is syntax error

  // syntax error!
  let { type, name };
  // syntax error!
  const { type, name };

  //Can be used anywhere a value is expected

  function outputInfo(value) {
      console.log(value === node);        // true
  }
  outputInfo({ type, name } = node);

  //Can give default values too, if not hen undefined
  let node = {
          type: "Identifier",
          name: "foo"
      };
  let { type, name, value = true } = node;
  console.log(type);      // "Identifier"
  console.log(name);      // "foo"
  console.log(value);     // true

  //Or, give a different name
  let { type: localType, name: localName } = node;

  //Or do both
  let { type: localType, name: localName = "bar" } = node;

  //Nested Destructuring

  let node = {
          type: "Identifier",
          name: "foo",
          loc: {
              start: {
                  line: 1,
                  column: 1
              },
              end: {
                  line: 1,
                  column: 4
              }
          }
      };

  let { loc: { start }} = node;

  console.log(start.line);        // 1
  console.log(start.column);      // 1

//2. Destructuring Arrays

  //Array destructuring syntax is very similar to object destructuring;
  //it just uses array literal syntax instead of object literal syntax.
  //The destructuring operates on positions within an array,

  let colors = [ "red", "green", "blue" ];
  let [ firstColor, secondColor ] = colors;

  console.log(firstColor);        // "red"
  console.log(secondColor);       // "green"

  //You can omit the positions you don't care
  let colors = [ "red", "green", "blue" ];
  let [ , , thirdColor ] = colors;
  console.log(thirdColor);        // "blue"

  //You can finally swap like this
  let a = 1,
      b = 2;

  [ a, b ] = [ b, a ];

  //You can use default values
  let colors = [ "red" ];
  let [ firstColor, secondColor = "green" ] = colors;

  //Nested destructuring
  let colors = [ "red", [ "green", "lightgreen" ], "blue" ];
  let [ firstColor, [ secondColor ] ] = colors;

  console.log(firstColor);        // "red"
  console.log(secondColor);       // "green"

  //Rest operator
  let colors = [ "red", "green", "blue" ];
  let [ firstColor, ...restColors ] = colors;

  console.log(firstColor);        // "red"
  console.log(restColors.length); // 2
  console.log(restColors[0]);     // "green"
  console.log(restColors[1]);     // "blue"

  //Closing arrays with ES6
  // cloning an array in ECMAScript 6
  let colors = [ "red", "green", "blue" ];
  let [ ...clonedColors ] = colors; //rest items should be last, like in Methods

//3. Destructuring Parameters

  //All the destructuring features are available when destructuring function parameters
  //They are required: Just a shorthand for sructured parameters

  function setCookie(name, value, { secure, path, domain, expires } = {}) {

      // ...
  }

  //Or, with more control

  function setCookie(name, value,
      {
          secure = false,
          path = "/",
          domain = "example.com",
          expires = new Date(Date.now() + 360000000)
      } = {}
  ) {
      // ...
  }
