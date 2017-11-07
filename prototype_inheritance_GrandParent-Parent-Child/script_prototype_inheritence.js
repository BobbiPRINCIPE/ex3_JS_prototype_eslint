// create an inheritance structure of GrandParent <-- Parent <-- Child <-- ChildChild
// 1) GrandParent constructor function
function GrandParent(_name) {
    this.name = _name; // NOTE_1 "this" will point to instance created via constructor function via new operator
    this.grandParentFunc1 = function(_prefix) {
        return _prefix + "-" + this.name;
    };
}
// 1b) adding another func to GrandParent via its prototype
GrandParent.prototype.grandParentFunc2 = function(_prefix) {
    return _prefix + " " + this.name;
};
// console.log(GrandParent.prototype);
// console.log(GrandParent.prototype.constructor);

// 2) Parent constructor function, which will be "extending" above GrandParent, via prototypical inheritance
// 2a) declare constructor function
function Parent(_name, _lastname) {
    GrandParent.call(this, _name); // NOTE2 this is equivalent to calling a parent's constructor in Java. NOTE passing "this" pointing to Parent instance for GrandParent to use via "call"
    this.lastname = _lastname;
    this.canTalk = true;
    this.parentFunc1 = function(_prefix) {
        return _prefix + "-" + this.lastname;
    };
    this.greetFunc = function() {
        if (this.canTalk) {
            console.log("Ola %s %s", this.name, this.lastname);
        }
    };
}
// 2b) below 2 lines along with calling GrandParent constructor function in above Parent constructor function allows prototypical inheritence 
// 1st set Parent's prototype to be GrandParent's
Parent.prototype = Object.create(GrandParent.prototype);
// 2nd preserve(correct) the constructor of Parent to be still old one, Parent. Note above line set it to GrandParent's constructor
Parent.prototype.constructor = Parent;
// 2c) add 2 functions to above via its prototype
Parent.prototype.parentFunc2 = function(_prefix) {
    return _prefix + " " + this.lastname;
};
Parent.prototype.greetFunc2 = function() {
    if (this.canTalk) {
        console.log("Ola 2 %s %s", this.name, this.lastname); // NOTE_1b "this" here still will point to instance constructor function had been used to create via new
    }
};

// 3) Child
// 3a) Child constructor function
var Child = function(_name, _lastname, _title) {
        Parent.apply(this, [_name, _lastname]); // NOTE could have used "call" as well, but wanted to show using "apply" too
        this.title = _title;
        this.childFunc1 = function(_prefix) {
            return _prefix + "-" + this.title;
        };
        // NOTE below is effectively overwriting Parent's greetFunc
        this.greetFunc = function() {
            if (this.canTalk) {
                console.log("Hello %s %s %s", this.title, this.name, this.lastname);
            }
        }
    }
    // 3b) Similarly, below 2 lines set the prototypical inheritance, while preserving the constructor
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
// 3c) add 2 functions to above. NOTE order of this is important, it should be after above block
//     Also note below is effectively ovewriting inherited greetFunc2 of Parent and calling Parent's one as well
Child.prototype.greetFunc2 = function() {
    if (this.canTalk) {
        Parent.prototype.greetFunc2.call(this);
        console.log("Hello 2 %s %s %s", this.title, this.name, this.lastname);
    }
};
Child.prototype.childFunc2 = function(_prefix) {
    return _prefix + " " + this.title;
};

// 4) creating instances(objects)
console.log("----> myChild");
// 4A) Make instance of Child and use the functions (including inherited ones)
var myChild = new Child('ilker', 'kiris', 'Dr');
console.log(myChild.grandParentFunc1('Mr-GrandParent'));
console.log(myChild.grandParentFunc2('Mr-GrandParent-2'));
console.log(myChild.parentFunc1('Mr-Parent'));
console.log(myChild.parentFunc2('Mr-Parent-2'));
console.log(myChild.childFunc1('Mr-Child'));
console.log(myChild.childFunc2('Mr-Child-2'));
myChild.greetFunc(); // NOTE overwritten func implementation from Child executes, not Parent's
myChild.greetFunc2(); // NOTE overwritten func implementation from Child executes, which happens to also execute Parent's one in it

// 4B) NOTE relationship of __proto__ to prototype and constructor
console.log("----> __proto__, prototype, constructor of Child")
console.log(myChild.__proto__);
console.log(Child.prototype);
console.log(Child.prototype.constructor);
console.log(myChild.constructor);
console.log("Object.getPrototypeOf(myChild)", Object.getPrototypeOf(myChild));

console.log("----> myGrandParent");
// 4C) Make instance of GrandParent
var myGrandParent = new GrandParent('ilkerGrandParent');
console.log(myGrandParent.grandParentFunc1('Mister-GrandParent'));
console.log(myGrandParent.grandParentFunc2('Mister-GrandParent-2'));

console.log("----> myGrandParent");
// 4D) Make instance of Parent and use the functions (including inherited ones)
var myParent = new Parent('ilkerParent', 'kiris');
console.log(myParent.grandParentFunc1('Senyor-GrandParent'));
console.log(myParent.grandParentFunc2('Senyor-GrandParent-2'));
console.log(myParent.parentFunc1('Senyor-Parent'));
console.log(myParent.parentFunc2('Senyor-Parent-2'));
myParent.greetFunc();
myParent.greetFunc2();

// 5) Add prototypical chain/inheritance using an object (instead of constructor function) via Object.create
//    NOTE this is not exactly inheritance like above, which sort of behaves similar to other Object Oriented languages like Java, C#, C++
//    But this is more of a prototype chaining per object.
var myChildChild = Object.create(myChild);
console.log("Object.getPrototypeOf(myChildChild)", Object.getPrototypeOf(myChildChild));