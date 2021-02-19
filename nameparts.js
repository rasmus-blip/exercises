"use strict";

let nameObject;

function nameparts(fullname) {
  const firstSpace = fullname.indexOf(" ");
  const lastSpace = fullname.lastIndexOf(" ");

  const firstName = capitalize(fullname.substring(0, firstSpace).trim());
  const middleName = capitalize(
    fullname.substring(firstSpace, lastSpace).trim()
  );
  const lastName = capitalize(fullname.substring(lastSpace).trim());

  return { firstName, middleName, lastName };
}

const something = nameparts("rasmus krogsgaard møller");
console.log(something);

function fullName(lastName, firstName, middleName) {
  let result = "";

  if (result) {
    result = `${firstName} ${middleName} ${lastName}`;
  } else {
    result = `${firstName} ${lastName}`;
  }
  return result;
}

function capitalize(str) {
  const result =
    str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
  return result;
}
