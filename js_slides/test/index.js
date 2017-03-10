//MyModule = require('./my-module');
//CustomHTMLElement = require('./CustomElement');
import * as MyModule from './my-module';
import CustomElement from './CustomElement';

const myMap = {
  1: 'StartShip Enterprise',
  2: 'USS Discovery One',
  3: 'Endurance'
};

const sumOfKeys = MyModule.sumOfKeys(myMap);
console.log(`Sum of keys of myMap ${sumOfKeys}`);

const myCustomElement = new CustomHTMLElement("NEW_KIND_OF_DIV");
console.log(myCustomElement.element);
