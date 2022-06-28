const names = ["Charles", "Lucifer", "Harry", "Jack"];

function display(x, idx, arr) {
  console.log(x, idx, arr);
}

Array.prototype.ourForEach = function (callBack) {
  for (let i = 0; i < this.length; i++) {
    callBack(this[i], i, this);
  }
};

//  this refers to names array , callBack func refers to the display func.
names.ourForEach(display);
// names.forEach(display);     // In Build

// https://medium.com/nerd-for-tech/polyfill-for-array-map-filter-and-reduce-e3e637e0d73b
// https://dev.to/umerjaved178/polyfills-for-foreach-map-filter-reduce-in-javascript-1h13
// https://akashjain993.medium.com/js-polyfills-interview-questions-cb431f3c98dd
// https://dev.to/abhishekraj272/js-polyfills-asked-in-interviews-19b3
