class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

// Don't mention variable type in class in js alike java
// Run by Live server, then try out in console
class User {
  constructor(name, { age, phone = "123-456", address } = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

let user = new User("Bob", {
  age: 23,
  address: new Address("87", "221B Baker St."),
});

console.log(user);
