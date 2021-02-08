"use strict";

const name = "Rasmus Krogsgaard Møller";

const firstSpace = name.indexOf(" ");
const lastSpace = name.lastIndexOf(" ");

const firstName = name.substring(0, firstSpace).trim();
const middleName = name.substring(firstSpace, lastSpace).trim();
const lastName = name.substring(lastSpace).trim();

console.log(firstName);
console.log(middleName);
console.log(lastName);
