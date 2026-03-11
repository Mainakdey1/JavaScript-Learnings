console.log(2 + 2 === 4);
console.log(2 + 2 !== 4);

// loose comparions

console.log(2 == '2');
console.log(2 != '2');


let exp = 2 === 3 || 5 === 5;
console.log(exp);

let exp1 = 2 === 3 && 5 === 5;
console.log(exp1);

console.log(!!'string');


//logic operators and evaluations of truthy or falsy values

console.log(null && 'my string');
console.log('my string' && false);

console.log('My string' || 'my string'); // if both non boolean, what is returned depends on which can be coerced to true

//nullish coalescing
console.log(null ?? 'string');
console.log(undefined ?? 'string');

//logical operator assignment
let variable = true;

variable &&= 2 + 2;
console.log(variable);