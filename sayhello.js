"use strict";

let firstName;
let animalType;
let animalName;

sayHello(firstName);
presentPet(animalType, animalName);

function sayHello() {
  console.log(
    `My name is ${firstName}, i have a ${animalType} called ${animalName}`
  );
  console.log(`Hello ${firstName}`);
  firstName = "Paulina";
  console.log(`Hello ${firstName}`);
  presentPet(firstName, animalType, animalName);
}

function presentPet(animalType, animalName) {
  animalType = "Hamster";
  animalName = "Fluff";
  console.log(
    `My name is ${firstName}, i have a ${animalType} called ${animalName}`
  );
}

console.log(firstName);
