// 3 ways to costruct objects

// 1) Creating object via "factory funciton" 
// 1a) declare factory function to create object
function myFactoryFunc(_name, _lastName) {
    return {
        name: _name,
        lastName: _lastName
    }
}
// 1b) create objects using above factory funciton 
var myFactoryFuncCreated_1 = myFactoryFunc('ilker', 'kiris');
var myFactoryFuncCreated_2 = myFactoryFunc('hakan', 'gider');

// 2) Creating object via "constructor funciton"
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
MyAnimalPrototype.constructor
myAnimal_1.myType
myAnimal_2.myType
myAnimal_1.constructor
myAnimal_1.__proto__
*/
// 3c) add things
MyAnimalPrototype.prototype.isHotBlooded = true;

var myAnimal_3 = new MyAnimalPrototype('aligator');
var myAnimal_3b = Object.create(myAnimal_3);

// var myAnimal_2 = Object.create(new MyAnimalPrototype(''));