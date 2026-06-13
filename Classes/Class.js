class Myclass {

};
console.log(typeof(Myclass));

const myClassInstance = new Myclass();

console.log(myClassInstance);

// constructing a class with methods
class MyclassInstance {
    classMethod() {
        console.log('This is a method of this class');
    };
};
const myclass = new MyclassInstance("A string");

console.log(myclass.classMethod());


// constructing a class with a constructor, also shows usage of this keyword
class Newclass {
    constructor(myval) {
        this.myval = myval;
    };
    myMethod() {
        console.log(this.myval);
    };
};

const newclass = new Newclass("A string");
console.log(newclass.myMethod());


// classes can ae defined as expressions and the name of that class is only available within the class's body.
let myvar = class myClass {

};
// console.log(myClass);
console.log(myvar);
console.log(myvar.name);

class Myclass1 {
    myField;
}
// Class fields are defined using the syntax shown above. They can be initialized with a value, or left uninitialized. In the latter case, they will be initialized to undefined.


console.log('CLASS FIELDS\n');
const myclass1 = new Myclass1();
console.log(myclass1.myField);


// You can also define a setter method for a class field, which allows you to set the value of that field using assignment syntax. Here's an example:
console.log('SETTER METHODS\n');
class myclass2 {
    myres = false;
    set setValue(val) {
        this.myres = val;
    };
};

const myclass2instance = new myclass2();
myclass2instance.setValue = true;
console.log(myclass2instance.myres);

//private fields and methods
class myclass3 {
    #privres = 0;
    #privMethod() {
        console.log('This is a private method');
    };
};

const privClass = new myclass3();

//Static fields and methods
class myclass4 {
    static myStaticField = 'yay';
    static myStaticMethod() {
        console.log('This is a static method');
    };
};

const myclass4instance = new myclass4();
console.log(myclass4.myStaticField);
console.log(myclass4.myStaticMethod());

// This wont work
console.log(myclass4instance.myStaticField); //returned undefined

console.log('STATIC INITIALLIZATION BLOCKS');

class class5 {
    static firstproperty = 'first';
    static secondproperty = 'second';
    static {
        this.secondproperty = 'second';
    };
}

// Static initialization blocks are executed when the class is evaluated, and they can be used to perform any necessary 
// setup for the class, such as initializing static properties or performing other one-time operations. In the example above,
//  the static initialization block sets the value of the secondproperty static field to 'second'.
// dont require an instance of the class to access static properties
console.log(class5.firstproperty);
console.log(class5.secondproperty); 