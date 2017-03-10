//1. Classes in ES5
function PersonType(name) {
    this.name = name;
}
PersonType.prototype.sayName = function() {
    console.log(this.name);
};

let person = new PersonType("ABC");
person.sayName();   // outputs "Nicholas"

console.log(person instanceof PersonType);  // true
console.log(person instanceof Object);      // true

//2. Basic Class declaration

class PersonClass {
    // equivalent of the PersonType constructor
    constructor(name) {
        this.name = name;
    }
    // equivalent of PersonType.prototype.sayName
    sayName() {
        console.log(this.name);
    }
}

let person = new PersonClass("ABC");
person.sayName();   // outputs "Nicholas"

console.log(person instanceof PersonClass);     // true
console.log(person instanceof Object);          // true

console.log(typeof PersonClass);                   // "function"
console.log(typeof PersonClass.prototype.sayName);  // "function"

//3. Class Expression

let PersonClass = class {

    // equivalent of the PersonType constructor
    constructor(name) {
        this.name = name;
    }

    // equivalent of PersonType.prototype.sayName
    sayName() {
        console.log(this.name);
    }
};

let person = new PersonClass("Nicholas");
person.sayName();   // outputs "Nicholas"

console.log(person instanceof PersonClass);     // true
console.log(person instanceof Object);          // true

console.log(typeof PersonClass);                    // "function"
console.log(typeof PersonClass.prototype.sayName);  // "function"

//Or, named class Expression

let PersonClass = class PersonClass2 {
    // equivalent of the PersonType constructor
    constructor(name) {
        this.name = name;
    }
    // equivalent of PersonType.prototype.sayName
    sayName() {
        console.log(this.name);
    }
};
console.log(typeof PersonClass);        // "function"
console.log(typeof PersonClass2);       // "undefined"


//4. Accessor properties

class CustomHTMLElement {
    constructor(element) {
        this.element = element;
    }
    get html() {
        return this.element.innerHTML;
    }
    set html(value) {
        this.element.innerHTML = value;
    }
}

const c = new CustomHTMLElement('abc');
console.log(c.html);
c.html = 'def';
console.log(c.html);

//5. Computed property names

let methodName = "sayName";
class PersonClass {
    constructor(name) {
        this.name = name;
    }
    [methodName]() {
        console.log(this.name);
    }
}
let me = new PersonClass("ABC");
me.sayName();           // ABC

//6. Static members

function PersonType(name) {
    this.name = name;
}
// static method
PersonType.create = function(name) {
    return new PersonType(name);
};
// instance method
PersonType.prototype.sayName = function() {
    console.log(this.name);
};

//Or, use the ES6 way
class PersonClass {
    // equivalent of the PersonType constructor
    constructor(name) {
        this.name = name;
    }
    // equivalent of PersonType.prototype.sayName
    sayName() {
        console.log(this.name);
    }
    // equivalent of PersonType.create
    static create(name) {
        return new PersonClass(name);
    }
}

let person = PersonClass.create("ABC");

//7. Inheritance

class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    getArea() {
        return this.length * this.width;
    }
}

class Square extends Rectangle {
    constructor(length) {
        // same as Rectangle.call(this, length, length)
        super(length, length);
    }
}

var square = new Square(3);

console.log(square.getArea());              // 9
console.log(square instanceof Square);      // true
console.log(square instanceof Rectangle);   // true
