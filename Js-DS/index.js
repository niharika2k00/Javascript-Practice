console.log("Welcome to the Javascript World.");
//   ****       Whenever there is   [ START , END ]  then  END  is always EXCLUSIVE       ****

//   ===  check the value as well as the type while == check only the value.
var age = "22";
if (22 === age) console.log("true");
else console.log("false");

//   Null  check returns False
null ? console.log("true") : console.log("false");

// ------------------------------------
//               HOISTING
// ------------------------------------
console.log(name);
console.log("say 123");
var name = "Helloooooo  : )";
console.log(name);

//  Function Execution Context
function sayName() {
  var name = "Miss Coder";
  console.log("Inside the function : " + name);
}

//  Arrow Function
var sayName = () => {
  var name = "Miss Coder";
  console.log("Inside the function - Variable Hoisting : " + name);
};

sayName();
console.log(sayName);

// -----------------------------------------------------------------
//               LEXICAL ENVIRONEMENT  |  SCOPE CHAINING
// -----------------------------------------------------------------
function A() {
  console.log("Value of variable B inside func A(): ", B);
  var B = 100;
  console.log("Value of variable B : ", B);

  var C = () => {
    console.log("Value of variable B inside func C() : ", B);
  };

  C();
}

A();
// console.log("Value of variable B : ", B);   // ReferenceError: B is not defined

// -----------------------------------------------
//               CALLBACK  FUNCTION
// -----------------------------------------------
function callbackFunction(name) {
  console.log("Hello " + name);
}

function outerFunction(callback) {
  let name = "Niharika";
  callback(name);
}

outerFunction(callbackFunction);

// ------------------------------------
//               ARRAY
// ------------------------------------

//   every ()  :  array.every(function(currentValue, index, arr), thisValue)
var num = [2, 45, -100, 96, -32];
console.log("Result of every()  =>  ", num.every(allPositive)); //  false

function allPositive(el, index, arr) {
  console.log("index: ", index);
  return el > 0;
}

//   slice ()  :   array.slice(start, end)         exclusive END.
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(-3, -1));
console.log(fruits.slice(1, 4));

//  splice ()   :    array.splice(index, howMany, item1, ....., itemX)    ==>  REMOVES the element and put into a new array.
/* 
    -  Overwrite the Original Array 
    -  Add element at postion 2 & remove 1 element
*/
var prep = ["is", "at", "before", "after", "above"];
prep.splice(2, 1, "beneath", "near");
// prep.splice(3);    // equivalent to prep.splice(3 , 3)   overwrite with NULL
console.table(prep);

//   fill ()  :   array.fill(value, start, end)
/* 
    -  Overwrite the Original Array 
    -  Replace the Element
*/
fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.fill("Kiwi");
fruits.fill("Kiwi", 0, 1);
console.log(fruits);

// ------------------------------------
//               MAP
// ------------------------------------
console.log("\n\n\n  MAP PART ");
const myMap = new Map();

const keyString = "a string";
const keyObj = {};
const keyFunc = function () {};

// setting the values
myMap.set(keyString, "value associated withstring");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

console.log("Size of the Map in Javascript : ", myMap.size); // 3

// getting the values
console.log(myMap.get(keyString)); //  .get(keyObj)  get(keyFunc)

console.log(myMap.get("a string"));
console.log(myMap.get(keyObj)); //  correct
console.log(myMap.get({})); //  undefined   because keyObj !== {}  as DIFFERENT REFERENCE OF THE OBJECT in the Memory
console.log(myMap.get(function () {})); // undefined, because keyFunc !== function () {}

var map1 = new Map();
map1.set("0", "zero");
map1.set(1, "one");
map1.set(2, "two");

//  -------------         Map Iteration        -----------------
for (const key of map1.keys()) {
  //  .values()
  console.log(key); //  0  1  2
}

for (const [key, value] of map1.entries()) {
  console.log(key + " = " + value);
}

map1.forEach(function (value, key) {
  console.log(key + " = " + value);
});

const hashMap = new Map([
  ["01", "C++"],
  ["02", "C"],
  ["03", "Javascript"],
]);

hashMap.set("04", "Java");

for (const [key, value] of hashMap.entries()) {
  console.log(key, " --> ", value);
}

console.log(hashMap.has("02"));
