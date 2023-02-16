console.log("Welcome to the Javascript World.");

var message;
console.log(message); // undefined
message = "The variable Has been hoisted";

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

// const obj = {
//   name: "John",
//   mystry: () => {
//     const nestedObj = {
//       name: "Fizz",
//       internal: this.name,
//       logName: function () {
//         console.log(this.name);
//       },
//     };
//     nestedObj.logName();
//     console.log(nestedObj);
//   },
// };

// obj.mystry();

var mom_name = "Bobby";

const parent = {
  mom_name: "Chimpu",
  mother: () => {
    mom_name = "Lorry";
    return `${this.mom_name} is my mother.`;
  },
};

console.log(parent.mother());

// const cart = ["dress", "shoes", "laptop", "softtoy"];

// //  passing a func[risky DND] that depends on other func passed in CallBack
// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId);
// });

// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId, function () {
//     getDetails(orderId);
//   });
// });

// // attaching a func
// const promise = createOrder(cart);

// promise.then(function (orderId) {
//   proceedToPayment(orderId);
// });

// returning the data as the next func depends on it.
// createOrder(cart)
//   .then(function (orderId) {
//      return proceedToPayment(orderId);
//   }
//   .then(function (orderId) {
//      return getDetails(orderId);
//   })

// -----------------------------------------

/* var id = "demo@6";
const promise = isValid(id);

promise
  .then(function (data) {
    console.log(data); // log for resolve
    return data;
  })
  .then((data) => {
    return abc(data); // returning promise obj
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

function abc(info) {
  if (info)
    return new Promise(function (resolve, reject) {
      resolve("Ahh! success.");
    });

  return null;
} */

var a = 100; // this var will be shadowed
let b = 200; // this will be shadowed (script scoped)
const c = 300;
{
  var a = 10; // now a points to 10
  let b = 20; // block scoped
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a); // so this also ouputs 10 regardless of block scope
console.log(b); // will ouput 200
console.log(c); // will ouput 300

function z() {
  let a = 23;
  function y() {
    const a = 31;
    function x() {
      console.log(a); // 31
    }
    x();
  }
  y();
}
z();

function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("Namaste Javascript");
}
x();

function x() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
      // put the setT function inside new function close()
    }
    close(i); // everytime you call close(i) it creates new copy of i. Only this time, it is with var itself!
  }
  console.log("Namaste Javascript");
}
x();
