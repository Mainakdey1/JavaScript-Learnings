//  creates a new object using the called function as constructor for that object

function myfunction( myArg) {
    this.myProperty = true;
    this.myArg = myArg;
    this.doubleMyArg = () => 2 * myArg;

};

const myObject = new myfunction(10);

console.log(typeof(myObject));
console.log(myObject.myProperty);
console.log(myObject.doubleMyArg());