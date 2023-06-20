console.log("Welcome to the Javascript World.");

var age = "22";
if (22 === age) console.log("true");
else console.log("false");

//   Null  check returns False
null ? console.log("true") : console.log("false");

// -----------------------------------------------------------
//               HOISTING
// -----------------------------------------------------------
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

// ----------------------------------------------------------------------
//               CALLBACK  FUNCTION     -->      A callback is a function passed as an argument to another function.
// ----------------------------------------------------------------------
//  Example - 1
function callbackFunction(prev, name) {
  console.log("Hello " + prev + " " + name);
}

function outerFunction(prev, callback) {
  let name = "Niharika";
  callback(prev, name);
}

outerFunction("Miss", callbackFunction); //  Hello Miss Niharika

// Example - 2
var func2 = () => {
  let b = "efgh";
  return b;
};

var func1 = (cb) => {
  let a = "abcd";
  let b = cb();
  console.log(a + b);
};

func1(func2);

// -----------------------------------------------------------
//               STRINGS
// -----------------------------------------------------------
// slice(start, end)
// substring(start, end)
// substr(start, length)
// **     If LENGTH OR END specified, then print the whole string.

let str = "Apple, Banana, Kiwi";

// str.slice(7) | OR | str.slice(-12); //  Banana, Kiwi
str.substring(7, 13); //  Banana     [exclusive END]

// -----------------------------------------------------------
//               ARRAY  ITERATION      https://www.w3schools.com/js/js_array_iteration.asp
// -----------------------------------------------------------
//   every ()  :  array.every(function(currentValue, index, arr), thisValue)
var num = [2, 45, -100, 96, -32];
console.log("Result of every()  =>  ", num.every(allPositive)); //  false

function allPositive(ele, index, arr) {
  console.log("index: ", index);
  return ele > 0;
}

// forEach(val, index, arr);
num.forEach((val, idx) => {
  console.log(val);
});

//  map(val, index, arr);   Return: array
num.map((val, idx, arr) => {
  console.log(val);
});

//  filter(val, index, arr);   Return: array
var ans = num.filter((val, idx, arr) => {
  console.log(val); // 2 45 ....
});
console.log(ans); // []

//  find()  -->  returns the value of the first element that passes a test.
num.find((val, idx, arr) => {
  if (val > 20) return val;
});

//  array.includes(element, start)
let text = "hello world";
text.includes("world");

var arr = [1, 2, 3];
console.log([...arr, 5]); // [1 2 3 5] append element that doesn't change the original array

const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}
var updatedUser = {...user, age:20};  // update age parameter value


//   slice ()  :   array.slice(start, end)         exclusive END.  [DONOT overwrite the original arr]
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(-3, -1)); // ['Lemon', 'Apple']
console.log(fruits.slice(1, 4));

//  splice ()   :    array.splice(index, howMany, item1, ....., itemX)     ==>     REMOVES the element and REPLACE into a new array.
/*
    -  Overwrite the Original Array
    -  Add element at postion 2 & remove 1 element
*/
var prep = ["is", "at", "before", "after", "above"];
prep.splice(2, 1, "beneath", "near");
prep.splice(3); // equivalent to prep.splice(3 , 3)   overwrite with NULL
console.table(prep);

//   fill ()  :   array.fill(value, start, end)
/*
    -  Overwrite the Original Array a
    -  Replace the Element
*/
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi");

console.log(fruits);

// -----------------------------------------------------------
//                CALL() , APPLY() , BIND()   METHOD        https://www.w3schools.com/js/js_function_bind.asp
// -----------------------------------------------------------
/*
    call() method takes arguments separately.
    apply() method takes arguments as an array
*/
const person1 = {
  fname: "Niharika",
  lname: "Dutta",
};

const person2 = {
  fname: "Teddy",
  lname: "Henfrey",
};

var display = function (place, method) {
  console.log(
    "Name =  " + this.fname + " " + this.lname,
    "in",
    place + ": Method @",
    method
  );
};

// func.call()  =>  1st parameter refers to the object[this], then rest refers as variables.
display.call(person1, "Denmark", "all()");
display.call(person2);

display.apply(person2, ["Copenhagen", "apply()"]);

//  Bind => doesnt invoke the method directly, but it returns a copy of the function.
let res = display.bind(person2, "Greenland", "bind");
res();

// -----------------------------------------------------------
//                      CURRYING FUNCTION
// -----------------------------------------------------------
//  Example : 1
var add = function (x, y) {
  console.log(x + y);
};

let result = add.bind(this, 2);
result(3);
console.log(result);

/*
      After (this) :
  add becomes function(2 , y){
    console.log(2 + y);
  }
   and this above function is returned.

  Line Next :     result(3)
*/

//  Example : 2
const addCurry = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};
console.log(addCurry(2)(3)(5)); //  10

// -----------------------------------------------------------
//               MAP
// -----------------------------------------------------------
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
