let carAttributes = {
    'color': "red",
    'key': {
        'type': false
    },
    myMethod: console.log('Hello World'),

};

console.log(carAttributes.myMethod);
console.log(carAttributes); 

let emptyObject = {};
console.log(emptyObject.__proto__);

let myObj = { "value" : 5 };
let protoParent = { "protoValue" : true };

myObj.__proto__ = protoParent;

console.log(myObj.protoValue);
console.log(myObj.protoParent);