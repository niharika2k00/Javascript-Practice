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
