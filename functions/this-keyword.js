// The keyword this refers to the value of the object that is bound to the function at the time of its call, 
// meaning that its value is different depending on whether a function is called as a method,
//  as a standalone function, or as a constructor.

console.log(this);
//returns window in browsers
console.log(global);

let myObject = {
    myMethod() { console.log( this )},
    myArrowFunction: () => console.log( this ),
    myEnclosingMethod: function () {
        this.myArrowFunction = () => { console.log( this )};
    }
};

console.log(myObject.myMethod());
console.log(myObject.myArrowFunction());

// did till this in arrow functions but didnt really understand that well