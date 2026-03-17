let iterCount = 0;
console.log('Pre - Loop');

while (iterCount <= 5) {
    if (iterCount === 2) {
        console.log('Iteration skipped');
        break;
    }
    console.log(`Iteration number ${iterCount}`);
    iterCount++;
};

let iterCount1 = 0;
do {
    console.log(`Loop ${iterCount1}`);
    iterCount1++;
} while (iterCount1 < 4);

for (let i = 0; i < 3; i++) {
    console.log(i);
};

const myIterable = [true, false, true];

for (const item of myIterable) {
    console.log(item);
};

const myObject = { "myProperty" : true, "mySecondProperty" : false };

console.log(Object.values(myObject));
console.log(Object.keys(myObject));

const myArr = [true, false];
myArr.forEach((myElement, i, originalArray) => {
    console.log(i, myElement, originalArray);
});

const myMap = new Map([
  ['myKey', true],
  ['mySecondKey', false ],
]);
myMap.forEach( ( myValue, myKey, originalMap ) => {
    console.log( myValue, myKey, originalMap  );
});

const mySet = new Set([
    true, false
]);
mySet.forEach( (myElement, myKey, originalSet) => {
    console.log(myElement, myKey, originalSet);
});

const myterable = [1, 2, 3];
const myIterator = myterable[ Symbol.iterator]();

console.log(myterable, myIterator);
console.log(myIterator.next());

function* myGenfunction() {
    yield 'first value';
    yield 'second value';
    return 3;
};

const genobject = myGenfunction();
console.log(genobject.next());
console.log(genobject.next());
console.log(genobject.next());

function* mynewgen() {
    const fyield = yield;;
    yield fyield + 10;
};

const myGenobj = mynewgen();
console.log(myGenobj.next());
console.log(myGenobj.next(5));