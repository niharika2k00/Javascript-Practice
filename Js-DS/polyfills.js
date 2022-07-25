/*             List of Polyfills 
            ------------------------

    1) For Each
    2) Filter  
    3) Map 
    4) Reduce 
    5) Bind 
    6) SetTimeOut
    7) SetInterval 

*/

const arr = ["Charles", "Lucifer", "Harry", "Jack"];

// (val , idx , arr)
function display(x, idx, arr) {
  console.log(x, idx, arr);
}

// _________________________________________________________
//                  FOR EACH LOOP  Polyfill
// _________________________________________________________
Array.prototype.customForEach = function (callBack) {
  for (let i = 0; i < this.length; i++) {
    callBack(this[i], i, this);
  }
};

//  this refers to arr array , callBack func refers to the display func.
arr.customForEach(display);
// arr.forEach(display);     // In Build

// _________________________________________________________
//                  FILTER Polyfill
// _________________________________________________________
Array.prototype.customFilter = function (callBack) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].length > 5) callBack(this[i], i);
  }
};

arr.customFilter(display);

// _________________________________________________________
//                   MAP Polyfill   (store in arr and return)
// _________________________________________________________
var numArr = [1, 2, 3, 4];

var display1 = (ele) => {
  return ele * ele;
};

Array.prototype.customMap = function (callBack) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callBack(this[i]));
  }

  return res;
};

console.log(numArr.customMap(display1));

// _________________________________________________________
//                  REDUCE  Polyfill
// _________________________________________________________

//  (total , curr , idx , arr)
var add = (accumulator, currVal, idx, arr) => {
  accumulator += currVal;
  return accumulator;
};

Array.prototype.customReduce = function (callBack, initialValue) {
  var accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = callBack(accumulator, this[i], i, this);
  }
  return accumulator;
};

console.log(arr.customReduce(add, 0));

// _________________________________________________________
//                  BIND  Polyfill
// _________________________________________________________
asdfaf;

// _________________________________________________________
//                  SET-TIME-OUT  Polyfill
// _________________________________________________________

// https://dev.to/abhishekraj272/js-polyfills-asked-in-interviews-19b3
// https://dev.to/umerjaved178/polyfills-for-foreach-map-filter-reduce-in-javascript-1h13






<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!--   CSS   -->
    <link rel="stylesheet" href="style.css" />

    <!-- <style>
      h1 {
        color: blue;
      }
    </style> -->

    <title>Js Practice</title>
  </head>

  <body>
    <div>
      <h1>Welcome to the Javascript World.</h1>

      <div>
        <div class="container">
          <div class="default box1">1</div>
          <div class="default box2" style="background-color: #fcbf49">2</div>
          <div class="default box3">3</div>
          <div class="default box4">4</div>
        </div>

        <div class="effector">Discoo Effect</div>
      </div>

      <form id="frm1" action="/action_page.php">
        <label for="fname">First name:</label><br />
        <input type="text" id="fname" name="fname" value="John" /><br />

        <label for="lname">Last name:</label><br />
        <input type="text" id="lname" name="lname" value="Doe" />
      </form>

      <br />
      <br />
      Type Your Name -->
      <form><input type="text" id="input" name="name" /><br /></form>
      <p id="display"></p>

      <div style="margin: 2rem; align-items: centear; justify-content: center; text-align: center">
        <button type="button" onclick="clickFunc()">Click Me!</button>
      </div>

      <!--      Dropdown             Inline OnChange  -->
      <select onchange="changeSelect(this)">
        <option value="1">Text 1</option>
        <option value="2">Text 2</option>
      </select>
    </div>

    <!--   JAVASCRIPT   -->
    <script type="text/javascript" src="index1.js"></script>

    <!--  <script>
      console.log("Welcome ! ");
      document.querySelector(".box2").style.backgroundColor = "deeppink";
    </script> -->
  </body>
</html>
