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

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

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

function aa() {
  return (() => 0)();
}
console.log(aa()); // 0

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

//   -------    SNIPPET - 13   [Obj.freeze()  make the properties immutable]  -----------
const obj = {
  prop: 42,
};
Object.freeze(obj);
obj.prop = 33; // Throws an error in strict mode
console.log(obj.prop); // expected output: 42

//   -------    SNIPPET - 14   -----------
console.log("Before");

setTimeout(() => {
  console.log("Inside SetTimeOut");
}, 0);

console.log("After");

/*
Before
Inside SetTimeOut
After

-----   This is bcz once the parser enters into the setTimeOut snippet, it will put into MacroTask Queue/CallBack Queue.
And once the CALLSTACK of Global Execution Context will empty Event Loop will send the setTimeOut operation into the CallStack.
*/

//   -------    SNIPPET - 15   [Higher Order Function]    -----------
var radiusArr = [1, 2, 3, 4];

function Area(radius) {
  return (Math.PI * radius * radius).toFixed(2); // Pi * r * r
}

var calculate = function (radiusArr, Operation) {
  var res = [];
  var len = radiusArr.length;
  for (var i = 0; i < len; i++) res.push(Operation(radiusArr[i])); //  Area(radiusArr[i])

  return res;
};

console.log(calculate(radiusArr, Area)); // Higher Order Function

//   -------    SNIPPET - 16   -----------
const obj = {
  name: "John",
  mystry: function () {
    const nestedObj = {
      name: "Fizz",
      logName: () => {
        console.log(this.name);
      },
    };

    nestedObj.logName();
  },
};

obj.mystry(); //  John
/*      Bcz arrow function takes the "this" scope of parent.
  If its function() {...}  then it would have been Fizz.
*/

var mom_name = "Bobby";

const parent = {
  mom_name: "Chimpu",
  mother: () => {
    mom_name = "Lorry";
    return `${this.mom_name} is my mother.`;
  },
};

console.log(parent.mother());

/*
https://www.section.io/engineering-education/how-to-use-javascript-arrow-functions-and-this-keyword/
function() {...}
   "this" represents an object that executes the current function, by the function execution context. It refers to a global object window.
Denotes the parent and refers to the context where the anonymous function is called.


() => {...}
refers to the scope[Global Object] where the function(the enclosing context) is present.
*/

const cart = ["dress", "shoes", "laptop", "softtoy"];
/*
  passing a func[risky DND]
  This leads to CallBack Hell, so without depending on other func. just attach 2nd func to the result of the 1st
 */
createOrder(cart, function (orderId) {
  proceedToPayment(orderId);
});

createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function () {
    getDetails(orderId);
  });
});


// ----------------------------------------
            PROMISE CHAINING  ✅✅
// ----------------------------------------

var id = "demo@6";
const promise = isValid(id);

promise
  .then(function (data) {
    console.log(data); // log for resolve
    return data;
  })
  .then((data) => {
    return promise1(data); // returning promise obj
  })
  .then((res) => {
    console.log(res);
  })
  .catch(function (err) {
    console.log(err);
  });

function isValid(id) {
  const pr = new Promise(function (resolve, reject) {
    if (check(id)) {
      setTimeout(function () {
        resolve(id);
      }, 5000);
    } else {
      const err = new Error("Validation failed!");
      reject(err);
    }
  });

  console.log(pr);
  return pr;
}

function check(id) {
  if (id.includes("@") || id.includes("#") || id.includes("$")) return true;
  return false;
}

function promise1(info) {
  if (info)
    return new Promise(function (resolve, reject) {
      resolve("Ahh! success.");
    });

  return null;
}
