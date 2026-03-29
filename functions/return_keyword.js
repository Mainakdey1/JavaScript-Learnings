// used to return the value of a function or specify it

const myFunction = function() {
    return 2 + 2;
};

console.log(myFunction());

const myFunction1 = function() {
    return;
};

console.log(myFunction1());

function myFunc(myArg) {
    if (typeof myArg !== 'string') {
        return false;
    };
    if (myArg.length >= 5) {
        return true;
    } else {
        return false;
    };

};

console.log(myFunc(100));
console.log(myFunc('hello'));

//arrow function expressions

const myFunction2 =  () => 2 + 3;

const myfunction3 = () => {return 10 + 10};

console.log(myFunction2());
console.log(myfunction3());