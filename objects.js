"use strict";

const person1 = {
  firstName: "Peter",
  age: 29,
  student: false,
};

const person2 = {
  firstName: "Rasmus",
  age: 25,
  student: true,
};

person1 = person2;

person1.age++;
console.log(person1);

console.log(person1);
console.log(person1.lastName);

person1.lastName = "Møller";

console.log(person1);
console.log(person1.lastName);

person1.lastName = undefined;

console.log(person1.lastName);
console.log(person1.middleName);

delete person1.lastName;
console.log(person1.lastName);
console.log(person1);

person1.lastName = null;
console.log(person1.lastName);
console.log(person1);
