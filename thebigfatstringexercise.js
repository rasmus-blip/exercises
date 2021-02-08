"use strict";

let input;
let output;
document.querySelector("button").addEventListener("click", getInput);

function getInput() {
  input = document.querySelector("#input").value;

  pickedOption();
}

function pickedOption() {
  let selector = document.querySelector("#selector").value;

  if (selector === "0") {
    const part1 = input.substring(0, 1).toUpperCase();
    const part2 = input.substring(1).toLowerCase();
    output = part1 + part2;
  } else if (selector === "1") {
    const firstSpace = input.indexOf(" ");
    output = input.substring(0, firstSpace).trim();
  } else if (selector === "2") {
    const firstSpace = input.indexOf(" ");
    output = input.substring(0, firstSpace).length;
  } else if (selector === "3") {
    const firstSpace = input.indexOf(" ");
    const lastSpace = input.lastIndexOf(" ");
    const middleName = input.substring(firstSpace, lastSpace).trim();
    output = `The middlename starts at ${
      firstSpace + 2
    } and ends at ${lastSpace} and the middlename is ${middleName}`;
  } else if (selector === "4") {
    if (input.endsWith(".jpg") || input.endsWith(".png")) {
      output = "This is a filename";
    } else {
      output = "Not a filename";
    }
  } else if (selector === "5") {
    const inputLength = input.length;
    output = "*".repeat(inputLength);
  } else if (selector === "6") {
    const first = input.substring(0, 2);
    const second = input.substring(2, 3).toUpperCase();
    const third = input.substring(3, 6);
    output = first + second + third;
  } else if (selector === "7") {
    const splitted = input.split(" " && "-");
    output = "";

    splitted.forEach((split) => {
      const part1 = split.substring(0, 1).toUpperCase();
      const part2 = split.substring(1).toLowerCase();
      output += part1 + part2 + " ";
    });

    output = output.trim();
  }
  insertResult();
}

function insertResult() {
  document.querySelector("#output").value = output;
}
