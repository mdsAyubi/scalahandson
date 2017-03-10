//1. Object Literals
  function createPerson(name, age) {
    return {
        name: name,
        age: age
    };
  }

  //Now, we can simply use
  function createPerson(name, age) {
      return {
          name,
          age
      };
  }

//2. Methods
  var person = {
      name: "Nicholas",
      sayName: function() {
          console.log(this.name);
      }
  };

  //Again, no need to duplicate
  var person = {
      name: "Nicholas",
      sayName() {
          console.log(this.name);
      }
  };

//3. Computed Property
  var lastName = "last name";

  var person = {
      "first name": "Nicholas",
      [lastName]: "Zakas"
  };

  //Or,
  var suffix = " name";

  var person = {
      ["first" + suffix]: "Nicholas",
      ["last" + suffix]: "Zakas"
  };

//4. New Methods
  //Oject.is(obj1, obj2)
  //n many cases, Object.is() works the same as the === operator.
  //The only differences are that +0 and -0 are considered not equivalent
  //and NaN is considered equivalent to NaN

  console.log(+0 === -0);             // true
  console.log(Object.is(+0, -0));     // false

  console.log(NaN == NaN);            // false
  console.log(NaN === NaN);           // false
  console.log(Object.is(NaN, NaN));   // true

  //Object.assign()

  var receiver = {};

  Object.assign(receiver,
      {
          type: "js",
          name: "file.js"
      },
      {
          type: "css"
      }
  );

  console.log(receiver.type);     // "css"
  console.log(receiver.name);     // "file.js"
