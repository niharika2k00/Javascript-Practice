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
    res.push(display1(this[i]));
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
