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
//                     MAP Polyfill   (store in arr and return)
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

  console.log(accumulator);
};

arr.customReduce(add, 0);

// https://medium.com/nerd-for-tech/polyfill-for-array-map-filter-and-reduce-e3e637e0d73b
// https://dev.to/umerjaved178/polyfills-for-foreach-map-filter-reduce-in-javascript-1h13
// https://akashjain993.medium.com/js-polyfills-interview-questions-cb431f3c98dd
// https://dev.to/abhishekraj272/js-polyfills-asked-in-interviews-19b3

// https://dev.to/umerjaved178/polyfills-for-foreach-map-filter-reduce-in-javascript-1h13
