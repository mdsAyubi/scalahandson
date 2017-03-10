//1. Creating Arrays

  let items = new Array(2);
  console.log(items.length);          // 2
  console.log(items[0]);              // undefined
  console.log(items[1]);              // undefined

  items = new Array("2");
  console.log(items.length);          // 1
  console.log(items[0]);              // "2"

  items = new Array(1, 2);
  console.log(items.length);          // 2
  console.log(items[0]);              // 1
  console.log(items[1]);              // 2

  items = new Array(3, "2");
  console.log(items.length);          // 2
  console.log(items[0]);              // 3
  console.log(items[1]);              // "2"

  //With ES6, just pass the elements you want in your Array
  let items = Array.of(1, 2);
  console.log(items.length);          // 2
  console.log(items[0]);              // 1
  console.log(items[1]);              // 2

  items = Array.of(2);
  console.log(items.length);          // 1
  console.log(items[0]);              // 2

  items = Array.of("2");
  console.log(items.length);          // 1
  console.log(items[0]);

  //Array.from()
  //Easier way of converting non-array objects into actual arrays

  var args = Array.from(arguments);

  //Also takes a mapping function

  function translate() {
      return Array.from(arguments, (value) => value + 1);
  }

  let numbers = translate(1, 2, 3);
  console.log(numbers);               // 2,3,4

//2. New Methods in Arrays

  //find and findIndex

  let numbers = [25, 30, 35, 40, 45];

  console.log(numbers.find(n => n > 33));         // 35
  console.log(numbers.findIndex(n => n > 33));    // 2

  //fill : The fill() method fills one or more array elements with a specific value

  let numbers = [1, 2, 3, 4];
  numbers.fill(1);
  numbers.fill(1, 2); //optional start index
  numbers.fill(0, 1, 3); //optional end index
  console.log(numbers.toString());    // 1,1,1,1

  //copyWithin()

  //The copyWithin() method is similar to fill() in that it changes multiple array elements at the same time.

  let numbers = [1, 2, 3, 4];
  // paste values into array starting at index 2
  // copy values from array starting at index 0
  numbers.copyWithin(2, 0);
  console.log(numbers.toString());    // 1,2,1,2


  //One more thing...

  //Template strings...useful

  let name = "ABC",
      message = `Hello, ${name}.`;

  console.log(message);       // "Hello, Nicholas."


  let count = 10,
      price = 0.25,
      message = `${count} items cost $${(count * price).toFixed(2)}.`;

  console.log(message);       // "10 items cost $2.50."
