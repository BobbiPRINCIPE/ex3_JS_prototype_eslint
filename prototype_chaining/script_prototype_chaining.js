// NOTE_1 prototypical inheritance is more like inheritance through containment. See block_1
/**
 * NOTE_2 prototypical chaining (see block_1, block_2); 
 * when you ask for a property (attribute or a function) on a JS object, 
 * 1) JS first looks for that property on that object, if it finds it, serves it
 * 2) if it does not find it in the object, then looks into it's __proto__, if it finds in __proto__, it serves it
 * 3) if it does not find it in the object's __proto__ and __proto__'s has a prototype which is not Object.prototype, it looks into that to serve it
 * 4) JS goes up the prototype chain until it finds it or until a __proto__ === Object.prototype 
 */
// NOTE_3 you can dynamically add and change object's __proto__ value, hence in a way add "inheritance" behaviour via "containment" to JS objects. (see block_1 and block_2)

// block_1 - prototype chaining, 
// block_1A - create 3 objects
var myObjectA = { a: 1 };
var myObjectB = { b: 20 };
var myObjectC = { c: 300 };
// NOTE_1A myObjectA only has property 'a' and access to only 'a' and its __proto__ is default provided one, Object.prototype
// NOTE_1A myObjectB only has property 'b' and access to only 'b' and its __proto__ is default provided one, Object.prototype
// NOTE_1A myObjectC only has property 'c' and access to only 'c' and its __proto__ is default provided one, Object.prototype
console.log("--> block_1A myObjectA only has property 'a' and access to only 'a' and its __proto__ is default provided one, Object.prototype");
console.log("myObjectA %s", JSON.stringify(myObjectA));
console.log("myObjectA", myObjectA);
console.log("myObjectA.a %s", myObjectA.a);
console.log("myObjectA.__proto__ === Object.prototype %s", myObjectA.__proto__ === Object.prototype);
console.log("--> block_1A myObjectC only has property 'c' and access to only 'c' and its __proto__ is default provided one, Object.prototype");
console.log("myObjectC");
console.log(myObjectC);
console.log("myObjectC.a %s", myObjectC.a);
console.log("myObjectC.b %s", myObjectC.b);
console.log("myObjectC.c %s", myObjectC.c);
console.log("myObjectC.__proto__ === Object.prototype %s", myObjectC.__proto__ === Object.prototype);

// block_1B - create prototype chain between above 3 objects; myObjectC.__proto__=myObjectB, myObjectB.__proto__=myObjectA
myObjectB.__proto__ = myObjectA;
myObjectC.__proto__ = myObjectB;
// NOTE_1B myObjectA only has property 'a' and can access to only 'a'    and its __proto__ is default provided one, Object.prototype
// NOTE_1B myObjectB only has property 'b' but can access to 'b','a'     and its __proto__ is myObjectA
// NOTE_1B myObjectC only has property 'c' but can access to 'c','b','a' and its __proto__ is myObjectB
console.log("--> block_1B myObjectC only has property 'c' but can access 'c','b','a' and its __proto__ === myObjectB, whose __proto__ === myObjectA");
console.log("myObjectC");
console.log(myObjectC);
console.log("myObjectC.a %s - via going 2 levels up on its proto chain", myObjectC.a);
console.log("myObjectC.b %s - via going 1 level  up on its proto chain", myObjectC.b);
console.log("myObjectC.c %s", myObjectC.c);
console.log("myObjectC.__proto__ === myObjectB %s", myObjectC.__proto__ === myObjectB);

// block_1C - using __proto__  or Object.create for prototype chaining
var myObjectD1 = {};
myObjectD1.__proto__ = myObjectC;
// NOTE below 1 line is equivalent to above 2 lines
var myObjectD2 = Object.create(myObjectC);
// NOTE_1C myObjectD1 and myObjectD2 has no property, but can access to 'c','b','a' via their__proto__ myObjectC
console.log("--> block_1C myObjectD1 and myObjectD2 have no property, but can access 'c','b','a' via their __proto__ === myObjectC");
console.log("myObjectD1 %s , myObjectD2 %s", myObjectD1.valueOf(), myObjectD2.valueOf());
console.log("myObjectD1.a %s - via going 3 levels up on its proto chain", myObjectD1.a);
console.log("myObjectD1.b %s - via going 2 level  up on its proto chain", myObjectD1.b);
console.log("myObjectD1.c %s - via going 1 level  up on its proto chain", myObjectD1.c);
console.log("myObjectD1.__proto__ === myObjectC %s", myObjectD1.__proto__ === myObjectC);

// block_1d - additions to object that __proto__ points to get reflected as expected
myObjectA.aa = -1;
console.log("myObjectB.aa", myObjectB.aa);

// block_2
// block_2A create objects
var myObject1 = { a: 1, b: 2, c: 3 };
var myObject2 = { c: 30, d: 40, e: 50 }; // NOTE myObject2.c will "shadow" myObject1's c, when myObject2's __proto__ is myObject1
var myObject3 = { e: 500, f: 600, g: 700 }; // NOTE myObject3.e will "shadow" myObject2's e, when myObject3's __proto__ is myObject2

// block_2B, create prototype chain
myObject2.__proto__ = myObject1;
myObject3.__proto__ = myObject2;
var myObject4 = Object.create(myObject3);

// block_2C, NOTE difference between accessing a property via prototype chaining and having that as property of object
console.log("NOTE myObject2 has access to 'a' via its __proto__, myObject2.a %s", myObject2.a);
console.log("but myObject2 does not have a property 'a', myObject2.hasOwnProperty('a') %s", myObject2.hasOwnProperty('a'));

// block_2D, NOTE upon setting value of a property that could be accessed via prototype chain, that property gets added to the object
console.log("NOTE myObject2 has access to 'b' via its __proto__, myObject2.b %s, myObject2.hasOwnProperty('b') %s", myObject2.b, myObject2.hasOwnProperty('b'));
myObject2.b = 20;
console.log("but after setting it to a value, myObject2.b=20, that property, b,  gets added to the myObject2. myObject2.hasOwnProperty('b') %s", myObject2.hasOwnProperty('b'));
console.log("myObject1.b %s", myObject1.b);
console.log("myObject2.b %s", myObject2.b);