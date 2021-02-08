"use strict";

// const name = "Longer Hagrid";
// const animalType = "dragon";
// const animalName = "Norbert";

// console.log(`My name is ${name}.
// I have a ${animalType} called ${animalName}`);

// const len = name.length;

// console.log(`${name} is ${len} characters long`);

// const letter = name[0];
// console.log(`The firster letter of ${name} is ${letter}`);

const name = "Albus Percival Wulfric Brian Dumbledore";

const total = name.length;
const scdLetter = name[2];
const sxthLetter = name[6];
const frstD = name[29];
const lastE = name[38];

console.log(`Total number of characters is: ${total}`);
console.log(`The character at index 2 is ${scdLetter}`);
console.log(`The character at index 5 is ${sxthLetter}`);
console.log(frstD);
console.log(lastE);

const str1 = ` \t   There is    space here \n      

space
`;

const str2 = str1.trim();

console.log(str1);
console.log(`_${str2}_`);

const albus = name.substring(0, 6);
const dumbledore = name.substring(29, 39);
const wulfric = name.substring(15, 22);
const spaceWulfric = name.substring(14, 22);
const ian = name.substring(25, 28);
const bus = name.substring(2, 5);

console.log(albus);
console.log(dumbledore);
console.log(wulfric);
console.log(spaceWulfric);
console.log(ian);
console.log(bus);
