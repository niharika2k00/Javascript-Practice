console.log("Welcome to the Javascript World.");

// var message;
// console.log(message); // undefined
// message = "The variable Has been hoisted";

// In JavaScript, all objects interact by REFERENCE when setting them equal to each other.
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting); // Hello

/* background-image: linear-gradient(rgba(0, 0, 0, 0.882), rgba(0, 0, 0, 0.886)), url(./images/Cse.jpg);

.table-row:nth-child(even) {
  background: rgba(238, 238, 238, 0.116);
} */

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
