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

a();

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

//   -------    SNIPPET - 4   -----------
// IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)
(function () {
  var a = (b = 42);
})();

console.log(b);
console.log(typeof b);
console.log(typeof a);
console.log(a);

/*   Output : 
 42
 number 
 undefined
 not defined
 
 
     Explanation : 
  variable a is function scoped so its available Locally in the function Execution Context
  Whereas variable b is not declared so by default its being declared in the GLOBAL EXECUTION Context.
 */

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

console.log(typeof typeof 1); // String
// typeof 1 will return "number" and typeof "number" will return string.

console.log(1 < 2 < 3); // 1 < 2 yes  => 1 < 3  yes =>  TRUE  =>  1
console.log(3 > 2 > 1); // 3 > 2 yes  =>  1 > 3  NO  =>   FALSE  => 0

function fun() {}

fun();

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
