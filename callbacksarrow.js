"use strict";

// const person4 = {
//   firstName: "Harry",
//   lastName: "Potter",
//   hired: false,
// };
// const person3 = {
//   firstName: "Ron",
//   lastName: "Weasley",
//   hired: false,
// };

// function hire(person) {
//   person.hired = true;
// }
// function fire(person) {
//   person.hired = false;
// }

// function hireorfire(action, person) {
//   action(person);
// }

// hireorfire(hire, person3);

// hireorfire(hire, person4);

// console.log(person3);
// console.log(person4);

////////////////////////////

init();

function init() {
  console.log("init");
  loadJSON("https://petlatkea.dk/2021/hogwarts/students.json", prepareData);
}

function prepareData(data) {
  console.log("prepare data");
  //data received from json
  console.table(data);
}

async function loadJSON(url, callback) {
  const JSONData = await fetch(url);
  const names = await JSONData.json();

  console.table(names);

  callback(names);
}
