//   -------    SNIPPET - 0   -----------
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

/*   Output : 0 1 2 3 4
    
        This is bcz of the presence of Let instead of Var.
        As let is a Blocked Scoped thus it changes.
*/

//   -------    SNIPPET - 1   -----------
function a() {
  for (let i = 0; i < 3; i++) {
    function fun() {
      i++;
      setTimeout(() => {
        console.log(i--);
      }, 400);
    }

    fun(i);
  }
}

a(); // function invocation

//  Output : 1 3

//   -------    SNIPPET - 2   -----------
let i = 0;
function fun() {
  i++;
  setTimeout(() => {
    console.log(i--);
  }, 400);
}

for (let i = 0; i < 3; i++) {
  fun(i);
}

/*    Output : 3 2 1
      Because of Closure. Block Scope of function func() is Global.
      So it just access the i variable Globally not the let inside for loop.
    
      If i is passed from the for loop then it will be  1 2 3 as in that case. See the next snippet.       
*/

//   -------    SNIPPET - 3   -----------
let i = 0;
function fun(i) {
  i++;
  setTimeout(() => {
    console.log(i--);
  }, 400);
}

for (let i = 0; i < 3; i++) {
  fun(i);
}
//  Output :    1 2 3

//   -------    SNIPPET - 4   ( IIFE )  -----------
// IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)
(function () {
  var a = (b = 42);
})();

console.log(b);
console.log(typeof b);
console.log(typeof a);
console.log(a);

/* Output : 
42
number 
undefined
not defined */

(function () {
  try {
    throw new Error();
  } catch (x) {
    var x = 1,
      y = 2;
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();

/* Output : 
1 
undefined
2 

        Explanation : 
  variable a is function scoped so its available Locally in the function Execution Context
  Whereas variable b is not declared in function scope so by default its being declared in the GLOBAL EXECUTION Context.
 */

//   -------    SNIPPET - 5   -----------
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

//  Output : 5 5 5 5 5 5

function fun() {
  for (var i = 0; i < 5; i++) {
    (function (x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    })(i);
  }
}

fun();

//  Output : 0 1 2 3 4

//   -------    SNIPPET - 6   -----------
console.log(typeof typeof 1); // String
// typeof 1 will return "number" and typeof "number" will return string.

console.log(1 < 2 < 3); // 1 < 2 yes  => 1 < 3  yes =>  TRUE  =>  1
console.log(3 > 2 > 1); // 3 > 2 yes  =>  1 > 3  NO  =>   FALSE  => 0

function foo1() {
  return {
    bar: "hello",
  };
}

function foo2() {
  return;
  {
    bar: "hello";
  }
}

//   -------    SNIPPET - 7   -----------
//  Outer Function
function x() {
  var a = 200,
    b = 500;

  //  Inner Function
  function y() {
    console.log("Value coming due to Lexical Environment : ", b);
  }

  // y();
  return y;
}

var closure = x();
console.log(closure);
closure();

// x()();   // call inenr func

//   -------    SNIPPET - 8 [NOTATIONS]   -----------
// Function Statement aka Function Declaration
function a() {
  console.log("Hello");
}
a();

// Function Expression
var b = function () {
  console.log("Hello");
};
b();

// Named Function
var c = function abc() {
  console.log("Named Function");
};
c();

//  First Class Function
// If functions is treated like other variables.So the functions can be assigned to any other variable OR PASSED AS AN ARGUEMENT & RETURNED by another function.
var d = function (param) {
  return function abc(param) {
    var xp = 01;
    console.log(param + xp);
  };
};

console.log(d("Dev"));

//   -------    SNIPPET - 9   -----------
setTimeout(() => {
  console.log("Inside Timer");
}, [5000]);

function x(y) {
  console.log("Inside X");
  y();
}

x(function y() {
  console.log("Y");
});

/* 
    Inside X
    Y
    Inside Timer
*/

//   -------    SNIPPET - 10   -----------
// Const --> Block scope
// Let  -->  Script scope
var b = 10;
{
  let a = 100;
  var b = 45;
  const c = 78;

  console.log(a);
  console.log(b);
  console.log(c);
}

console.log("Outer ", b);
console.log("Inner ", a);

//   -------    SNIPPET - 11   -----------
var c = 21;
var girl = function () {
  console.log(c); // undefined
  var c = 20;
};
girl();

// Output : undefined

//   -------    SNIPPET - 12   -----------
//  Using REDUCE func(), display the name of the characters whose age < 30.
//  [ ] initial value in syntax.
const users = [
  {
    name: "Oswald",
    age: 24,
  },
  {
    name: "Henry",
    age: 32,
  },
  {
    name: "Daisy",
    age: 14,
  },
  {
    name: "Johnny",
    age: 51,
  },
];

const result = users.reduce((acc, currValue) => {
  if (currValue.age < 30) acc.push(currValue.name);

  return acc;
}, []);

console.log("Result : ", result);
