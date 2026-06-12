const some_Map = new Map();
console.log(some_Map);

//You can pre-populate a Map with data using a syntax that resembles an array (or any iterator object) containing array-like objects made up of two elements.
const my_Map = new Map( [ ['key1', 'value1'], ['key2', 'value2'] ] );
console.log(my_Map);

//methods of MAP
//set, has, get
some_Map.set('key1', 'value1');
console.log(some_Map.has('key1'));
console.log(some_Map.get('key1'));
console.log(some_Map.delete('key1'));


//WeakMap
//When no references to a key exist outside the WeakMap, that object or symbol,
//  and the associated value in the WeakMap,
// are both eligible for garbage collection.
const myWeakMap = new WeakMap();

//Set

console.log('SET METHODS\n');
const mySet = new Set(); //Constructor

const mySet1 = new Set( [ 1, 2, 3, 3]);
console.log(mySet1); //duplicates are not allowed in Set

//methods of Set

mySet.add(1);
console.log(mySet.has(1));
mySet.delete(1);
console.log(mySet);

//inserting elements to an Array from a Set

const arr = Array.from(mySet1);
console.log(arr);

//WeakSet

const myWeakSet = new WeakSet();
console.log(myWeakSet);

//The WeakSet syntax is similar to Set, though a 
// WeakSet isn't iterable, and trying to add any 
// value other than an object or symbol causes a syntax
//  error. As with WeakMap, when no other references to a
//  value referenced by a WeakSet exist, that value becomes
//  eligible for garbage collection.