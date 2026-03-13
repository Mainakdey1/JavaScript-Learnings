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

