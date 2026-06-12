
const myArray = new Array();


const myArray1 = [true, [], 'String'];
console.log(myArray1);

const myArray2 = new Array(true, null, 'strinng');
console.log(myArray2)

const myArray3 = new Array(3);
console.log(myArray3);
console.log(myArray3.length);

//trash string indexing

const myArray4 = [ "My string", 50, true ];
console.log(myArray4['0']);
console.log(myArray4[9]); //gives undefined instead of error when index out of bounds


//Array destructuring   
const myArray5 = [ 1, 2, 3 ];
const [ myElement, mySecondElement, myThirdElement ] = myArray5;

console.log(myElement);


//skipping values in destructuring
const myArray6 = [ 1, 2, 3 ];
const [ firstValue,, secondValue ] = myArray6;

console.log(secondValue);


//spread operator
const myArray7 = [1, 2, 3, 4, 5];
console.log(...myArray7);

//merging arrays using spread operator
const mySecondArray = [...myArray1, ...myArray2];
console.log(mySecondArray);

//rest operator
function myFunction( ...myParameters ) {
    let result = 0;
    myParameters.forEach( ( myParam ) => {
        result += myParam;
    });
    return result;
};

console.log(myFunction(1, 2, 3));