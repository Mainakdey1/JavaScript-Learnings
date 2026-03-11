// const myString = "This is a 
// string";

// console.log(myString)

// causes an error

const myString = `This is a 
string `;

console.log(myString);
// template literals by backticks

console.log(`This is an example ${2 + 2}`);

const myNoun = "template literal";

function myTagFunction( myStrings, myPlaceholder ) {
    const myInitialString = myStrings[ 0 ];
    console.log( `${ myInitialString }modified ${ myPlaceholder }.` );
}

myTagFunction`I'm a ${ myNoun }.`;
