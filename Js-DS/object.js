console.log("\n ********************  OBJECT ********************\n");

const student = {
  name: "Jack",
  age: 22,
  hobbies: ["reading", "guiter", "coding"],
};

for (let [key, value] of Object.entries(student)) {
  console.log(key + " - " + value);
}

//  Returns Array
Object.entries(student).map((item) => {
  console.log(item[0]);
});

Object.entries(student).forEach((item) => {
  console.log(item);
});
