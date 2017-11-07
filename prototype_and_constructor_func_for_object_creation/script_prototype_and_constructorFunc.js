// 3 ways to costruct objects

// 2) Creating object via "constructor function"
// 2a) declare constructor function
function MyPerson(_name, _lastName) {
    this.name = _name;
    this.lastName = _lastName
}
// 2b) create objects using above constructor function
var myPerson_1 = new MyPerson('gudullu', 'ergun');
var myPerson_2 = new MyPerson('cankirili', 'saban');

// 3) Creating objects via prototype
// 3a) declare function that will be used as prototype
function MyAnimalPrototype(_type) {
    this.myType = _type;
}
// 3b) create objects
var myAnimal_1 = new MyAnimalPrototype('dog');
var myAnimal_2 = new MyAnimalPrototype('cat');
/*  check below in dev tool console
MyAnimalPrototype.prototype
myAnimal_1.__proto__
MyAnimalPrototype.constructor
myAnimal_1.__proto__.constructor
MyAnimalPrototype
myAnimal_1.myType
myAnimal_2.myType
*/

// 3c) NOTE attributes (and functions) added to MyAnimalPrototype.prototype after instances were created, will be available to ALL objects created using that constructor function
MyAnimalPrototype.prototype.isHotBlooded = true;

var myAnimal_3 = new MyAnimalPrototype('aligator');

// 4d) You can do prototype chaining/inheritance using just an object as well via Object.create
var myAnimal_3b = Object.create(myAnimal_3);
// NOTE above is equivalent to below 2 lines
var myAnimal_3b2 = {};
myAnimal_3b2.__proto__ = myAnimal_3;

// var myAnimal_2 = Object.create(new MyAnimalPrototype(''));